export interface TraceOptions {
    traceLevel: number;
}

/**
 * Tracing Services.
 * Use the trace functions to trace game state.  Turn on tracing by
 * specifying the minimum trace level which should be recorded.  For
 * example, setting traceLevel to Trace.TRACE_INFO will cause info,
 * warn, and error traces to be recorded.
 */
export default class Trace {
    constructor(options: TraceOptions);

    options: TraceOptions;
    traceBuffer: object[];
    step: string;

    /** Include all trace levels */
    static readonly TRACE_ALL: 0;
    /** Include debug traces and higher */
    static readonly TRACE_DEBUG: 1;
    /** Include info traces and higher */
    static readonly TRACE_INFO: 2;
    /** Include warn traces and higher */
    static readonly TRACE_WARN: 3;
    /** Include error traces and higher */
    static readonly TRACE_ERROR: 4;
    /** Disable all tracing */
    static readonly TRACE_NONE: 1000;

    trace(level: number, dataCB: () => any);

    /** What in tarnation does this do */
    rotate(): any[];

    readonly length: number;

    setStep(s: string);
}