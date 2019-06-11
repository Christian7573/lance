import Serializer from "../serialize/Serializer";
import Serializable from "../serialize/Serializable";

export interface NetworkedEventOptions {
    netScheme?: object;
}

export default class NetworkedEventFactory {
    constructor(serializer: Serializer, eventName: string, options: NetworkedEventOptions);

    serializer: Serializer;
    options: object;
    eventName: string;
    netScheme: object;

     /**
     * Creates a new networkedEvent
     * @param {Object} payload an object representing the payload to be transferred over the wire
     * @return {Serializable} the new networkedEvent object
     */
    create(payload: object): Serializable<object>;
}