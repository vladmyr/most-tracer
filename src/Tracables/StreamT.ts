import { Stream, of, empty, from } from "most";

class StreamT<T> extends Stream<T> {
    // public static of(x: any) {
    //     return 
    // }

    // public static empty() {}

    // public static from() {}

    public constructor(stream: StreamT<T>) {
        super(stream.source);
    }

    // Transforming streams API
    public map<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.map.apply(this, args));
    }

    public constant<T>(...args: any[]): StreamT<T> {
        return new StreamT(super.constant.apply(this, args));
    }

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