export class Result<T, Error> {
  private readonly value: T;
  private readonly error: Error;

  constructor(value?: T, error?: Error) {
    if (value) {
      this.value = value;
    }
    if (error) {
      this.error = error;
    }
  }

  static ok<T, Error>(ok?: T): Result<T, Error> {
    return new Result<T, Error>(ok);
  }

  static error<T, Error>(err: Error): Result<T, Error> {
    return new Result<T, Error>(undefined, err);
  }

  isOk(): boolean {
    return this.error === undefined;
  }

  isError(): boolean {
    return this.error !== undefined;
  }

  chain<U>(f: (t: T) => Result<U, Error>): Result<U, Error> {
    return this.isOk() ?
      f(this.value) :
      Result.error<U, Error>(this.error);
  }

  map<U>(f: (t: T) => U): Result<U, Error> {
    return this.isOk() ?
      Result.ok<U, Error>(f(this.value)) :
      Result.error<U, Error>(this.error);
  }

  concat<TElement, U>(this: Result<TElement[], Error>, aResult: Result<U, Error>): Result<(TElement | U)[], Error>;
  concat<U>(aResult: Result<U, Error>): Result<(T | U)[], Error>;
  concat<U>(aResult: Result<U, Error>): Result<(T | U)[], Error> {
    if (this.isError()) {
      return Result.error(this.getError());
    }
    if (aResult.isError()) {
      return Result.error(aResult.getError());
    }
    return Result.ok(Array().concat(this.value, aResult.getValue()));
  }

  getError(): Error {
    return this.error;
  }

  getValue(): T {
    return this.value;
  }
}
