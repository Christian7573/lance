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

    add(time: number, callback: Function, thisContext: any, args: any[]): TimerEvent;]

    destroy(id: number);
}