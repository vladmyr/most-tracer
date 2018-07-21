import { of as _of, empty as _empty, never as _never } from "most";
import StreamT from "../StreamT";

const ofT = <T>(...args: any[]) => StreamT.Construct<T>(_of.apply(_of, args));
const emptyT = () => StreamT.Construct<any>(_empty.call(_empty));
const neverT = () => StreamT.Construct<any>(_never.call(_never));

const of: typeof _of = ofT;
const empty: typeof _empty = emptyT;
const never: typeof _never = neverT;

export { ofT, of, emptyT, empty, neverT, never, ofT as justT, of as just };