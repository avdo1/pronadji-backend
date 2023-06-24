import { ErrorList } from '../core/error/errorList.decoder';
import { AppErrorBase, ErrorBaseConstructor } from '../lib/error.base';

@ErrorList()
export class JwtHelperErrors extends AppErrorBase {
  public static JwtTokenInvalidAlgorithmError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null;
  public static JwtTokenExpiredError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null;
  public static JwtTokenMalformedError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null;
  public static JwtTokenNotValidError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    reason: string;
  }> = null;
}