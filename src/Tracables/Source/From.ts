import { from as _from } from "most";
import StreamT from "../StreamT";

const fromT = <T>(...args: any[]) => {
    return new StreamT<T>(_from.apply(_from, args));
}
const from: typeof _from = fromT;

export { fromT, from };