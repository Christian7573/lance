import { default as SyncStrategy, SyncStrategyOptions } from "./SyncStrategy";
import ClientEngine from "../ClientEngine";

export default class InterpolateStrategy extends SyncStrategy {
    constructor(clientEngine: ClientEngine, inputOptions: SyncStrategyOptions);

    /** apply a new sync */
    applySync();

    /** keep snapshot if it's the most recent we've seen */
    keepSnapshot(e: object);

    /**
     * Perform client-side interpolation.
     */
    frameSync();


}