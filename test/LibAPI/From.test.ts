import test from "ava";
import { from } from "most";

import { fromT } from "../../src/Tracables/Source/From";

import StreamTestHelper from "../Helpers/StreamTestHelper";

test("[most.from] collect iterable", async (t) => {
    const iterable = [1,2,3,4,5];
    const resolutionCriteria = { take: iterable.length };
    
    const original$ = from(iterable);
    const patched$ = fromT(iterable);

    const [originalResult, patchedResult] = await Promise.all([
        StreamTestHelper.Collect(original$, resolutionCriteria),
        StreamTestHelper.Collect(patched$, resolutionCriteria)
    ])

    t.deepEqual(originalResult, patchedResult);
})

// test("[most.from] listen iterable", async (t) => {
//     const iterable = [2,3,4,5,6];
//     const resolutionCriteria = { take: iterable.length };
    
//     const iterable$ = fromT<number>(iterable);

//     const listener = StreamTestHelper.Listen(iterable$, resolutionCriteria);
//     iterable$.observe(Function.prototype as any);
    
//     const resolved = await listener;

//     t.deepEqual(resolved.length, iterable.length);
// })