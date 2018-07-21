import { fromPromise as _fromPromise, awaitPromises as _awaitPromises } from "most";
import StreamT from "../StreamT";

const fromPromiseT = <T>(...args: any[]) => 
    StreamT.Construct<T>(_fromPromise.apply(_fromPromise, args))

const awaitPromisesT = <T>(...args: any[]) =>
    StreamT.Construct<T>(_awaitPromises.apply(_awaitPromises, args))

const fromPromise: typeof _fromPromise = fromPromiseT;
const awaitPromises: typeof _awaitPromises = awaitPromisesT;

export { fromPromise, fromPromiseT, awaitPromises, awaitPromisesT };