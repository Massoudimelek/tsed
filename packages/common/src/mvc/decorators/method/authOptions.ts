import {
  decorateMethodsOf,
  DecoratorMethodParameters,
  DecoratorParameters,
  decoratorTypeOf,
  DecoratorTypes,
  Type,
  UnsupportedDecoratorType
} from "@tsed/core";
import {EndpointFn} from "./endpointFn";

export interface IAuthOptions {
  /**
   * @deprecated Use @Returns from @tsed/schema
   */
  responses?: {
    [statusCode: string]: {
      description: string;
    };
  };
  /**
   * @deprecated Use @Security from @tsed/schema
   */
  security?:
    | {
        [securityName: string]: string[];
      }[]
    | {
        [securityName: string]: string[];
      };

  [key: string]: any;
}

/**
 * Change authentication options.
 *
 * ```typescript
 * @Controller('/mypath')
 * @UseAuth(MyAuthStrategy, {role: ''})
 * class MyCtrl {
 *
 *   @Get('/')
 *   @AuthOptions(MyAuthStrategy, {role: 'admin'})
 *   public getResource(){}
 * }
 * ```
 *
 * @param guardAuth
 * @param options {Object} Object passed to the customer auth strategy
 * @returns {Function}
 * @decorator
 * @decorator
 * @operation
 */
export function AuthOptions(guardAuth: Type<any>, options: IAuthOptions = {}): Function {
  return <T>(...args: DecoratorParameters): TypedPropertyDescriptor<T> | void => {
    switch (decoratorTypeOf(args)) {
      case DecoratorTypes.METHOD:
        return EndpointFn((endpoint) => {
          const store = endpoint.store;

          if (options.responses) {
            const {responses} = options;
            store.merge("responses", responses, true);
            delete options.responses;
          }

          if (options.security) {
            const {security} = options;
            [].concat(security as any).forEach((security) => {
              Object.entries(security).forEach(([name, scopes]: [string, string[]]) => {
                endpoint.operation.addSecurityScopes(name, scopes);
              });
            });

            delete options.security;
          }

          store.merge(guardAuth, options, true);
        })(...(args as DecoratorMethodParameters));

      case DecoratorTypes.CLASS:
        decorateMethodsOf(args[0], AuthOptions(guardAuth, options));
        break;

      default:
        throw new UnsupportedDecoratorType(AuthOptions, args);
    }
  };
}
