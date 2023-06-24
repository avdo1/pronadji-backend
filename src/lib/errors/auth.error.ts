import { ErrorList } from '../../core/error/errorList.decoder';
import { AppErrorBase, ErrorBaseConstructor } from '../../lib/error.base';

@ErrorList()
export class AuthError extends AppErrorBase {
  public static AuthHeaderNoBearerError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    headerName: string;
  }> = null;
  public static AuthTokenUndecodablePayloadError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    headerName: string;
  }> = null;
  public static AuthTokenNoIssuerError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    headerName: string;
  }> = null;
  public static AuthTokenUnknownIssuerError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    headerName: string;
  }> = null;
  public static AuthTokenSubMissingError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null;
  public static AuthTokenUserMissingError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    userId: string;
  }> = null;
  public static AuthNotAuthenticatedError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    message: string;
  }> = null as any;
  public static AuthTokenAlreadyUsedError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null as any;
  public static AuthTokenForbiddenResource: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null as any;
  public static AuthTokenInvalidEndpointUrl: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
  }> = null;
  public static AuthTokenEndpointUrlNotMatches: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    endpointUrl: string;
    currentUrl: string;
  }> = null;
  public static AuthUserAlreadyExistsError: ErrorBaseConstructor<{
    maskAsSecurity: boolean;
    message: string;
  }> = null;
}