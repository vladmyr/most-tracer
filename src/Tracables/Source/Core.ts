import { of, empty, never } from "most";
import StreamT from "../StreamT";

const ofT: typeof of = <T>(...args: any[]) => new StreamT<T>(of.apply(of, args));
const emptyT: typeof empty = () => new StreamT<any>(empty.call(empty));
const neverT: typeof never = () => new StreamT<any>(never.call(never));

export { ofT as of, ofT as just, emptyT as empty, neverT as never }