import ClientEngine from "../ClientEngine";
import GameEngine from "../GameEngine";

export interface SyncStrategyOptions {

}

export default abstract class SyncStrategy {
    constructor(clientEngine: ClientEngine, inputOptions: SyncStrategyOptions);

    clientEngine: ClientEngine;
    gameEngine: GameEngine;
    options: SyncStrategyOptions;
    requiredSyncs: object[];
    SYNC_APPLIED: "SYNC_APPLIED";
    STEP_DRIFT_THRESHOLDS: {
        onServerSync: { MAX_LEAD: number, MAX_LAG: number },
        onEveryStep: { MAX_LEAD: number, MAX_LAG: number },
        clientReset: number
    }

    /** // collect a sync and its events
     * maintain a "lastSync" member which describes the last sync we received from
     * the server.  the lastSync object contains:
     *  - syncObjects: all events in the sync indexed by the id of the object involved
     *  - syncSteps: all events in the sync indexed by the step on which they occurred
     *  - objCount
     *  - eventCount
     *  - stepCount */
    collectSync(e): void;

    /** add an object to our world */
    addNewObject(objId: number, newObj: object, options: object): GameObject;

    /** sync to step, by applying bending, and applying the latest sync */
    syncStep(stepDesc: object): void;

    abstract applySync(sync: object, required: boolean): string;
}