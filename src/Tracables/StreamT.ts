import { Stream, empty } from "most";
import * as uuid from "uuid/v4";

import TreeNode from "../Infrastructure/TreeNode";
import StreamSet from "../Infrastructure/StreamSet";
import EventBus from "../Infrastructure/EventBus";

type TimeValue<V> = { time: number, value: V };

/**
 * TODO:
 * 1) Finish covering API
 * 2) Constructor MUST follow parent argument list - use composition
 * 3) Come up with clever typing solution for `getParent` method
 * 4) Make `_Listen` method less hacky
 */
class StreamT<T> extends Stream<T> {
    private static _eventBus = EventBus;
    private _treeNode: TreeNode<StreamT<T>, StreamT<any> | undefined>;
    private _id: string;

    private static _Listen<T>(id: string, stream: Stream<T>) {
        return stream
            .tap(x => this._eventBus.Emit(id, x))
            // TODO: catch error without side effects
            // .recoverWith((e: Error) => {
            //     this._eventBus.Emit(id, undefined, e);
            //     return stream;
            // });
    }

    public static Construct<T>(stream: Stream<T>, parentStreamT?: StreamT<any>): StreamT<T> {
        const id = uuid();
        const listened$ = StreamT._Listen(id, stream);
        return new StreamT<T>(listened$, id, parentStreamT);
    }

    public constructor(stream: Stream<T>, id: string = "", parentStreamT?: StreamT<any>) {
        super(stream.source);
        
        this._id = id;
        this._treeNode = new TreeNode(this, parentStreamT);

        StreamSet.Add(this);
    }

    private _patch<T>(methodName: string, ...args: any[]) {
        // @ts-ignore
        const method = super[methodName]
        const stream = method.apply(this, args);
        return StreamT.Construct<T>(stream, this);
    }

    public getId() { return this._id; }

    // TreeNode API Delegatiion
    public getParent<U>() {
        return this._treeNode.getParent() as StreamT<U>;
    }

    // Creating streams API
    public startWith(a: T): StreamT<T> { return this._patch("startWith", a); }

    public concat(s: Stream<T>): StreamT<T> { return this._patch("concat", s); }

    // Transforming streams API
    public map<U>(f: (a: T) => U): StreamT<U> { return this._patch("map", f); }
    public constant<U>(u: U): StreamT<U> { return this._patch("constant", u); }
    public scan<U>(f: (u: U, a: T) => U, u: U): StreamT<U> { return this._patch("scan", f, u); }
    public chain<U>(f: (a: T) => Stream<U>): StreamT<U> { return this._patch("chain", f); }
    public continueWith(f: (a: any) => Stream<T>): StreamT<T> { return this._patch("continueWith", f); }
    public concatMap<U>(f: (a: T) => Stream<U>): StreamT<U> { return this._patch("concatMap", f); }
    public ap<U, V>(fs: Stream<(a: T) => U>): StreamT<V> { return this._patch("ap", fs); }
    public timestamp(): StreamT<TimeValue<T>> { return this._patch("timestamp"); }
    public tap(f: (a: T) => any): StreamT<T> { return this._patch("tap", f); }

    // Filtering API
    public filter(p: (a: T) => boolean): StreamT<T> { return this._patch("filter", p); }
    public skipRepeats(): StreamT<T> { return this._patch("skipRepeats"); };
    public skipRepeatsWith(eq: (a1: T, a2: T) => boolean): StreamT<T> { return this._patch("skipRepeatsWith", eq); };

    // Error API
    public recoverWith<U>(p: (a: U) => Stream<T>): StreamT<T> { return this._patch("recoverWith", p); };
}

export default StreamT;
