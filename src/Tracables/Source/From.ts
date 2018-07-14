import { from } from "most";
import StreamT from "../StreamT";

const fromT: typeof from = <T>(...args: any[]) => {
    return new StreamT<T>(from.apply(from, args));
}

export default fromT;