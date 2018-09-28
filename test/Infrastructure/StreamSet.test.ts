import test from "ava";
import StreamTestHelper from "../Helpers/StreamTestHelper";
import { fromT } from "../../src/Tracables/Source/From";
import StreamSet from "../../src/Infrastructure/StreamSet";

test.only("[StreamSet] Verify every new stream is added to global set", async(t) => {
    const totalSize = 5;
    const iterable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const iterable$ = fromT<number>(iterable);
    const multiplied$ = iterable$.map(x => x * 3 - 1);
    const even$ = multiplied$.filter(x => x % 2 == 0);
    const const$ = even$.constant(true);

    await Promise.resolve(StreamTestHelper.Collect(const$));

    t.deepEqual(StreamSet.GetSize(), totalSize);
    t.true(StreamSet.Has(iterable$));
    t.true(StreamSet.Has(multiplied$));
    t.true(StreamSet.Has(even$));
    t.true(StreamSet.Has(const$));
});