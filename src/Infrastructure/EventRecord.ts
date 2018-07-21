import StreamT from "../Tracables/StreamT";
import StreamSet from "./StreamSet";

type TValueStream = {
    uuid: string;
}

class EventRecord<TValue> {
    private _id: string;
    private _timestamp: number;
    private _value: TValue;

    private static SerializeValue(value: any) {
        const serialized: {
            isStreamRef: boolean,
            uuid?: string,
            literal?: string
        } = {
            isStreamRef: value instanceof StreamT
        }

        if (serialized.isStreamRef) {
            serialized.uuid = (value as StreamT<any>).getId();
        } else {
            serialized.literal = JSON.stringify(value);
        }

        return serialized;
    }

    public static ToJSON(instance: EventRecord<any>) {
        return {
            id: instance._id,
            timestamp: instance._timestamp,
            value: EventRecord.SerializeValue(instance._value)
        }
    }

    public constructor(id: string, timestamp: number, value: TValue) {
        this._id = id;
        this._timestamp = timestamp;
        this._value = value;
    }

    public toJSON() {
        return EventRecord.ToJSON(this);
    }
}

export default EventRecord;