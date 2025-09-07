
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PortoJenis
 * 
 */
export type PortoJenis = $Result.DefaultSelection<Prisma.$PortoJenisPayload>
/**
 * Model Portofolio
 * 
 */
export type Portofolio = $Result.DefaultSelection<Prisma.$PortofolioPayload>
/**
 * Model Sertifikat
 * 
 */
export type Sertifikat = $Result.DefaultSelection<Prisma.$SertifikatPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CommunityStatus: {
  active: 'active',
  draft: 'draft',
  archived: 'archived'
};

export type CommunityStatus = (typeof CommunityStatus)[keyof typeof CommunityStatus]


export const PortfolioStatus: {
  active: 'active',
  ongoing: 'ongoing',
  draft: 'draft'
};

export type PortfolioStatus = (typeof PortfolioStatus)[keyof typeof PortfolioStatus]


export const SkillStatus: {
  active: 'active',
  draft: 'draft'
};

export type SkillStatus = (typeof SkillStatus)[keyof typeof SkillStatus]


export const Status: {
  active: 'active',
  draft: 'draft'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type CommunityStatus = $Enums.CommunityStatus

export const CommunityStatus: typeof $Enums.CommunityStatus

export type PortfolioStatus = $Enums.PortfolioStatus

export const PortfolioStatus: typeof $Enums.PortfolioStatus

export type SkillStatus = $Enums.SkillStatus

export const SkillStatus: typeof $Enums.SkillStatus

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portoJenis`: Exposes CRUD operations for the **PortoJenis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortoJenis
    * const portoJenis = await prisma.portoJenis.findMany()
    * ```
    */
  get portoJenis(): Prisma.PortoJenisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portofolio`: Exposes CRUD operations for the **Portofolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portofolios
    * const portofolios = await prisma.portofolio.findMany()
    * ```
    */
  get portofolio(): Prisma.PortofolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sertifikat`: Exposes CRUD operations for the **Sertifikat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sertifikats
    * const sertifikats = await prisma.sertifikat.findMany()
    * ```
    */
  get sertifikat(): Prisma.SertifikatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PortoJenis: 'PortoJenis',
    Portofolio: 'Portofolio',
    Sertifikat: 'Sertifikat',
    Skill: 'Skill',
    Community: 'Community'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "portoJenis" | "portofolio" | "sertifikat" | "skill" | "community"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PortoJenis: {
        payload: Prisma.$PortoJenisPayload<ExtArgs>
        fields: Prisma.PortoJenisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortoJenisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortoJenisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>
          }
          findFirst: {
            args: Prisma.PortoJenisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortoJenisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>
          }
          findMany: {
            args: Prisma.PortoJenisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>[]
          }
          create: {
            args: Prisma.PortoJenisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>
          }
          createMany: {
            args: Prisma.PortoJenisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortoJenisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>[]
          }
          delete: {
            args: Prisma.PortoJenisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>
          }
          update: {
            args: Prisma.PortoJenisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>
          }
          deleteMany: {
            args: Prisma.PortoJenisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortoJenisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortoJenisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>[]
          }
          upsert: {
            args: Prisma.PortoJenisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortoJenisPayload>
          }
          aggregate: {
            args: Prisma.PortoJenisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortoJenis>
          }
          groupBy: {
            args: Prisma.PortoJenisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortoJenisGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortoJenisCountArgs<ExtArgs>
            result: $Utils.Optional<PortoJenisCountAggregateOutputType> | number
          }
        }
      }
      Portofolio: {
        payload: Prisma.$PortofolioPayload<ExtArgs>
        fields: Prisma.PortofolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortofolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortofolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>
          }
          findFirst: {
            args: Prisma.PortofolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortofolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>
          }
          findMany: {
            args: Prisma.PortofolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>[]
          }
          create: {
            args: Prisma.PortofolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>
          }
          createMany: {
            args: Prisma.PortofolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortofolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>[]
          }
          delete: {
            args: Prisma.PortofolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>
          }
          update: {
            args: Prisma.PortofolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>
          }
          deleteMany: {
            args: Prisma.PortofolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortofolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortofolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>[]
          }
          upsert: {
            args: Prisma.PortofolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortofolioPayload>
          }
          aggregate: {
            args: Prisma.PortofolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortofolio>
          }
          groupBy: {
            args: Prisma.PortofolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortofolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortofolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortofolioCountAggregateOutputType> | number
          }
        }
      }
      Sertifikat: {
        payload: Prisma.$SertifikatPayload<ExtArgs>
        fields: Prisma.SertifikatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SertifikatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SertifikatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          findFirst: {
            args: Prisma.SertifikatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SertifikatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          findMany: {
            args: Prisma.SertifikatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>[]
          }
          create: {
            args: Prisma.SertifikatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          createMany: {
            args: Prisma.SertifikatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SertifikatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>[]
          }
          delete: {
            args: Prisma.SertifikatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          update: {
            args: Prisma.SertifikatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          deleteMany: {
            args: Prisma.SertifikatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SertifikatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SertifikatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>[]
          }
          upsert: {
            args: Prisma.SertifikatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          aggregate: {
            args: Prisma.SertifikatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSertifikat>
          }
          groupBy: {
            args: Prisma.SertifikatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SertifikatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SertifikatCountArgs<ExtArgs>
            result: $Utils.Optional<SertifikatCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    portoJenis?: PortoJenisOmit
    portofolio?: PortofolioOmit
    sertifikat?: SertifikatOmit
    skill?: SkillOmit
    community?: CommunityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    communities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | UserCountOutputTypeCountCommunitiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * Count Type PortoJenisCountOutputType
   */

  export type PortoJenisCountOutputType = {
    Portofolio: number
  }

  export type PortoJenisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Portofolio?: boolean | PortoJenisCountOutputTypeCountPortofolioArgs
  }

  // Custom InputTypes
  /**
   * PortoJenisCountOutputType without action
   */
  export type PortoJenisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenisCountOutputType
     */
    select?: PortoJenisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortoJenisCountOutputType without action
   */
  export type PortoJenisCountOutputTypeCountPortofolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortofolioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    password: string | null
    updatedAt: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    password: string | null
    updatedAt: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    password: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    password?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    password?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    password?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    createdAt: Date
    password: string
    updatedAt: Date
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    updatedAt?: boolean
    role?: boolean
    communities?: boolean | User$communitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "password" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | User$communitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      communities: Prisma.$CommunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      createdAt: Date
      password: string
      updatedAt: Date
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communities<T extends User$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.communities
   */
  export type User$communitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PortoJenis
   */

  export type AggregatePortoJenis = {
    _count: PortoJenisCountAggregateOutputType | null
    _avg: PortoJenisAvgAggregateOutputType | null
    _sum: PortoJenisSumAggregateOutputType | null
    _min: PortoJenisMinAggregateOutputType | null
    _max: PortoJenisMaxAggregateOutputType | null
  }

  export type PortoJenisAvgAggregateOutputType = {
    id: number | null
  }

  export type PortoJenisSumAggregateOutputType = {
    id: number | null
  }

  export type PortoJenisMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortoJenisMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortoJenisCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortoJenisAvgAggregateInputType = {
    id?: true
  }

  export type PortoJenisSumAggregateInputType = {
    id?: true
  }

  export type PortoJenisMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortoJenisMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortoJenisCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortoJenisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortoJenis to aggregate.
     */
    where?: PortoJenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortoJenis to fetch.
     */
    orderBy?: PortoJenisOrderByWithRelationInput | PortoJenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortoJenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortoJenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortoJenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortoJenis
    **/
    _count?: true | PortoJenisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortoJenisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortoJenisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortoJenisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortoJenisMaxAggregateInputType
  }

  export type GetPortoJenisAggregateType<T extends PortoJenisAggregateArgs> = {
        [P in keyof T & keyof AggregatePortoJenis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortoJenis[P]>
      : GetScalarType<T[P], AggregatePortoJenis[P]>
  }




  export type PortoJenisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortoJenisWhereInput
    orderBy?: PortoJenisOrderByWithAggregationInput | PortoJenisOrderByWithAggregationInput[]
    by: PortoJenisScalarFieldEnum[] | PortoJenisScalarFieldEnum
    having?: PortoJenisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortoJenisCountAggregateInputType | true
    _avg?: PortoJenisAvgAggregateInputType
    _sum?: PortoJenisSumAggregateInputType
    _min?: PortoJenisMinAggregateInputType
    _max?: PortoJenisMaxAggregateInputType
  }

  export type PortoJenisGroupByOutputType = {
    id: number
    name: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: PortoJenisCountAggregateOutputType | null
    _avg: PortoJenisAvgAggregateOutputType | null
    _sum: PortoJenisSumAggregateOutputType | null
    _min: PortoJenisMinAggregateOutputType | null
    _max: PortoJenisMaxAggregateOutputType | null
  }

  type GetPortoJenisGroupByPayload<T extends PortoJenisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortoJenisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortoJenisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortoJenisGroupByOutputType[P]>
            : GetScalarType<T[P], PortoJenisGroupByOutputType[P]>
        }
      >
    >


  export type PortoJenisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Portofolio?: boolean | PortoJenis$PortofolioArgs<ExtArgs>
    _count?: boolean | PortoJenisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portoJenis"]>

  export type PortoJenisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portoJenis"]>

  export type PortoJenisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portoJenis"]>

  export type PortoJenisSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortoJenisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["portoJenis"]>
  export type PortoJenisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Portofolio?: boolean | PortoJenis$PortofolioArgs<ExtArgs>
    _count?: boolean | PortoJenisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortoJenisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PortoJenisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PortoJenisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortoJenis"
    objects: {
      Portofolio: Prisma.$PortofolioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portoJenis"]>
    composites: {}
  }

  type PortoJenisGetPayload<S extends boolean | null | undefined | PortoJenisDefaultArgs> = $Result.GetResult<Prisma.$PortoJenisPayload, S>

  type PortoJenisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortoJenisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortoJenisCountAggregateInputType | true
    }

  export interface PortoJenisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortoJenis'], meta: { name: 'PortoJenis' } }
    /**
     * Find zero or one PortoJenis that matches the filter.
     * @param {PortoJenisFindUniqueArgs} args - Arguments to find a PortoJenis
     * @example
     * // Get one PortoJenis
     * const portoJenis = await prisma.portoJenis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortoJenisFindUniqueArgs>(args: SelectSubset<T, PortoJenisFindUniqueArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortoJenis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortoJenisFindUniqueOrThrowArgs} args - Arguments to find a PortoJenis
     * @example
     * // Get one PortoJenis
     * const portoJenis = await prisma.portoJenis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortoJenisFindUniqueOrThrowArgs>(args: SelectSubset<T, PortoJenisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortoJenis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisFindFirstArgs} args - Arguments to find a PortoJenis
     * @example
     * // Get one PortoJenis
     * const portoJenis = await prisma.portoJenis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortoJenisFindFirstArgs>(args?: SelectSubset<T, PortoJenisFindFirstArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortoJenis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisFindFirstOrThrowArgs} args - Arguments to find a PortoJenis
     * @example
     * // Get one PortoJenis
     * const portoJenis = await prisma.portoJenis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortoJenisFindFirstOrThrowArgs>(args?: SelectSubset<T, PortoJenisFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortoJenis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortoJenis
     * const portoJenis = await prisma.portoJenis.findMany()
     * 
     * // Get first 10 PortoJenis
     * const portoJenis = await prisma.portoJenis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portoJenisWithIdOnly = await prisma.portoJenis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortoJenisFindManyArgs>(args?: SelectSubset<T, PortoJenisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortoJenis.
     * @param {PortoJenisCreateArgs} args - Arguments to create a PortoJenis.
     * @example
     * // Create one PortoJenis
     * const PortoJenis = await prisma.portoJenis.create({
     *   data: {
     *     // ... data to create a PortoJenis
     *   }
     * })
     * 
     */
    create<T extends PortoJenisCreateArgs>(args: SelectSubset<T, PortoJenisCreateArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortoJenis.
     * @param {PortoJenisCreateManyArgs} args - Arguments to create many PortoJenis.
     * @example
     * // Create many PortoJenis
     * const portoJenis = await prisma.portoJenis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortoJenisCreateManyArgs>(args?: SelectSubset<T, PortoJenisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortoJenis and returns the data saved in the database.
     * @param {PortoJenisCreateManyAndReturnArgs} args - Arguments to create many PortoJenis.
     * @example
     * // Create many PortoJenis
     * const portoJenis = await prisma.portoJenis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortoJenis and only return the `id`
     * const portoJenisWithIdOnly = await prisma.portoJenis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortoJenisCreateManyAndReturnArgs>(args?: SelectSubset<T, PortoJenisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortoJenis.
     * @param {PortoJenisDeleteArgs} args - Arguments to delete one PortoJenis.
     * @example
     * // Delete one PortoJenis
     * const PortoJenis = await prisma.portoJenis.delete({
     *   where: {
     *     // ... filter to delete one PortoJenis
     *   }
     * })
     * 
     */
    delete<T extends PortoJenisDeleteArgs>(args: SelectSubset<T, PortoJenisDeleteArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortoJenis.
     * @param {PortoJenisUpdateArgs} args - Arguments to update one PortoJenis.
     * @example
     * // Update one PortoJenis
     * const portoJenis = await prisma.portoJenis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortoJenisUpdateArgs>(args: SelectSubset<T, PortoJenisUpdateArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortoJenis.
     * @param {PortoJenisDeleteManyArgs} args - Arguments to filter PortoJenis to delete.
     * @example
     * // Delete a few PortoJenis
     * const { count } = await prisma.portoJenis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortoJenisDeleteManyArgs>(args?: SelectSubset<T, PortoJenisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortoJenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortoJenis
     * const portoJenis = await prisma.portoJenis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortoJenisUpdateManyArgs>(args: SelectSubset<T, PortoJenisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortoJenis and returns the data updated in the database.
     * @param {PortoJenisUpdateManyAndReturnArgs} args - Arguments to update many PortoJenis.
     * @example
     * // Update many PortoJenis
     * const portoJenis = await prisma.portoJenis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortoJenis and only return the `id`
     * const portoJenisWithIdOnly = await prisma.portoJenis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortoJenisUpdateManyAndReturnArgs>(args: SelectSubset<T, PortoJenisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortoJenis.
     * @param {PortoJenisUpsertArgs} args - Arguments to update or create a PortoJenis.
     * @example
     * // Update or create a PortoJenis
     * const portoJenis = await prisma.portoJenis.upsert({
     *   create: {
     *     // ... data to create a PortoJenis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortoJenis we want to update
     *   }
     * })
     */
    upsert<T extends PortoJenisUpsertArgs>(args: SelectSubset<T, PortoJenisUpsertArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortoJenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisCountArgs} args - Arguments to filter PortoJenis to count.
     * @example
     * // Count the number of PortoJenis
     * const count = await prisma.portoJenis.count({
     *   where: {
     *     // ... the filter for the PortoJenis we want to count
     *   }
     * })
    **/
    count<T extends PortoJenisCountArgs>(
      args?: Subset<T, PortoJenisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortoJenisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortoJenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortoJenisAggregateArgs>(args: Subset<T, PortoJenisAggregateArgs>): Prisma.PrismaPromise<GetPortoJenisAggregateType<T>>

    /**
     * Group by PortoJenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortoJenisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortoJenisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortoJenisGroupByArgs['orderBy'] }
        : { orderBy?: PortoJenisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortoJenisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortoJenisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortoJenis model
   */
  readonly fields: PortoJenisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortoJenis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortoJenisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Portofolio<T extends PortoJenis$PortofolioArgs<ExtArgs> = {}>(args?: Subset<T, PortoJenis$PortofolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortoJenis model
   */
  interface PortoJenisFieldRefs {
    readonly id: FieldRef<"PortoJenis", 'Int'>
    readonly name: FieldRef<"PortoJenis", 'String'>
    readonly status: FieldRef<"PortoJenis", 'Status'>
    readonly createdAt: FieldRef<"PortoJenis", 'DateTime'>
    readonly updatedAt: FieldRef<"PortoJenis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortoJenis findUnique
   */
  export type PortoJenisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * Filter, which PortoJenis to fetch.
     */
    where: PortoJenisWhereUniqueInput
  }

  /**
   * PortoJenis findUniqueOrThrow
   */
  export type PortoJenisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * Filter, which PortoJenis to fetch.
     */
    where: PortoJenisWhereUniqueInput
  }

  /**
   * PortoJenis findFirst
   */
  export type PortoJenisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * Filter, which PortoJenis to fetch.
     */
    where?: PortoJenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortoJenis to fetch.
     */
    orderBy?: PortoJenisOrderByWithRelationInput | PortoJenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortoJenis.
     */
    cursor?: PortoJenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortoJenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortoJenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortoJenis.
     */
    distinct?: PortoJenisScalarFieldEnum | PortoJenisScalarFieldEnum[]
  }

  /**
   * PortoJenis findFirstOrThrow
   */
  export type PortoJenisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * Filter, which PortoJenis to fetch.
     */
    where?: PortoJenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortoJenis to fetch.
     */
    orderBy?: PortoJenisOrderByWithRelationInput | PortoJenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortoJenis.
     */
    cursor?: PortoJenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortoJenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortoJenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortoJenis.
     */
    distinct?: PortoJenisScalarFieldEnum | PortoJenisScalarFieldEnum[]
  }

  /**
   * PortoJenis findMany
   */
  export type PortoJenisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * Filter, which PortoJenis to fetch.
     */
    where?: PortoJenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortoJenis to fetch.
     */
    orderBy?: PortoJenisOrderByWithRelationInput | PortoJenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortoJenis.
     */
    cursor?: PortoJenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortoJenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortoJenis.
     */
    skip?: number
    distinct?: PortoJenisScalarFieldEnum | PortoJenisScalarFieldEnum[]
  }

  /**
   * PortoJenis create
   */
  export type PortoJenisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * The data needed to create a PortoJenis.
     */
    data: XOR<PortoJenisCreateInput, PortoJenisUncheckedCreateInput>
  }

  /**
   * PortoJenis createMany
   */
  export type PortoJenisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortoJenis.
     */
    data: PortoJenisCreateManyInput | PortoJenisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortoJenis createManyAndReturn
   */
  export type PortoJenisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * The data used to create many PortoJenis.
     */
    data: PortoJenisCreateManyInput | PortoJenisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortoJenis update
   */
  export type PortoJenisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * The data needed to update a PortoJenis.
     */
    data: XOR<PortoJenisUpdateInput, PortoJenisUncheckedUpdateInput>
    /**
     * Choose, which PortoJenis to update.
     */
    where: PortoJenisWhereUniqueInput
  }

  /**
   * PortoJenis updateMany
   */
  export type PortoJenisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortoJenis.
     */
    data: XOR<PortoJenisUpdateManyMutationInput, PortoJenisUncheckedUpdateManyInput>
    /**
     * Filter which PortoJenis to update
     */
    where?: PortoJenisWhereInput
    /**
     * Limit how many PortoJenis to update.
     */
    limit?: number
  }

  /**
   * PortoJenis updateManyAndReturn
   */
  export type PortoJenisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * The data used to update PortoJenis.
     */
    data: XOR<PortoJenisUpdateManyMutationInput, PortoJenisUncheckedUpdateManyInput>
    /**
     * Filter which PortoJenis to update
     */
    where?: PortoJenisWhereInput
    /**
     * Limit how many PortoJenis to update.
     */
    limit?: number
  }

  /**
   * PortoJenis upsert
   */
  export type PortoJenisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * The filter to search for the PortoJenis to update in case it exists.
     */
    where: PortoJenisWhereUniqueInput
    /**
     * In case the PortoJenis found by the `where` argument doesn't exist, create a new PortoJenis with this data.
     */
    create: XOR<PortoJenisCreateInput, PortoJenisUncheckedCreateInput>
    /**
     * In case the PortoJenis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortoJenisUpdateInput, PortoJenisUncheckedUpdateInput>
  }

  /**
   * PortoJenis delete
   */
  export type PortoJenisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
    /**
     * Filter which PortoJenis to delete.
     */
    where: PortoJenisWhereUniqueInput
  }

  /**
   * PortoJenis deleteMany
   */
  export type PortoJenisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortoJenis to delete
     */
    where?: PortoJenisWhereInput
    /**
     * Limit how many PortoJenis to delete.
     */
    limit?: number
  }

  /**
   * PortoJenis.Portofolio
   */
  export type PortoJenis$PortofolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    where?: PortofolioWhereInput
    orderBy?: PortofolioOrderByWithRelationInput | PortofolioOrderByWithRelationInput[]
    cursor?: PortofolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortofolioScalarFieldEnum | PortofolioScalarFieldEnum[]
  }

  /**
   * PortoJenis without action
   */
  export type PortoJenisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortoJenis
     */
    select?: PortoJenisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortoJenis
     */
    omit?: PortoJenisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortoJenisInclude<ExtArgs> | null
  }


  /**
   * Model Portofolio
   */

  export type AggregatePortofolio = {
    _count: PortofolioCountAggregateOutputType | null
    _avg: PortofolioAvgAggregateOutputType | null
    _sum: PortofolioSumAggregateOutputType | null
    _min: PortofolioMinAggregateOutputType | null
    _max: PortofolioMaxAggregateOutputType | null
  }

  export type PortofolioAvgAggregateOutputType = {
    id: number | null
    portoJenisId: number | null
  }

  export type PortofolioSumAggregateOutputType = {
    id: number | null
    portoJenisId: number | null
  }

  export type PortofolioMinAggregateOutputType = {
    id: number | null
    portoJenisId: number | null
    title: string | null
    image: string | null
    url: string | null
    description: string | null
    isPrimary: boolean | null
    category: string | null
    status: $Enums.PortfolioStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortofolioMaxAggregateOutputType = {
    id: number | null
    portoJenisId: number | null
    title: string | null
    image: string | null
    url: string | null
    description: string | null
    isPrimary: boolean | null
    category: string | null
    status: $Enums.PortfolioStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortofolioCountAggregateOutputType = {
    id: number
    portoJenisId: number
    title: number
    image: number
    url: number
    description: number
    isPrimary: number
    category: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortofolioAvgAggregateInputType = {
    id?: true
    portoJenisId?: true
  }

  export type PortofolioSumAggregateInputType = {
    id?: true
    portoJenisId?: true
  }

  export type PortofolioMinAggregateInputType = {
    id?: true
    portoJenisId?: true
    title?: true
    image?: true
    url?: true
    description?: true
    isPrimary?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortofolioMaxAggregateInputType = {
    id?: true
    portoJenisId?: true
    title?: true
    image?: true
    url?: true
    description?: true
    isPrimary?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortofolioCountAggregateInputType = {
    id?: true
    portoJenisId?: true
    title?: true
    image?: true
    url?: true
    description?: true
    isPrimary?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortofolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portofolio to aggregate.
     */
    where?: PortofolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portofolios to fetch.
     */
    orderBy?: PortofolioOrderByWithRelationInput | PortofolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortofolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portofolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portofolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portofolios
    **/
    _count?: true | PortofolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortofolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortofolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortofolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortofolioMaxAggregateInputType
  }

  export type GetPortofolioAggregateType<T extends PortofolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortofolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortofolio[P]>
      : GetScalarType<T[P], AggregatePortofolio[P]>
  }




  export type PortofolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortofolioWhereInput
    orderBy?: PortofolioOrderByWithAggregationInput | PortofolioOrderByWithAggregationInput[]
    by: PortofolioScalarFieldEnum[] | PortofolioScalarFieldEnum
    having?: PortofolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortofolioCountAggregateInputType | true
    _avg?: PortofolioAvgAggregateInputType
    _sum?: PortofolioSumAggregateInputType
    _min?: PortofolioMinAggregateInputType
    _max?: PortofolioMaxAggregateInputType
  }

  export type PortofolioGroupByOutputType = {
    id: number
    portoJenisId: number
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt: Date
    updatedAt: Date
    _count: PortofolioCountAggregateOutputType | null
    _avg: PortofolioAvgAggregateOutputType | null
    _sum: PortofolioSumAggregateOutputType | null
    _min: PortofolioMinAggregateOutputType | null
    _max: PortofolioMaxAggregateOutputType | null
  }

  type GetPortofolioGroupByPayload<T extends PortofolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortofolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortofolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortofolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortofolioGroupByOutputType[P]>
        }
      >
    >


  export type PortofolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portoJenisId?: boolean
    title?: boolean
    image?: boolean
    url?: boolean
    description?: boolean
    isPrimary?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PortoJenis?: boolean | PortoJenisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portofolio"]>

  export type PortofolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portoJenisId?: boolean
    title?: boolean
    image?: boolean
    url?: boolean
    description?: boolean
    isPrimary?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PortoJenis?: boolean | PortoJenisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portofolio"]>

  export type PortofolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portoJenisId?: boolean
    title?: boolean
    image?: boolean
    url?: boolean
    description?: boolean
    isPrimary?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PortoJenis?: boolean | PortoJenisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portofolio"]>

  export type PortofolioSelectScalar = {
    id?: boolean
    portoJenisId?: boolean
    title?: boolean
    image?: boolean
    url?: boolean
    description?: boolean
    isPrimary?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortofolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portoJenisId" | "title" | "image" | "url" | "description" | "isPrimary" | "category" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["portofolio"]>
  export type PortofolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PortoJenis?: boolean | PortoJenisDefaultArgs<ExtArgs>
  }
  export type PortofolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PortoJenis?: boolean | PortoJenisDefaultArgs<ExtArgs>
  }
  export type PortofolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PortoJenis?: boolean | PortoJenisDefaultArgs<ExtArgs>
  }

  export type $PortofolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portofolio"
    objects: {
      PortoJenis: Prisma.$PortoJenisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portoJenisId: number
      title: string
      image: string
      url: string
      description: string
      isPrimary: boolean
      category: string
      status: $Enums.PortfolioStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portofolio"]>
    composites: {}
  }

  type PortofolioGetPayload<S extends boolean | null | undefined | PortofolioDefaultArgs> = $Result.GetResult<Prisma.$PortofolioPayload, S>

  type PortofolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortofolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortofolioCountAggregateInputType | true
    }

  export interface PortofolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portofolio'], meta: { name: 'Portofolio' } }
    /**
     * Find zero or one Portofolio that matches the filter.
     * @param {PortofolioFindUniqueArgs} args - Arguments to find a Portofolio
     * @example
     * // Get one Portofolio
     * const portofolio = await prisma.portofolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortofolioFindUniqueArgs>(args: SelectSubset<T, PortofolioFindUniqueArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portofolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortofolioFindUniqueOrThrowArgs} args - Arguments to find a Portofolio
     * @example
     * // Get one Portofolio
     * const portofolio = await prisma.portofolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortofolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortofolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portofolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioFindFirstArgs} args - Arguments to find a Portofolio
     * @example
     * // Get one Portofolio
     * const portofolio = await prisma.portofolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortofolioFindFirstArgs>(args?: SelectSubset<T, PortofolioFindFirstArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portofolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioFindFirstOrThrowArgs} args - Arguments to find a Portofolio
     * @example
     * // Get one Portofolio
     * const portofolio = await prisma.portofolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortofolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortofolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portofolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portofolios
     * const portofolios = await prisma.portofolio.findMany()
     * 
     * // Get first 10 Portofolios
     * const portofolios = await prisma.portofolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portofolioWithIdOnly = await prisma.portofolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortofolioFindManyArgs>(args?: SelectSubset<T, PortofolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portofolio.
     * @param {PortofolioCreateArgs} args - Arguments to create a Portofolio.
     * @example
     * // Create one Portofolio
     * const Portofolio = await prisma.portofolio.create({
     *   data: {
     *     // ... data to create a Portofolio
     *   }
     * })
     * 
     */
    create<T extends PortofolioCreateArgs>(args: SelectSubset<T, PortofolioCreateArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portofolios.
     * @param {PortofolioCreateManyArgs} args - Arguments to create many Portofolios.
     * @example
     * // Create many Portofolios
     * const portofolio = await prisma.portofolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortofolioCreateManyArgs>(args?: SelectSubset<T, PortofolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portofolios and returns the data saved in the database.
     * @param {PortofolioCreateManyAndReturnArgs} args - Arguments to create many Portofolios.
     * @example
     * // Create many Portofolios
     * const portofolio = await prisma.portofolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portofolios and only return the `id`
     * const portofolioWithIdOnly = await prisma.portofolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortofolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortofolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portofolio.
     * @param {PortofolioDeleteArgs} args - Arguments to delete one Portofolio.
     * @example
     * // Delete one Portofolio
     * const Portofolio = await prisma.portofolio.delete({
     *   where: {
     *     // ... filter to delete one Portofolio
     *   }
     * })
     * 
     */
    delete<T extends PortofolioDeleteArgs>(args: SelectSubset<T, PortofolioDeleteArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portofolio.
     * @param {PortofolioUpdateArgs} args - Arguments to update one Portofolio.
     * @example
     * // Update one Portofolio
     * const portofolio = await prisma.portofolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortofolioUpdateArgs>(args: SelectSubset<T, PortofolioUpdateArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portofolios.
     * @param {PortofolioDeleteManyArgs} args - Arguments to filter Portofolios to delete.
     * @example
     * // Delete a few Portofolios
     * const { count } = await prisma.portofolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortofolioDeleteManyArgs>(args?: SelectSubset<T, PortofolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portofolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portofolios
     * const portofolio = await prisma.portofolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortofolioUpdateManyArgs>(args: SelectSubset<T, PortofolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portofolios and returns the data updated in the database.
     * @param {PortofolioUpdateManyAndReturnArgs} args - Arguments to update many Portofolios.
     * @example
     * // Update many Portofolios
     * const portofolio = await prisma.portofolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portofolios and only return the `id`
     * const portofolioWithIdOnly = await prisma.portofolio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortofolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortofolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portofolio.
     * @param {PortofolioUpsertArgs} args - Arguments to update or create a Portofolio.
     * @example
     * // Update or create a Portofolio
     * const portofolio = await prisma.portofolio.upsert({
     *   create: {
     *     // ... data to create a Portofolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portofolio we want to update
     *   }
     * })
     */
    upsert<T extends PortofolioUpsertArgs>(args: SelectSubset<T, PortofolioUpsertArgs<ExtArgs>>): Prisma__PortofolioClient<$Result.GetResult<Prisma.$PortofolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portofolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioCountArgs} args - Arguments to filter Portofolios to count.
     * @example
     * // Count the number of Portofolios
     * const count = await prisma.portofolio.count({
     *   where: {
     *     // ... the filter for the Portofolios we want to count
     *   }
     * })
    **/
    count<T extends PortofolioCountArgs>(
      args?: Subset<T, PortofolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortofolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portofolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortofolioAggregateArgs>(args: Subset<T, PortofolioAggregateArgs>): Prisma.PrismaPromise<GetPortofolioAggregateType<T>>

    /**
     * Group by Portofolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortofolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortofolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortofolioGroupByArgs['orderBy'] }
        : { orderBy?: PortofolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortofolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortofolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portofolio model
   */
  readonly fields: PortofolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portofolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortofolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PortoJenis<T extends PortoJenisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortoJenisDefaultArgs<ExtArgs>>): Prisma__PortoJenisClient<$Result.GetResult<Prisma.$PortoJenisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Portofolio model
   */
  interface PortofolioFieldRefs {
    readonly id: FieldRef<"Portofolio", 'Int'>
    readonly portoJenisId: FieldRef<"Portofolio", 'Int'>
    readonly title: FieldRef<"Portofolio", 'String'>
    readonly image: FieldRef<"Portofolio", 'String'>
    readonly url: FieldRef<"Portofolio", 'String'>
    readonly description: FieldRef<"Portofolio", 'String'>
    readonly isPrimary: FieldRef<"Portofolio", 'Boolean'>
    readonly category: FieldRef<"Portofolio", 'String'>
    readonly status: FieldRef<"Portofolio", 'PortfolioStatus'>
    readonly createdAt: FieldRef<"Portofolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portofolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portofolio findUnique
   */
  export type PortofolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * Filter, which Portofolio to fetch.
     */
    where: PortofolioWhereUniqueInput
  }

  /**
   * Portofolio findUniqueOrThrow
   */
  export type PortofolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * Filter, which Portofolio to fetch.
     */
    where: PortofolioWhereUniqueInput
  }

  /**
   * Portofolio findFirst
   */
  export type PortofolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * Filter, which Portofolio to fetch.
     */
    where?: PortofolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portofolios to fetch.
     */
    orderBy?: PortofolioOrderByWithRelationInput | PortofolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portofolios.
     */
    cursor?: PortofolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portofolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portofolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portofolios.
     */
    distinct?: PortofolioScalarFieldEnum | PortofolioScalarFieldEnum[]
  }

  /**
   * Portofolio findFirstOrThrow
   */
  export type PortofolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * Filter, which Portofolio to fetch.
     */
    where?: PortofolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portofolios to fetch.
     */
    orderBy?: PortofolioOrderByWithRelationInput | PortofolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portofolios.
     */
    cursor?: PortofolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portofolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portofolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portofolios.
     */
    distinct?: PortofolioScalarFieldEnum | PortofolioScalarFieldEnum[]
  }

  /**
   * Portofolio findMany
   */
  export type PortofolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * Filter, which Portofolios to fetch.
     */
    where?: PortofolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portofolios to fetch.
     */
    orderBy?: PortofolioOrderByWithRelationInput | PortofolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portofolios.
     */
    cursor?: PortofolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portofolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portofolios.
     */
    skip?: number
    distinct?: PortofolioScalarFieldEnum | PortofolioScalarFieldEnum[]
  }

  /**
   * Portofolio create
   */
  export type PortofolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portofolio.
     */
    data: XOR<PortofolioCreateInput, PortofolioUncheckedCreateInput>
  }

  /**
   * Portofolio createMany
   */
  export type PortofolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portofolios.
     */
    data: PortofolioCreateManyInput | PortofolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portofolio createManyAndReturn
   */
  export type PortofolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portofolios.
     */
    data: PortofolioCreateManyInput | PortofolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portofolio update
   */
  export type PortofolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portofolio.
     */
    data: XOR<PortofolioUpdateInput, PortofolioUncheckedUpdateInput>
    /**
     * Choose, which Portofolio to update.
     */
    where: PortofolioWhereUniqueInput
  }

  /**
   * Portofolio updateMany
   */
  export type PortofolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portofolios.
     */
    data: XOR<PortofolioUpdateManyMutationInput, PortofolioUncheckedUpdateManyInput>
    /**
     * Filter which Portofolios to update
     */
    where?: PortofolioWhereInput
    /**
     * Limit how many Portofolios to update.
     */
    limit?: number
  }

  /**
   * Portofolio updateManyAndReturn
   */
  export type PortofolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * The data used to update Portofolios.
     */
    data: XOR<PortofolioUpdateManyMutationInput, PortofolioUncheckedUpdateManyInput>
    /**
     * Filter which Portofolios to update
     */
    where?: PortofolioWhereInput
    /**
     * Limit how many Portofolios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portofolio upsert
   */
  export type PortofolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portofolio to update in case it exists.
     */
    where: PortofolioWhereUniqueInput
    /**
     * In case the Portofolio found by the `where` argument doesn't exist, create a new Portofolio with this data.
     */
    create: XOR<PortofolioCreateInput, PortofolioUncheckedCreateInput>
    /**
     * In case the Portofolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortofolioUpdateInput, PortofolioUncheckedUpdateInput>
  }

  /**
   * Portofolio delete
   */
  export type PortofolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
    /**
     * Filter which Portofolio to delete.
     */
    where: PortofolioWhereUniqueInput
  }

  /**
   * Portofolio deleteMany
   */
  export type PortofolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portofolios to delete
     */
    where?: PortofolioWhereInput
    /**
     * Limit how many Portofolios to delete.
     */
    limit?: number
  }

  /**
   * Portofolio without action
   */
  export type PortofolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portofolio
     */
    select?: PortofolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portofolio
     */
    omit?: PortofolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortofolioInclude<ExtArgs> | null
  }


  /**
   * Model Sertifikat
   */

  export type AggregateSertifikat = {
    _count: SertifikatCountAggregateOutputType | null
    _avg: SertifikatAvgAggregateOutputType | null
    _sum: SertifikatSumAggregateOutputType | null
    _min: SertifikatMinAggregateOutputType | null
    _max: SertifikatMaxAggregateOutputType | null
  }

  export type SertifikatAvgAggregateOutputType = {
    id: number | null
  }

  export type SertifikatSumAggregateOutputType = {
    id: number | null
  }

  export type SertifikatMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SertifikatMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SertifikatCountAggregateOutputType = {
    id: number
    name: number
    image: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SertifikatAvgAggregateInputType = {
    id?: true
  }

  export type SertifikatSumAggregateInputType = {
    id?: true
  }

  export type SertifikatMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SertifikatMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SertifikatCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SertifikatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sertifikat to aggregate.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sertifikats
    **/
    _count?: true | SertifikatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SertifikatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SertifikatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SertifikatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SertifikatMaxAggregateInputType
  }

  export type GetSertifikatAggregateType<T extends SertifikatAggregateArgs> = {
        [P in keyof T & keyof AggregateSertifikat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSertifikat[P]>
      : GetScalarType<T[P], AggregateSertifikat[P]>
  }




  export type SertifikatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SertifikatWhereInput
    orderBy?: SertifikatOrderByWithAggregationInput | SertifikatOrderByWithAggregationInput[]
    by: SertifikatScalarFieldEnum[] | SertifikatScalarFieldEnum
    having?: SertifikatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SertifikatCountAggregateInputType | true
    _avg?: SertifikatAvgAggregateInputType
    _sum?: SertifikatSumAggregateInputType
    _min?: SertifikatMinAggregateInputType
    _max?: SertifikatMaxAggregateInputType
  }

  export type SertifikatGroupByOutputType = {
    id: number
    name: string
    image: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: SertifikatCountAggregateOutputType | null
    _avg: SertifikatAvgAggregateOutputType | null
    _sum: SertifikatSumAggregateOutputType | null
    _min: SertifikatMinAggregateOutputType | null
    _max: SertifikatMaxAggregateOutputType | null
  }

  type GetSertifikatGroupByPayload<T extends SertifikatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SertifikatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SertifikatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SertifikatGroupByOutputType[P]>
            : GetScalarType<T[P], SertifikatGroupByOutputType[P]>
        }
      >
    >


  export type SertifikatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sertifikat"]>

  export type SertifikatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sertifikat"]>

  export type SertifikatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sertifikat"]>

  export type SertifikatSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SertifikatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["sertifikat"]>

  export type $SertifikatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sertifikat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sertifikat"]>
    composites: {}
  }

  type SertifikatGetPayload<S extends boolean | null | undefined | SertifikatDefaultArgs> = $Result.GetResult<Prisma.$SertifikatPayload, S>

  type SertifikatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SertifikatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SertifikatCountAggregateInputType | true
    }

  export interface SertifikatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sertifikat'], meta: { name: 'Sertifikat' } }
    /**
     * Find zero or one Sertifikat that matches the filter.
     * @param {SertifikatFindUniqueArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SertifikatFindUniqueArgs>(args: SelectSubset<T, SertifikatFindUniqueArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sertifikat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SertifikatFindUniqueOrThrowArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SertifikatFindUniqueOrThrowArgs>(args: SelectSubset<T, SertifikatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatFindFirstArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SertifikatFindFirstArgs>(args?: SelectSubset<T, SertifikatFindFirstArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatFindFirstOrThrowArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SertifikatFindFirstOrThrowArgs>(args?: SelectSubset<T, SertifikatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sertifikats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sertifikats
     * const sertifikats = await prisma.sertifikat.findMany()
     * 
     * // Get first 10 Sertifikats
     * const sertifikats = await prisma.sertifikat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SertifikatFindManyArgs>(args?: SelectSubset<T, SertifikatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sertifikat.
     * @param {SertifikatCreateArgs} args - Arguments to create a Sertifikat.
     * @example
     * // Create one Sertifikat
     * const Sertifikat = await prisma.sertifikat.create({
     *   data: {
     *     // ... data to create a Sertifikat
     *   }
     * })
     * 
     */
    create<T extends SertifikatCreateArgs>(args: SelectSubset<T, SertifikatCreateArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sertifikats.
     * @param {SertifikatCreateManyArgs} args - Arguments to create many Sertifikats.
     * @example
     * // Create many Sertifikats
     * const sertifikat = await prisma.sertifikat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SertifikatCreateManyArgs>(args?: SelectSubset<T, SertifikatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sertifikats and returns the data saved in the database.
     * @param {SertifikatCreateManyAndReturnArgs} args - Arguments to create many Sertifikats.
     * @example
     * // Create many Sertifikats
     * const sertifikat = await prisma.sertifikat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sertifikats and only return the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SertifikatCreateManyAndReturnArgs>(args?: SelectSubset<T, SertifikatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sertifikat.
     * @param {SertifikatDeleteArgs} args - Arguments to delete one Sertifikat.
     * @example
     * // Delete one Sertifikat
     * const Sertifikat = await prisma.sertifikat.delete({
     *   where: {
     *     // ... filter to delete one Sertifikat
     *   }
     * })
     * 
     */
    delete<T extends SertifikatDeleteArgs>(args: SelectSubset<T, SertifikatDeleteArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sertifikat.
     * @param {SertifikatUpdateArgs} args - Arguments to update one Sertifikat.
     * @example
     * // Update one Sertifikat
     * const sertifikat = await prisma.sertifikat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SertifikatUpdateArgs>(args: SelectSubset<T, SertifikatUpdateArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sertifikats.
     * @param {SertifikatDeleteManyArgs} args - Arguments to filter Sertifikats to delete.
     * @example
     * // Delete a few Sertifikats
     * const { count } = await prisma.sertifikat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SertifikatDeleteManyArgs>(args?: SelectSubset<T, SertifikatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sertifikats
     * const sertifikat = await prisma.sertifikat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SertifikatUpdateManyArgs>(args: SelectSubset<T, SertifikatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikats and returns the data updated in the database.
     * @param {SertifikatUpdateManyAndReturnArgs} args - Arguments to update many Sertifikats.
     * @example
     * // Update many Sertifikats
     * const sertifikat = await prisma.sertifikat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sertifikats and only return the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SertifikatUpdateManyAndReturnArgs>(args: SelectSubset<T, SertifikatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sertifikat.
     * @param {SertifikatUpsertArgs} args - Arguments to update or create a Sertifikat.
     * @example
     * // Update or create a Sertifikat
     * const sertifikat = await prisma.sertifikat.upsert({
     *   create: {
     *     // ... data to create a Sertifikat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sertifikat we want to update
     *   }
     * })
     */
    upsert<T extends SertifikatUpsertArgs>(args: SelectSubset<T, SertifikatUpsertArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sertifikats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatCountArgs} args - Arguments to filter Sertifikats to count.
     * @example
     * // Count the number of Sertifikats
     * const count = await prisma.sertifikat.count({
     *   where: {
     *     // ... the filter for the Sertifikats we want to count
     *   }
     * })
    **/
    count<T extends SertifikatCountArgs>(
      args?: Subset<T, SertifikatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SertifikatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sertifikat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SertifikatAggregateArgs>(args: Subset<T, SertifikatAggregateArgs>): Prisma.PrismaPromise<GetSertifikatAggregateType<T>>

    /**
     * Group by Sertifikat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SertifikatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SertifikatGroupByArgs['orderBy'] }
        : { orderBy?: SertifikatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SertifikatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSertifikatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sertifikat model
   */
  readonly fields: SertifikatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sertifikat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SertifikatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sertifikat model
   */
  interface SertifikatFieldRefs {
    readonly id: FieldRef<"Sertifikat", 'Int'>
    readonly name: FieldRef<"Sertifikat", 'String'>
    readonly image: FieldRef<"Sertifikat", 'String'>
    readonly status: FieldRef<"Sertifikat", 'Status'>
    readonly createdAt: FieldRef<"Sertifikat", 'DateTime'>
    readonly updatedAt: FieldRef<"Sertifikat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sertifikat findUnique
   */
  export type SertifikatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat findUniqueOrThrow
   */
  export type SertifikatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat findFirst
   */
  export type SertifikatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sertifikats.
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sertifikats.
     */
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * Sertifikat findFirstOrThrow
   */
  export type SertifikatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sertifikats.
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sertifikats.
     */
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * Sertifikat findMany
   */
  export type SertifikatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Filter, which Sertifikats to fetch.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sertifikats.
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * Sertifikat create
   */
  export type SertifikatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The data needed to create a Sertifikat.
     */
    data: XOR<SertifikatCreateInput, SertifikatUncheckedCreateInput>
  }

  /**
   * Sertifikat createMany
   */
  export type SertifikatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sertifikats.
     */
    data: SertifikatCreateManyInput | SertifikatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sertifikat createManyAndReturn
   */
  export type SertifikatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The data used to create many Sertifikats.
     */
    data: SertifikatCreateManyInput | SertifikatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sertifikat update
   */
  export type SertifikatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The data needed to update a Sertifikat.
     */
    data: XOR<SertifikatUpdateInput, SertifikatUncheckedUpdateInput>
    /**
     * Choose, which Sertifikat to update.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat updateMany
   */
  export type SertifikatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sertifikats.
     */
    data: XOR<SertifikatUpdateManyMutationInput, SertifikatUncheckedUpdateManyInput>
    /**
     * Filter which Sertifikats to update
     */
    where?: SertifikatWhereInput
    /**
     * Limit how many Sertifikats to update.
     */
    limit?: number
  }

  /**
   * Sertifikat updateManyAndReturn
   */
  export type SertifikatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The data used to update Sertifikats.
     */
    data: XOR<SertifikatUpdateManyMutationInput, SertifikatUncheckedUpdateManyInput>
    /**
     * Filter which Sertifikats to update
     */
    where?: SertifikatWhereInput
    /**
     * Limit how many Sertifikats to update.
     */
    limit?: number
  }

  /**
   * Sertifikat upsert
   */
  export type SertifikatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The filter to search for the Sertifikat to update in case it exists.
     */
    where: SertifikatWhereUniqueInput
    /**
     * In case the Sertifikat found by the `where` argument doesn't exist, create a new Sertifikat with this data.
     */
    create: XOR<SertifikatCreateInput, SertifikatUncheckedCreateInput>
    /**
     * In case the Sertifikat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SertifikatUpdateInput, SertifikatUncheckedUpdateInput>
  }

  /**
   * Sertifikat delete
   */
  export type SertifikatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Filter which Sertifikat to delete.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat deleteMany
   */
  export type SertifikatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sertifikats to delete
     */
    where?: SertifikatWhereInput
    /**
     * Limit how many Sertifikats to delete.
     */
    limit?: number
  }

  /**
   * Sertifikat without action
   */
  export type SertifikatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
    bagan: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
    bagan: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    bagan: number | null
    status: $Enums.SkillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    bagan: number | null
    status: $Enums.SkillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    image: number
    bagan: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
    bagan?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
    bagan?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    bagan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    bagan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    bagan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    image: string
    bagan: number
    status: $Enums.SkillStatus
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    bagan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    bagan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    bagan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    bagan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "bagan" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      bagan: number
      status: $Enums.SkillStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly image: FieldRef<"Skill", 'String'>
    readonly bagan: FieldRef<"Skill", 'Int'>
    readonly status: FieldRef<"Skill", 'SkillStatus'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    status: $Enums.CommunityStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    status: $Enums.CommunityStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    userId: number | null
    message: string
    status: $Enums.CommunityStatus
    createdAt: Date
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Community$userArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Community$userArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Community$userArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Community$userArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Community$userArgs<ExtArgs>
  }
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Community$userArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      message: string
      status: $Enums.CommunityStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Community$userArgs<ExtArgs> = {}>(args?: Subset<T, Community$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly userId: FieldRef<"Community", 'Int'>
    readonly message: FieldRef<"Community", 'String'>
    readonly status: FieldRef<"Community", 'CommunityStatus'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.user
   */
  export type Community$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    password: 'password',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PortoJenisScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortoJenisScalarFieldEnum = (typeof PortoJenisScalarFieldEnum)[keyof typeof PortoJenisScalarFieldEnum]


  export const PortofolioScalarFieldEnum: {
    id: 'id',
    portoJenisId: 'portoJenisId',
    title: 'title',
    image: 'image',
    url: 'url',
    description: 'description',
    isPrimary: 'isPrimary',
    category: 'category',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortofolioScalarFieldEnum = (typeof PortofolioScalarFieldEnum)[keyof typeof PortofolioScalarFieldEnum]


  export const SertifikatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SertifikatScalarFieldEnum = (typeof SertifikatScalarFieldEnum)[keyof typeof SertifikatScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    bagan: 'bagan',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PortfolioStatus'
   */
  export type EnumPortfolioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioStatus'>
    


  /**
   * Reference to a field of type 'PortfolioStatus[]'
   */
  export type ListEnumPortfolioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioStatus[]'>
    


  /**
   * Reference to a field of type 'SkillStatus'
   */
  export type EnumSkillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillStatus'>
    


  /**
   * Reference to a field of type 'SkillStatus[]'
   */
  export type ListEnumSkillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillStatus[]'>
    


  /**
   * Reference to a field of type 'CommunityStatus'
   */
  export type EnumCommunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunityStatus'>
    


  /**
   * Reference to a field of type 'CommunityStatus[]'
   */
  export type ListEnumCommunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunityStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringFilter<"User"> | string
    communities?: CommunityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    communities?: CommunityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringFilter<"User"> | string
    communities?: CommunityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type PortoJenisWhereInput = {
    AND?: PortoJenisWhereInput | PortoJenisWhereInput[]
    OR?: PortoJenisWhereInput[]
    NOT?: PortoJenisWhereInput | PortoJenisWhereInput[]
    id?: IntFilter<"PortoJenis"> | number
    name?: StringFilter<"PortoJenis"> | string
    status?: EnumStatusFilter<"PortoJenis"> | $Enums.Status
    createdAt?: DateTimeFilter<"PortoJenis"> | Date | string
    updatedAt?: DateTimeFilter<"PortoJenis"> | Date | string
    Portofolio?: PortofolioListRelationFilter
  }

  export type PortoJenisOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Portofolio?: PortofolioOrderByRelationAggregateInput
  }

  export type PortoJenisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortoJenisWhereInput | PortoJenisWhereInput[]
    OR?: PortoJenisWhereInput[]
    NOT?: PortoJenisWhereInput | PortoJenisWhereInput[]
    name?: StringFilter<"PortoJenis"> | string
    status?: EnumStatusFilter<"PortoJenis"> | $Enums.Status
    createdAt?: DateTimeFilter<"PortoJenis"> | Date | string
    updatedAt?: DateTimeFilter<"PortoJenis"> | Date | string
    Portofolio?: PortofolioListRelationFilter
  }, "id">

  export type PortoJenisOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortoJenisCountOrderByAggregateInput
    _avg?: PortoJenisAvgOrderByAggregateInput
    _max?: PortoJenisMaxOrderByAggregateInput
    _min?: PortoJenisMinOrderByAggregateInput
    _sum?: PortoJenisSumOrderByAggregateInput
  }

  export type PortoJenisScalarWhereWithAggregatesInput = {
    AND?: PortoJenisScalarWhereWithAggregatesInput | PortoJenisScalarWhereWithAggregatesInput[]
    OR?: PortoJenisScalarWhereWithAggregatesInput[]
    NOT?: PortoJenisScalarWhereWithAggregatesInput | PortoJenisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortoJenis"> | number
    name?: StringWithAggregatesFilter<"PortoJenis"> | string
    status?: EnumStatusWithAggregatesFilter<"PortoJenis"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"PortoJenis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortoJenis"> | Date | string
  }

  export type PortofolioWhereInput = {
    AND?: PortofolioWhereInput | PortofolioWhereInput[]
    OR?: PortofolioWhereInput[]
    NOT?: PortofolioWhereInput | PortofolioWhereInput[]
    id?: IntFilter<"Portofolio"> | number
    portoJenisId?: IntFilter<"Portofolio"> | number
    title?: StringFilter<"Portofolio"> | string
    image?: StringFilter<"Portofolio"> | string
    url?: StringFilter<"Portofolio"> | string
    description?: StringFilter<"Portofolio"> | string
    isPrimary?: BoolFilter<"Portofolio"> | boolean
    category?: StringFilter<"Portofolio"> | string
    status?: EnumPortfolioStatusFilter<"Portofolio"> | $Enums.PortfolioStatus
    createdAt?: DateTimeFilter<"Portofolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portofolio"> | Date | string
    PortoJenis?: XOR<PortoJenisScalarRelationFilter, PortoJenisWhereInput>
  }

  export type PortofolioOrderByWithRelationInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
    title?: SortOrder
    image?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PortoJenis?: PortoJenisOrderByWithRelationInput
  }

  export type PortofolioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortofolioWhereInput | PortofolioWhereInput[]
    OR?: PortofolioWhereInput[]
    NOT?: PortofolioWhereInput | PortofolioWhereInput[]
    portoJenisId?: IntFilter<"Portofolio"> | number
    title?: StringFilter<"Portofolio"> | string
    image?: StringFilter<"Portofolio"> | string
    url?: StringFilter<"Portofolio"> | string
    description?: StringFilter<"Portofolio"> | string
    isPrimary?: BoolFilter<"Portofolio"> | boolean
    category?: StringFilter<"Portofolio"> | string
    status?: EnumPortfolioStatusFilter<"Portofolio"> | $Enums.PortfolioStatus
    createdAt?: DateTimeFilter<"Portofolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portofolio"> | Date | string
    PortoJenis?: XOR<PortoJenisScalarRelationFilter, PortoJenisWhereInput>
  }, "id">

  export type PortofolioOrderByWithAggregationInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
    title?: SortOrder
    image?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortofolioCountOrderByAggregateInput
    _avg?: PortofolioAvgOrderByAggregateInput
    _max?: PortofolioMaxOrderByAggregateInput
    _min?: PortofolioMinOrderByAggregateInput
    _sum?: PortofolioSumOrderByAggregateInput
  }

  export type PortofolioScalarWhereWithAggregatesInput = {
    AND?: PortofolioScalarWhereWithAggregatesInput | PortofolioScalarWhereWithAggregatesInput[]
    OR?: PortofolioScalarWhereWithAggregatesInput[]
    NOT?: PortofolioScalarWhereWithAggregatesInput | PortofolioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portofolio"> | number
    portoJenisId?: IntWithAggregatesFilter<"Portofolio"> | number
    title?: StringWithAggregatesFilter<"Portofolio"> | string
    image?: StringWithAggregatesFilter<"Portofolio"> | string
    url?: StringWithAggregatesFilter<"Portofolio"> | string
    description?: StringWithAggregatesFilter<"Portofolio"> | string
    isPrimary?: BoolWithAggregatesFilter<"Portofolio"> | boolean
    category?: StringWithAggregatesFilter<"Portofolio"> | string
    status?: EnumPortfolioStatusWithAggregatesFilter<"Portofolio"> | $Enums.PortfolioStatus
    createdAt?: DateTimeWithAggregatesFilter<"Portofolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portofolio"> | Date | string
  }

  export type SertifikatWhereInput = {
    AND?: SertifikatWhereInput | SertifikatWhereInput[]
    OR?: SertifikatWhereInput[]
    NOT?: SertifikatWhereInput | SertifikatWhereInput[]
    id?: IntFilter<"Sertifikat"> | number
    name?: StringFilter<"Sertifikat"> | string
    image?: StringFilter<"Sertifikat"> | string
    status?: EnumStatusFilter<"Sertifikat"> | $Enums.Status
    createdAt?: DateTimeFilter<"Sertifikat"> | Date | string
    updatedAt?: DateTimeFilter<"Sertifikat"> | Date | string
  }

  export type SertifikatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SertifikatWhereInput | SertifikatWhereInput[]
    OR?: SertifikatWhereInput[]
    NOT?: SertifikatWhereInput | SertifikatWhereInput[]
    name?: StringFilter<"Sertifikat"> | string
    image?: StringFilter<"Sertifikat"> | string
    status?: EnumStatusFilter<"Sertifikat"> | $Enums.Status
    createdAt?: DateTimeFilter<"Sertifikat"> | Date | string
    updatedAt?: DateTimeFilter<"Sertifikat"> | Date | string
  }, "id">

  export type SertifikatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SertifikatCountOrderByAggregateInput
    _avg?: SertifikatAvgOrderByAggregateInput
    _max?: SertifikatMaxOrderByAggregateInput
    _min?: SertifikatMinOrderByAggregateInput
    _sum?: SertifikatSumOrderByAggregateInput
  }

  export type SertifikatScalarWhereWithAggregatesInput = {
    AND?: SertifikatScalarWhereWithAggregatesInput | SertifikatScalarWhereWithAggregatesInput[]
    OR?: SertifikatScalarWhereWithAggregatesInput[]
    NOT?: SertifikatScalarWhereWithAggregatesInput | SertifikatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sertifikat"> | number
    name?: StringWithAggregatesFilter<"Sertifikat"> | string
    image?: StringWithAggregatesFilter<"Sertifikat"> | string
    status?: EnumStatusWithAggregatesFilter<"Sertifikat"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Sertifikat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sertifikat"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    image?: StringFilter<"Skill"> | string
    bagan?: IntFilter<"Skill"> | number
    status?: EnumSkillStatusFilter<"Skill"> | $Enums.SkillStatus
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bagan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    image?: StringFilter<"Skill"> | string
    bagan?: IntFilter<"Skill"> | number
    status?: EnumSkillStatusFilter<"Skill"> | $Enums.SkillStatus
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bagan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
    image?: StringWithAggregatesFilter<"Skill"> | string
    bagan?: IntWithAggregatesFilter<"Skill"> | number
    status?: EnumSkillStatusWithAggregatesFilter<"Skill"> | $Enums.SkillStatus
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    userId?: IntNullableFilter<"Community"> | number | null
    message?: StringFilter<"Community"> | string
    status?: EnumCommunityStatusFilter<"Community"> | $Enums.CommunityStatus
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    userId?: IntNullableFilter<"Community"> | number | null
    message?: StringFilter<"Community"> | string
    status?: EnumCommunityStatusFilter<"Community"> | $Enums.CommunityStatus
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    userId?: IntNullableWithAggregatesFilter<"Community"> | number | null
    message?: StringWithAggregatesFilter<"Community"> | string
    status?: EnumCommunityStatusWithAggregatesFilter<"Community"> | $Enums.CommunityStatus
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    createdAt?: Date | string
    password: string
    updatedAt?: Date | string
    role: string
    communities?: CommunityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    password: string
    updatedAt?: Date | string
    role: string
    communities?: CommunityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    communities?: CommunityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    communities?: CommunityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    password: string
    updatedAt?: Date | string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PortoJenisCreateInput = {
    name: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
    Portofolio?: PortofolioCreateNestedManyWithoutPortoJenisInput
  }

  export type PortoJenisUncheckedCreateInput = {
    id?: number
    name: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
    Portofolio?: PortofolioUncheckedCreateNestedManyWithoutPortoJenisInput
  }

  export type PortoJenisUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Portofolio?: PortofolioUpdateManyWithoutPortoJenisNestedInput
  }

  export type PortoJenisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Portofolio?: PortofolioUncheckedUpdateManyWithoutPortoJenisNestedInput
  }

  export type PortoJenisCreateManyInput = {
    id?: number
    name: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortoJenisUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortoJenisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortofolioCreateInput = {
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt?: Date | string
    updatedAt: Date | string
    PortoJenis: PortoJenisCreateNestedOneWithoutPortofolioInput
  }

  export type PortofolioUncheckedCreateInput = {
    id?: number
    portoJenisId: number
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortofolioUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PortoJenis?: PortoJenisUpdateOneRequiredWithoutPortofolioNestedInput
  }

  export type PortofolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portoJenisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortofolioCreateManyInput = {
    id?: number
    portoJenisId: number
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortofolioUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortofolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portoJenisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatCreateInput = {
    name: string
    image: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SertifikatUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SertifikatUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatCreateManyInput = {
    id?: number
    name: string
    image: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SertifikatUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    name: string
    image: string
    bagan: number
    status: $Enums.SkillStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    bagan: number
    status: $Enums.SkillStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bagan?: IntFieldUpdateOperationsInput | number
    status?: EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bagan?: IntFieldUpdateOperationsInput | number
    status?: EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
    image: string
    bagan: number
    status: $Enums.SkillStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bagan?: IntFieldUpdateOperationsInput | number
    status?: EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bagan?: IntFieldUpdateOperationsInput | number
    status?: EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    message: string
    status?: $Enums.CommunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    userId?: number | null
    message: string
    status?: $Enums.CommunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateManyInput = {
    id?: number
    userId?: number | null
    message: string
    status?: $Enums.CommunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type PortofolioListRelationFilter = {
    every?: PortofolioWhereInput
    some?: PortofolioWhereInput
    none?: PortofolioWhereInput
  }

  export type PortofolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortoJenisCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortoJenisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PortoJenisMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortoJenisMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortoJenisSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPortfolioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioStatus | EnumPortfolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioStatusFilter<$PrismaModel> | $Enums.PortfolioStatus
  }

  export type PortoJenisScalarRelationFilter = {
    is?: PortoJenisWhereInput
    isNot?: PortoJenisWhereInput
  }

  export type PortofolioCountOrderByAggregateInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
    title?: SortOrder
    image?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortofolioAvgOrderByAggregateInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
  }

  export type PortofolioMaxOrderByAggregateInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
    title?: SortOrder
    image?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortofolioMinOrderByAggregateInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
    title?: SortOrder
    image?: SortOrder
    url?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortofolioSumOrderByAggregateInput = {
    id?: SortOrder
    portoJenisId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPortfolioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioStatus | EnumPortfolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioStatusWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioStatusFilter<$PrismaModel>
    _max?: NestedEnumPortfolioStatusFilter<$PrismaModel>
  }

  export type SertifikatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SertifikatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSkillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | EnumSkillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillStatusFilter<$PrismaModel> | $Enums.SkillStatus
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bagan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
    bagan?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bagan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bagan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
    bagan?: SortOrder
  }

  export type EnumSkillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | EnumSkillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillStatusFilter<$PrismaModel>
    _max?: NestedEnumSkillStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCommunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityStatus | EnumCommunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityStatusFilter<$PrismaModel> | $Enums.CommunityStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCommunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityStatus | EnumCommunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunityStatusFilter<$PrismaModel>
    _max?: NestedEnumCommunityStatusFilter<$PrismaModel>
  }

  export type CommunityCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityCreateWithoutUserInput, CommunityUncheckedCreateWithoutUserInput> | CommunityCreateWithoutUserInput[] | CommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUserInput | CommunityCreateOrConnectWithoutUserInput[]
    createMany?: CommunityCreateManyUserInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityCreateWithoutUserInput, CommunityUncheckedCreateWithoutUserInput> | CommunityCreateWithoutUserInput[] | CommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUserInput | CommunityCreateOrConnectWithoutUserInput[]
    createMany?: CommunityCreateManyUserInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommunityUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityCreateWithoutUserInput, CommunityUncheckedCreateWithoutUserInput> | CommunityCreateWithoutUserInput[] | CommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUserInput | CommunityCreateOrConnectWithoutUserInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutUserInput | CommunityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityCreateManyUserInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutUserInput | CommunityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutUserInput | CommunityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommunityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityCreateWithoutUserInput, CommunityUncheckedCreateWithoutUserInput> | CommunityCreateWithoutUserInput[] | CommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUserInput | CommunityCreateOrConnectWithoutUserInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutUserInput | CommunityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityCreateManyUserInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutUserInput | CommunityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutUserInput | CommunityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type PortofolioCreateNestedManyWithoutPortoJenisInput = {
    create?: XOR<PortofolioCreateWithoutPortoJenisInput, PortofolioUncheckedCreateWithoutPortoJenisInput> | PortofolioCreateWithoutPortoJenisInput[] | PortofolioUncheckedCreateWithoutPortoJenisInput[]
    connectOrCreate?: PortofolioCreateOrConnectWithoutPortoJenisInput | PortofolioCreateOrConnectWithoutPortoJenisInput[]
    createMany?: PortofolioCreateManyPortoJenisInputEnvelope
    connect?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
  }

  export type PortofolioUncheckedCreateNestedManyWithoutPortoJenisInput = {
    create?: XOR<PortofolioCreateWithoutPortoJenisInput, PortofolioUncheckedCreateWithoutPortoJenisInput> | PortofolioCreateWithoutPortoJenisInput[] | PortofolioUncheckedCreateWithoutPortoJenisInput[]
    connectOrCreate?: PortofolioCreateOrConnectWithoutPortoJenisInput | PortofolioCreateOrConnectWithoutPortoJenisInput[]
    createMany?: PortofolioCreateManyPortoJenisInputEnvelope
    connect?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type PortofolioUpdateManyWithoutPortoJenisNestedInput = {
    create?: XOR<PortofolioCreateWithoutPortoJenisInput, PortofolioUncheckedCreateWithoutPortoJenisInput> | PortofolioCreateWithoutPortoJenisInput[] | PortofolioUncheckedCreateWithoutPortoJenisInput[]
    connectOrCreate?: PortofolioCreateOrConnectWithoutPortoJenisInput | PortofolioCreateOrConnectWithoutPortoJenisInput[]
    upsert?: PortofolioUpsertWithWhereUniqueWithoutPortoJenisInput | PortofolioUpsertWithWhereUniqueWithoutPortoJenisInput[]
    createMany?: PortofolioCreateManyPortoJenisInputEnvelope
    set?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    disconnect?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    delete?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    connect?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    update?: PortofolioUpdateWithWhereUniqueWithoutPortoJenisInput | PortofolioUpdateWithWhereUniqueWithoutPortoJenisInput[]
    updateMany?: PortofolioUpdateManyWithWhereWithoutPortoJenisInput | PortofolioUpdateManyWithWhereWithoutPortoJenisInput[]
    deleteMany?: PortofolioScalarWhereInput | PortofolioScalarWhereInput[]
  }

  export type PortofolioUncheckedUpdateManyWithoutPortoJenisNestedInput = {
    create?: XOR<PortofolioCreateWithoutPortoJenisInput, PortofolioUncheckedCreateWithoutPortoJenisInput> | PortofolioCreateWithoutPortoJenisInput[] | PortofolioUncheckedCreateWithoutPortoJenisInput[]
    connectOrCreate?: PortofolioCreateOrConnectWithoutPortoJenisInput | PortofolioCreateOrConnectWithoutPortoJenisInput[]
    upsert?: PortofolioUpsertWithWhereUniqueWithoutPortoJenisInput | PortofolioUpsertWithWhereUniqueWithoutPortoJenisInput[]
    createMany?: PortofolioCreateManyPortoJenisInputEnvelope
    set?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    disconnect?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    delete?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    connect?: PortofolioWhereUniqueInput | PortofolioWhereUniqueInput[]
    update?: PortofolioUpdateWithWhereUniqueWithoutPortoJenisInput | PortofolioUpdateWithWhereUniqueWithoutPortoJenisInput[]
    updateMany?: PortofolioUpdateManyWithWhereWithoutPortoJenisInput | PortofolioUpdateManyWithWhereWithoutPortoJenisInput[]
    deleteMany?: PortofolioScalarWhereInput | PortofolioScalarWhereInput[]
  }

  export type PortoJenisCreateNestedOneWithoutPortofolioInput = {
    create?: XOR<PortoJenisCreateWithoutPortofolioInput, PortoJenisUncheckedCreateWithoutPortofolioInput>
    connectOrCreate?: PortoJenisCreateOrConnectWithoutPortofolioInput
    connect?: PortoJenisWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPortfolioStatusFieldUpdateOperationsInput = {
    set?: $Enums.PortfolioStatus
  }

  export type PortoJenisUpdateOneRequiredWithoutPortofolioNestedInput = {
    create?: XOR<PortoJenisCreateWithoutPortofolioInput, PortoJenisUncheckedCreateWithoutPortofolioInput>
    connectOrCreate?: PortoJenisCreateOrConnectWithoutPortofolioInput
    upsert?: PortoJenisUpsertWithoutPortofolioInput
    connect?: PortoJenisWhereUniqueInput
    update?: XOR<XOR<PortoJenisUpdateToOneWithWhereWithoutPortofolioInput, PortoJenisUpdateWithoutPortofolioInput>, PortoJenisUncheckedUpdateWithoutPortofolioInput>
  }

  export type EnumSkillStatusFieldUpdateOperationsInput = {
    set?: $Enums.SkillStatus
  }

  export type UserCreateNestedOneWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCommunityStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommunityStatus
  }

  export type UserUpdateOneWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    upsert?: UserUpsertWithoutCommunitiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunitiesInput, UserUpdateWithoutCommunitiesInput>, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPortfolioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioStatus | EnumPortfolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioStatusFilter<$PrismaModel> | $Enums.PortfolioStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPortfolioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioStatus | EnumPortfolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioStatus[] | ListEnumPortfolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioStatusWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioStatusFilter<$PrismaModel>
    _max?: NestedEnumPortfolioStatusFilter<$PrismaModel>
  }

  export type NestedEnumSkillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | EnumSkillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillStatusFilter<$PrismaModel> | $Enums.SkillStatus
  }

  export type NestedEnumSkillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | EnumSkillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillStatus[] | ListEnumSkillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillStatusFilter<$PrismaModel>
    _max?: NestedEnumSkillStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCommunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityStatus | EnumCommunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityStatusFilter<$PrismaModel> | $Enums.CommunityStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCommunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityStatus | EnumCommunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityStatus[] | ListEnumCommunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunityStatusFilter<$PrismaModel>
    _max?: NestedEnumCommunityStatusFilter<$PrismaModel>
  }

  export type CommunityCreateWithoutUserInput = {
    message: string
    status?: $Enums.CommunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    status?: $Enums.CommunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityCreateOrConnectWithoutUserInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutUserInput, CommunityUncheckedCreateWithoutUserInput>
  }

  export type CommunityCreateManyUserInputEnvelope = {
    data: CommunityCreateManyUserInput | CommunityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutUserInput, CommunityUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityCreateWithoutUserInput, CommunityUncheckedCreateWithoutUserInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutUserInput, CommunityUncheckedUpdateWithoutUserInput>
  }

  export type CommunityUpdateManyWithWhereWithoutUserInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: IntFilter<"Community"> | number
    userId?: IntNullableFilter<"Community"> | number | null
    message?: StringFilter<"Community"> | string
    status?: EnumCommunityStatusFilter<"Community"> | $Enums.CommunityStatus
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
  }

  export type PortofolioCreateWithoutPortoJenisInput = {
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortofolioUncheckedCreateWithoutPortoJenisInput = {
    id?: number
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortofolioCreateOrConnectWithoutPortoJenisInput = {
    where: PortofolioWhereUniqueInput
    create: XOR<PortofolioCreateWithoutPortoJenisInput, PortofolioUncheckedCreateWithoutPortoJenisInput>
  }

  export type PortofolioCreateManyPortoJenisInputEnvelope = {
    data: PortofolioCreateManyPortoJenisInput | PortofolioCreateManyPortoJenisInput[]
    skipDuplicates?: boolean
  }

  export type PortofolioUpsertWithWhereUniqueWithoutPortoJenisInput = {
    where: PortofolioWhereUniqueInput
    update: XOR<PortofolioUpdateWithoutPortoJenisInput, PortofolioUncheckedUpdateWithoutPortoJenisInput>
    create: XOR<PortofolioCreateWithoutPortoJenisInput, PortofolioUncheckedCreateWithoutPortoJenisInput>
  }

  export type PortofolioUpdateWithWhereUniqueWithoutPortoJenisInput = {
    where: PortofolioWhereUniqueInput
    data: XOR<PortofolioUpdateWithoutPortoJenisInput, PortofolioUncheckedUpdateWithoutPortoJenisInput>
  }

  export type PortofolioUpdateManyWithWhereWithoutPortoJenisInput = {
    where: PortofolioScalarWhereInput
    data: XOR<PortofolioUpdateManyMutationInput, PortofolioUncheckedUpdateManyWithoutPortoJenisInput>
  }

  export type PortofolioScalarWhereInput = {
    AND?: PortofolioScalarWhereInput | PortofolioScalarWhereInput[]
    OR?: PortofolioScalarWhereInput[]
    NOT?: PortofolioScalarWhereInput | PortofolioScalarWhereInput[]
    id?: IntFilter<"Portofolio"> | number
    portoJenisId?: IntFilter<"Portofolio"> | number
    title?: StringFilter<"Portofolio"> | string
    image?: StringFilter<"Portofolio"> | string
    url?: StringFilter<"Portofolio"> | string
    description?: StringFilter<"Portofolio"> | string
    isPrimary?: BoolFilter<"Portofolio"> | boolean
    category?: StringFilter<"Portofolio"> | string
    status?: EnumPortfolioStatusFilter<"Portofolio"> | $Enums.PortfolioStatus
    createdAt?: DateTimeFilter<"Portofolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portofolio"> | Date | string
  }

  export type PortoJenisCreateWithoutPortofolioInput = {
    name: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortoJenisUncheckedCreateWithoutPortofolioInput = {
    id?: number
    name: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortoJenisCreateOrConnectWithoutPortofolioInput = {
    where: PortoJenisWhereUniqueInput
    create: XOR<PortoJenisCreateWithoutPortofolioInput, PortoJenisUncheckedCreateWithoutPortofolioInput>
  }

  export type PortoJenisUpsertWithoutPortofolioInput = {
    update: XOR<PortoJenisUpdateWithoutPortofolioInput, PortoJenisUncheckedUpdateWithoutPortofolioInput>
    create: XOR<PortoJenisCreateWithoutPortofolioInput, PortoJenisUncheckedCreateWithoutPortofolioInput>
    where?: PortoJenisWhereInput
  }

  export type PortoJenisUpdateToOneWithWhereWithoutPortofolioInput = {
    where?: PortoJenisWhereInput
    data: XOR<PortoJenisUpdateWithoutPortofolioInput, PortoJenisUncheckedUpdateWithoutPortofolioInput>
  }

  export type PortoJenisUpdateWithoutPortofolioInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortoJenisUncheckedUpdateWithoutPortofolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCommunitiesInput = {
    name: string
    email: string
    createdAt?: Date | string
    password: string
    updatedAt?: Date | string
    role: string
  }

  export type UserUncheckedCreateWithoutCommunitiesInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    password: string
    updatedAt?: Date | string
    role: string
  }

  export type UserCreateOrConnectWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type UserUpsertWithoutCommunitiesInput = {
    update: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type UserUpdateWithoutCommunitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityCreateManyUserInput = {
    id?: number
    message: string
    status?: $Enums.CommunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunityStatusFieldUpdateOperationsInput | $Enums.CommunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortofolioCreateManyPortoJenisInput = {
    id?: number
    title: string
    image: string
    url: string
    description: string
    isPrimary: boolean
    category: string
    status: $Enums.PortfolioStatus
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PortofolioUpdateWithoutPortoJenisInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortofolioUncheckedUpdateWithoutPortoJenisInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortofolioUncheckedUpdateManyWithoutPortoJenisInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumPortfolioStatusFieldUpdateOperationsInput | $Enums.PortfolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}