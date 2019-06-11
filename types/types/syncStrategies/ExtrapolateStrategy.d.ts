import { default as SyncStrategy, SyncStrategyOptions } from "./SyncStrategy";
import ClientEngine from "../ClientEngine";

export default class ExtrapolateStrategy extends SyncStrategy {
    constructor(clientEngine: ClientEngine, inputOptions: SyncStrategyOptions);

    /** apply a new sync */
    applySync(sync: object, required: boolean): string;

    /** keep a buffer of inputs so that we can replay them on extrapolation */
    clientInputSave(inputEvent: InputEvent);

    /** clean up the input buffer */
    cleanRecentInputs(lastServerStep: object);

}