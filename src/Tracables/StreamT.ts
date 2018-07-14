import { Stream } from "most";

class StreamT<T> extends Stream<T> {
    // public static of(x: any) {
    //     return 
    // }

    // public static empty() {}

    // public static from() {}

    private _patch<T>(methodName: string, args: any[]) {
        // @ts-ignore
        const method = super[methodName]
        return new StreamT<T>(method.apply(this, args));
    }

    public constructor(stream: StreamT<T>) {
        super(stream.source);
    }

    // Creating streams API
    public startWith<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.startWith.apply(this, args));
    }

    public concat<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.concat.apply(this, args));
    }

    // Transforming streams API
    public map<T>(...args: any[]): StreamT<T> { return this._patch("map", args); }
    public constant<T>(...args: any[]): StreamT<T> { return this._patch("constant", args); }

    public scan<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.scan.apply(this, args));
    }

    public chain<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.chain.apply(this, args));
    }

    public continueWith<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.continueWith.apply(this, args));
    }

    public concatMap<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.concatMap.apply(this, args));
    }

    public ap<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.ap.apply(this, args));
    }

    public timestamp<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.timestamp.apply(this, args));
    }

    public tap<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.tap.apply(this, args));
    }
}

export default StreamT;