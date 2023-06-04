import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';;
import { UserContext } from './user.context';

@Injectable({ scope: Scope.REQUEST })
export class ContextService {
  constructor(@Inject(REQUEST) private request) {
    if (!this.request) return;
    if (!this.request.context) {
      this.request.context = {
        meta: {},
      };
    }
  }

 

  get apiVersion(): string | null | undefined {
    return this.request.context.apiVersion;
  }

  set apiVersion(value: string) {
    this.request.context.apiVersion = value;
  }

  get userContext(): UserContext {
    return this.request.context.userContext;
  }

  set userContext(userContext: UserContext) {
    console.log('userContext',userContext)
    this.request.context.userContext = userContext;
  }

  

  /* Custom methods */
  public addMeta(key: string, value: unknown) {
    this.request.context.meta[key] = value;
  }
}