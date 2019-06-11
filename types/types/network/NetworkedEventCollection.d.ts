import Serializable from "../serialize/Serializable";

type NetworkedEvent = Serializable<object>;

export default class NetworkedEventCollection extends Serializable<NetworkedEventCollection> {
    static readonly netScheme: object;

    constructor(events: NetworkedEvent[]);
    events: NetworkedEvent[];
}