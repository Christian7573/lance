import EventEmitter = require("event-emitter");

export interface SchedulerOptions {
    /** The function to be called */
    tick?: () => any;
    /** The number of milliseconds between each invocation, not including the function's execution time */
    period?: number;
    /** Number of milliseconds to add when delaying or hurrying th eexecution */
    delay?: number;
}

export default class Scheduler implements EventEmitter.Emitter {
    /**
     * schedule a function to be called
     *
     * @param {SchedulerOptions} options the options
     */
    constructor(options: SchedulerOptions);

    emit(type: string, ...args: any[]): void;
    off: EventEmitter.EmitterMethod;
    on: EventEmitter.EmitterMethod;
    once: EventEmitter.EmitterMethod;

    /** in same cases, setTimeout is ignored by the browser,
    * this is known to happen during the first 100ms of a touch event
    * on android chrome.  Double-check the game loop using requestAnimationFrame */
    nextTickChecker(): void;

    nextTick(): void;
    callTick(): void;

     /**
     * start the schedule
     * @return {Scheduler} returns this scheduler instance
     */
    start(): Scheduler;

    /**
     * delay next execution
     */
    delayTick(): void;

    /**
     * hurry the next execution
     */
    hurryTick(): void;
}