import { default as SyncStrategy, SyncStrategyOptions } from "./SyncStrategy";
import ClientEngine from "../ClientEngine";

export default class InterpolateStrategy extends SyncStrategy {
    constructor(clientEngine: ClientEngine, inputOptions: SyncStrategyOptions);

    /** apply a new sync */
    applySync(sync: object, required: boolean): string;
}