import util from 'util';
import deepmerge from 'deepmerge';
export interface ErrorBase<T> extends Error {
  getName: () => string;

  getStack: () => string;

  getStatus: () => number | undefined;
  setStatus: (status: number) => this;

  getData: () => T | undefined;
  setData: (data: T) => this;
  mergeData: (data: T) => this;

  getInnerError: () => Error | undefined;
  setInnerError: (error: Error) => this;

  raise: () => never;

  maskAsSecurity: boolean;
}

export interface ErrorBaseConstructor<T> {
  new (data?: T, innerError?: Error): ErrorBase<T>;

  readonly prototype: ErrorBase<T>;
  name: string;
}

function createError(
  this: ErrorBase<any>,
  name: string,
  data?: object,
  innerError?: Error,
): void {
  Error.captureStackTrace(this, this.constructor);
  this.name = name;
  (this as any).status = 400;
  this.getName = function getName() {
    return this.name;
  };
  this.getStack = function getStack() {
    return this.stack;
  };
  (this as any).data = data;
  this.getData = function getData() {
    return this.data;
  };
  this.maskAsSecurity = !!(data as any)?.maskAsSecurity;
  this.setData = function setData(dataValue: any) {
    this.data = dataValue;
    return this;
  };
  this.mergeData = function mergeData(dataValue: any) {
    this.data = deepmerge(this.data, dataValue);
    return this;
  };
  this.getStatus = function getStatus() {
    return this.status;
  };
  this.setStatus = function setStatus(status: any) {
    this.status = status;
    return this;
  };
  (this as any).innerError = innerError;
  this.getInnerError = function getInnerError() {
    return this.innerError;
  };
  this.setInnerError = function setInnerError(innerErrorInstance: Error) {
    this.innerError = innerErrorInstance;
    return this;
  };
  this.raise = function raise() {
    throw this; // NOSONAR
  };
}

export class AppErrorBase {
  public static initErrors(this: any): void {
    // For each property
    Object.keys(this).forEach((key) => {
      // Replace property with constructor function
      this[key] = function (data?: object, innerError?: Error): void {
        createError.call(this, key, data, innerError);
      };

      // Define property name on the constructor function
      Object.defineProperty(this[key], 'name', {
        writable: true,
        value: key,
      });

      // Make this property inherit from Error
      util.inherits(this[key], Error);
    });
  }
}