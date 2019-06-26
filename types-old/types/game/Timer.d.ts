export default class Timer {
    constructor();

    currentTime: number;
    isActive: boolean;
    idCounter: number;
    events: object;

    play();

    tick();

    destroyEvent(eventId: string | number);

    loop(time: number, callback: Function): TimerEvent;

    add(time: number, callback: Function, thisContext: any, args: any[]): TimerEvent;

    destroy(id: number);
}

export type TimerEventType = "repeat" | "single";
export class TimerEvent {
    constructor(timer: Timer, type: string, time: TimerEventType, callback: Function, thisContext: any, args: any[]);

    id: number;
    timer: Timer;
    type: TimerEventType;
    time: number;
    callback: Function;
    startOffset: number;
    thisContext: any;
    args: any[];

    destroy();

    static TYPES: { repeat: "repeat", single: "single" }
}