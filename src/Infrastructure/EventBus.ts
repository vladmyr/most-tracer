import EventRecord from "./EventRecord";
import StreamT from "../Tracables/StreamT";

type IListener<T> = {
    (eventRecord: EventRecord<T>): void
}

class EventBus {
    private static _Listeners: IListener<any>[] = [];
    private static _Emit<T>(eventRecord: EventRecord<T>) {
        this._Listeners.forEach(f => f(eventRecord));
    }

    public static Emit<T>(id: string, value: T, error?: Error) {
        const eventRecord = new EventRecord(id, value, error);
        this._Emit(eventRecord);
    }

    public static AddListener(listener: IListener<any>) {
        this._Listeners.push(listener);
    }

    private constructor() {};
}

export default EventBus;