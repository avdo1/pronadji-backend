export interface IJWTDataToken {
    header: {
      alg: string;
      typ: string;
    };
    payload: Record<string, number | string>;
    signature: string;
  }