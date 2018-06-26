import { Stream } from "most";

export enum ACTION {
    CREATE,
    EMIT,
    ERROR,
    END
}
class TraceRecordItem {
    public parent$: Stream<any> = undefined;
    public action: ACTION = ACTION.CREATE;
    public value: any

    public constructor(parent$: Stream<any>, action: ACTION, value: any) {
        this.parent$ = parent$;
        this.action = action;
        this.value = value;
    }
}

export default TraceRecordItem;