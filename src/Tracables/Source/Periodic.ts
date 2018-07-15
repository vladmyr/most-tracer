import { periodic as _periodic } from "most";
import StreamT from "../StreamT";

const periodicT = <T>(...args: any[]) =>
    new StreamT<T>(_periodic.apply(_periodic, args));

const periodic: typeof _periodic = periodicT;

export { periodic, periodicT }