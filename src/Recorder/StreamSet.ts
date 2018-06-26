import { Stream } from "most";
class StreamSet {
    private _Set = new Set<Stream<any>>();

    public Add(stream: Stream<any>) {
        this._Set.add(stream);
    }

    public Has(stream: Stream<any>) {
        return this._Set.has(stream);
    }

    private constructor() {}
}

export default StreamSet;