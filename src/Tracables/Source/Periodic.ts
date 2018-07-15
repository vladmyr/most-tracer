import { periodic } from "most";
import StreamT from "../StreamT";

const periodicT: typeof periodic = <T>(...args: any[]) =>
    new StreamT<T>(periodic.apply(periodic, args));

export { periodicT as periodic }