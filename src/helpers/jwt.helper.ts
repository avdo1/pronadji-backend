import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import * as moment from "moment";
import lodashIsEqual from "lodash/isEqual";
import { JwtHelperErrors } from "./jwtHelper.error";
import { IJWTDataToken } from "./interfaces/IJWTDataToken.interface";
import { AppConfigService } from "src/core/appConfig/appConfig.service";

export type IJWTData = Record<string, string | number>;

export type Algoritms = "HS256" | "HS512" | "RS256";

@Injectable()
export class JwtHelper {
  constructor(private readonly appConfigService: AppConfigService) {}
  private _generate(data: IJWTData, alg: Algoritms, key: string, expires: string): string {
    return jwt.sign(data, key);
  }

  /**
   * Strips the jwtString of starting Bearer text
   */
  public stripBearer(jwtString: string): string {
    if (jwtString.startsWith("Bearer ")) {
      return jwtString.substring(7);
    }
  }

  /**
   * Returns JWT payload as object
   */
  public decodePayload(jwtToken: string, complete = false): IJWTDataToken | Record<string, any> {
    return jwt.decode(jwtToken, { complete }) as IJWTDataToken | Record<string, any>;
  }

  /**
   * @param {Object} data Data to add to payload
   * @param {string} key Encryption key
   * @param {string} expires Expiration date in ISO time
   */
  public generateRS256(data: IJWTData, key: string, expires: string): string {
    return this._generate(data, "RS256", key, expires);
  }

  /**
   * Verifies and parses jwt.
   * @param {string} key Key for JWT verifying
   * @param {string[]} alghoritms Allowed algorithms
   * @param {string} jwtToken String containing JWT
   * @param additionalChecks: {[string]: any}
   * @return {Object} Payload data
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public parseJwt(key: string, alghoritms: Algoritms[], jwtToken: string, additionalChecks?: any): IJWTData {
    let checks = { algorithms: alghoritms };
    if (additionalChecks) {
      checks = Object.assign(checks, additionalChecks);
    }
    try {
      return jwt.verify(jwtToken, key) as IJWTData;
    } catch (e) {
      const mask = { maskAsSecurity: true };
      switch (e.message) {
        case "invalid algorithm":
          throw new JwtHelperErrors.JwtTokenInvalidAlgorithmError(mask);
        case "jwt expired":
          throw new JwtHelperErrors.JwtTokenExpiredError(mask);
        case "jwt malformed":
          throw new JwtHelperErrors.JwtTokenMalformedError(mask);
        default:
          throw new JwtHelperErrors.JwtTokenNotValidError({
            ...mask,
            reason: e.message,
          });
      }
    }
  }

  /**
   * Verifies, parses and compares jwt payload with supplied data.
   * @param {Object} data Object with properties to check in payload data
   * @param {string} key Public or Private key for JWT verifying
   * @param {string[]} algorithms Allowed algorithms
   * @param {string} jwtToken String containing JWT
   * @return {boolean} Whether data validation passed
   */
  public parseCompareJwt(data: IJWTData, key: string, algorithms: Algoritms[], jwtToken: string): boolean {
    const payload = this.parseJwt(key, algorithms, jwtToken);
    for (const p in data) {
      if (!lodashIsEqual(data[p], payload[p])) {
        return false;
      }
    }
    return true;
  }

  generateJwtForUser(email: string, member?: number) {
    var privateKey = "pronadji-backend";

    const jwt = this.generateRS256({ sub: email }, privateKey, moment().add(24, "hours").toISOString());

    return jwt;
  }

  generateToken(data: { id: string; email: string }, expirationInHours = 24) {
    const jwt = this.generateRS256(data, this.appConfigService.jwtKeys?.secret, moment().add(expirationInHours, "hours").toISOString());

    return jwt;
  }
}
