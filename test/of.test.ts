import test from "ava";
import { of } from "most";

import { of as ofT } from "../src/Tracables/Source/Core";

import StreamTestHelper from "./Helpers/StreamTestHelper";

test("most.of alias most.just", async(t) => {
    const original$ = of("hello")
    const patched$ = ofT("hello")

    const [originalResult, patchedResult] = await Promise.all([
        StreamTestHelper.Collect(original$),
        StreamTestHelper.Collect(patched$)
    ]);

    t.deepEqual(originalResult, patchedResult);
});