///<reference types="socket.io-client" />

import io = require("socket.io-client");

export type ClientEngineScheduleMode = "render-schedule" | "fixed";
export type ClientEngineSyncMode = "interpolate" | "extrapolate" | "frameSync";

export interface ClientEngineSyncOptions {
    /** Chosen sync option, can be interpolate, extrapolate, or frameSync */
    sync: ClientEngineSyncMode;
    /** Amount (0 to 1.0) of bending twards origional client position, after each sync, for local objects */
    localObjBending: number;
    /** Amount (0 to 1.0) of bending towards origional client position, after each sync, for remote objects */
    remoteObjBending: number;
}

export interface ClientEngineOptions {
   /** Prints logs to console */
   verbose: boolean;
   /** If true, the client will automatically attempt connect to server. */
   autoConnect: boolean;
   /** If true, the clinet will never try to connect to a server. */
   standaloneMode: boolean;
   /** If set, inputs will be delayed by this many steps before they are actually applied on the client. */
   delayInputCount: number;
   /** Health check message interval (millisec). Default is 1000. */
   healthCheckInterval: number;
   /** Health check RTT calculation sample size. Default is 10. */
   healthCheckRTTSample: number;
   /** An object describing the synchronization method. If not set, will be set to extrapolate, with local object bending set to 0.0 and remote object bending set to 0.6. If the query-string parameter "sync" is defined, then that value is passed to this object's sync attribute. */
   syncOptions: ClientEngineSyncOptions;
   /** When set to "render-schedule" the game step scheduling is controlled by the renderer and step time is variable.  When set to "fixed" the game step is run independently with a fixed step time. Default is "render-schedule". */
   scheduler: ClientEngineScheduleMode;
   /** Socket server url */
   serverUrl: string;
}

export default class ClientEngine {
    /**
      * Create a client engine instance.
      *
      * @param {GameEngine} gameEngine - a game engine
      * @param {ClientEngineOptions} inputOptions - options object
      * @param {Renderer} Renderer - the Renderer class constructor
    */
    constructor(gameEngine: GameEngine, inputOptions: ClientEngineOptions, renderer: Renderer);

    /** Configure the Synchronizer singleton */
    configureSynchronization(): void;

    /**
     * Makes a connection to the game server.  Extend this method if you want to add additional
     * logic on every connection. Call the super-class connect first, and return a promise which
     * executes when the super-class promise completes.
     *
     * @param {lib_socketio_client.ConnectOpts} [options] additional socket.io options
     * @return {Promise} Resolved when the connection is made to the server
     */
    
    connect(options: SocketIOClient.ConnectOpts): Promise<void>;

    /**
     * Start the client engine, setting up the game loop, rendering loop and renderer.
     *
     * @return {Promise} Resolves once the Renderer has been initialized, and the game is ready to connect
     */
    start(): Promise<void>;

    /** Disconnect from game server */
    disconnect(): void;

    /** Check if client is too far ahead (leading) or too far behind (lagging) */
    checkDrift(checkType: string): void;

    /** Execute a single game step. This is normally called by the Renderer at each draw event. */
    step(t: number, dt: number, physicsOnly: boolean): void;

    /** Apply user input on the client side */
    doInputLocal(message: MessageEvent): void;

    /** Apply user inputs which have been queued in order to create an artificial delay */
    applyDelayedInputs(): void;

    /**
     * This function should be called by the client whenever a user input
     * occurs.  This function will emit the input event,
     * forward the input to the client's game engine (with a delay if
     * so configured) and will transmit the input to the server as well.
     *
     * This function can be called by the extended client engine class,
     * typically at the beginning of client-side step processing (see event client__preStep)
     *
     * @param {String} input - string representing the input
     * @param {Object} inputOptions - options for the input
     */
    sendInput(input: string, inputOptions: object): void;

    /** Handle a message that has been received from the server */
    handleInboundMessage(syncData: object): void;

    /** Emit an input to the authoritative server */
    handleOutboundInput(): void;
}