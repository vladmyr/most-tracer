import { fromPromise, awaitPromises } from "most";
import StreamT from "../StreamT";

const fromPromiseT: typeof fromPromise = <T>(...args: any[]) => 
    new StreamT<T>(fromPromise.apply(fromPromise, args))

const awaitPromisesT: typeof awaitPromises = <T>(...args: any[]) =>
    new StreamT<T>(awaitPromises.apply(awaitPromises, args))

export { 
    fromPromiseT as fromPromise,
    awaitPromisesT as awaitPromises
};