import test from "ava";
import { fromT } from "../../src/Tracables/Source/From";

test("[StreatT] TreeNode - get parent", async(t) => {
    const iterable = [0, 1, 2, 3, 4];
    const from$ = fromT<number>(iterable);
    const filterEven$ = from$.filter(x => x % 2 === 0);
    const mapEven$ = filterEven$.map(x => 2 * x + 1);

    t.is(mapEven$.getParent<number>(), filterEven$);
    t.is(filterEven$.getParent<number>(), from$);
    t.is(mapEven$.getParent<number>().getParent<number>(), from$);
})