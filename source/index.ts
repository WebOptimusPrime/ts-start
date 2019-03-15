import { types } from "util";

console.log(types.isPromise(Promise.resolve(0)));

export function someFn(x: boolean) {
  if (x) return 0;
  return 1;
}