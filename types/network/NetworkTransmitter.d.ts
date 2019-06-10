import Serializer from "../serialize/Serializer";
import NetworkedEventCollection, { NetworkedEvent } from "./NetworkedEventCollection";
import Serializable from "../serialize/Serializable";

export default class NetworkTransmitter {

    constructor(serializer: Serializer);
    serializer: Serializer;
    registeredEvents: object[];
    networkedEventCollection: NetworkedEventCollection;

    registerNetworkedEventFactor(eventName: string, options: object): void;

    addNetworkedEvent(eventName: string, payload: object): NetworkedEvent;

    serializerPayload():  { data: any, bufferSize: number };

    deserializePayload(payload: object): Serializable;

    clearPayload();
}