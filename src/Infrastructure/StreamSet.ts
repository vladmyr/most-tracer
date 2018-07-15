import { Stream } from "most";
class StreamSet {
    private static _Set = new Set<Stream<any>>();

    public static Add(stream: Stream<any>) {
        this._Set.add(stream);
    }

    public static Has(stream: Stream<any>) {
        return this._Set.has(stream);
    }

    private constructor() {}
}

export default StreamSet;