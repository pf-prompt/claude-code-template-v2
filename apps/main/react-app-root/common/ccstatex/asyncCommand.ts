import { command, type Getter, type Setter, type Write, type State } from 'ccstate'

export function asyncCommand<T, Args extends unknown[]>(
  promiseState: State<Promise<T> | undefined>,
  write: Write<Promise<T>, Args>
) {
  return command((visitor: {
    get: Getter;
    set: Setter;
  }, ...args: Args) => {
    const promise = write(visitor, ...args)
    visitor.set(promiseState, promise)
    return promise
  })
}
