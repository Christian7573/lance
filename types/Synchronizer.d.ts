import InterpolateStrategy from './syncStrategies/InterpolateStrategy';
import ExtrapolateStrategy from './syncStrategies/ExtrapolateStrategy';
import FrameSyncStrategy from './syncStrategies/FrameSyncStrategy';
import ClientEngine from "./ClientEngine";

export interface SynchronizerOptions {

}

export default class Synchronizer {
    constructor(clientEngine: ClientEngine, options: SynchronizerOptions);
}