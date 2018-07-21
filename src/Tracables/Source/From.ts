import { from as _from } from "most";
import StreamT from "../StreamT";

const fromT = <T>(...args: any[]): StreamT<T> => {
    return StreamT.Construct<T>(_from.apply(_from, args));
}
const from: typeof _from = fromT;

export { fromT, from };