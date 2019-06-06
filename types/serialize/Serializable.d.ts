import Serializer from "./Serializer";

export interface SerializationOptions {
    /** Data buffer to write to. if null a new data buffer will be created */
    dataBuffer?: any;
    /** The buffer data offset to start writing at. Default: 0 */
    bufferOffset?: number;
    /** Does not actaully write to the buffer (useful to gather serializable size) */
    dry?: boolean
}

export default class Serializable<T> {
     /**
     *  Class can be serialized using either:
     * - a class based netScheme
     * - an instance based netScheme
     * - completely dynamically (not implemented yet)
     *
     * @param {Serializer} serializer - Serializer instance
     * @param {SerializationOptions} [options] - Options object
     * @return {T} the serialized object.  Contains attributes: dataBuffer - buffer which contains the serialized data;  bufferOffset - offset where the serialized data starts.
     */
    serialize(serializer: Serializer, options: SerializationOptions): T;

    /** build a clone of this object with pruned strings (if necessary) */
    prunedStringsClone(serializer: Serializer , prevObject: T): T

    syncTo(other: T);
}