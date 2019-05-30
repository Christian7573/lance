import lib_EventEmitter = require("event-emitter");

export interface GameEngineOptions {
    /** The trace level from 0 to 5.  Lower value traces more. */
    traceLevel: number;
    /** Client side only. Introduce an artificial delay on the client to better match the time it will occur on the server.  This value sets the number of steps the client will wait before applying the input locally */
    delayInputCount: number;
}

export interface GameEngineInputDescriptor {
    /** Describe the input (e.g. "up", "down", "fire") */
    input: string;
    /** Input identifier */
    messageIndex: number;
    /** The step on which this input occured */
    step: number
}

/**
 * The GameEngine contains the game logic.  Extend this class
 * to implement game mechanics.  The GameEngine derived
 * instance runs once on the server, where the final decisions
 * are always taken, and one instance will run on each client as well,
 * where the client emulates what it expects to be happening
 * on the server.
 *
 * The game engine's logic must listen to user inputs and
 * act on these inputs to change the game state.  For example,
 * the game engine listens to controller/keyboard inputs to infer
 * movement for the player/ship/first-person.  The game engine listens
 * to clicks, button-presses to infer firing, etc..
 *
 * Note that the game engine runs on both the server and on the
 * clients - but the server decisions always have the final say,
 * and therefore clients must resolve server updates which conflict
 * with client-side predictions.
 */
export default class GameEngine implements lib_EventEmitter.Emitter {
    emit(type: string, ...args: any[]): void;
    off: lib_EventEmitter.EmitterMethod;
    on: lib_EventEmitter.EmitterMethod;
    once: lib_EventEmitter.EmitterMethod;
    removeListener: lib_EventEmitter.EmitterMethod;

    /**
      * Create a game engine instance.  This needs to happen
      * once on the server, and once on each client.
      *
      * @param {GameEngineOptions} options - options object
      */
    constructor(options: GameEngineOptions);

    /** Client's player ID, as a number. If running on the client, this is set at runtime by the clientEngine */
    playerId: number;

    findLocalShadow(serverObj: object): object;

    initWorld(worldSettings: GameWorldSettings): void;
    /**
        * The worldSettings defines the game world constants, such
        * as width, height, depth, etc. such that all other classes
        * can reference these values.
        * @member {Object} worldSettings
        * @memberof GameEngine
        */
    worldSettings: GameWorldSettings;
    world: GameWorld;

    /**
      * Start the game. This method runs on both server
      * and client. Extending the start method is useful
      * for setting up the game's worldSettings attribute,
      * and registering methods on the event handler.
      */
    start(): void;

    /**
      * Single game step.
      *
      * @param {Boolean} isReenact - is this step a re-enactment of the past.
      * @param {Number} t - the current time (optional)
      * @param {Number} dt - elapsed time since last step was called.  (optional)
      * @param {Boolean} physicsOnly - do a physics step only, no game logic
      */
    step(isReenact: boolean, t: number, dt: number, physicsOnly: boolean): void;

    /**
     * Add object to the game world.
     * On the client side, the object may not be created, if the server copy
     * of this object is already in the game world.  This could happen when the client
     * is using delayed-input, and the RTT is very low.
     *
     * @param {GameObject} object - the object.
     * @return {GameObject} object - the final object.
     */
    addObjectToWorld(object: GameObject): GameObject;

    /**
     * Override this function to implement input handling.
     * This method will be called on the specific client where the
     * input was received, and will also be called on the server
     * when the input reaches the server.  The client does not call this
     * method directly, rather the client calls {@link ClientEngine#sendInput}
     * so that the input is sent to both server and client, and so that
     * the input is delayed artificially if so configured.
     *
     * The input is described by a short string, and is given an index.
     * The index is used internally to keep track of inputs which have already been applied
     * on the client during synchronization.  The input is also associated with
     * the ID of a player.
     *
     * @param {GameEngineInputDescriptor} inputDesc - input descriptor object
     * @param {Number} playerId - the player ID
     * @param {Boolean} isServer - indicate if this function is being called on the server side
     */
    processInput(inputDesc: GameEngineInputDescriptor, playerId: number, isServer: boolean): void;

    /**
     * Remove an object from the game world.
     *
     * @param {GameObject|String} objectId - the object or object ID
     */
    removeObjectFromWorld(objectId: GameObject | string): void;

    /**
     * Check if a given object is owned by the player on this client
     *
     * @param {GameObject} object the game object to check
     * @return {Boolean} true if the game object is owned by the player on this client
     */
    isOwnedByPlayer(object: GameObject): boolean;

    /**
     * Register Game Object Classes
     *
     * @example
     * registerClasses(serializer) {
     *   serializer.registerClass(require('../common/Paddle'));
     *   serializer.registerClass(require('../common/Ball'));
     * }
     *
     * @param {Serializer} serializer - the serializer
     */
    registerClasses(serializer: Serializer): void;

    /**
     * Decide whether the player game is over by returning an Object, need to be implemented
     *
     * @return {Object} truthful if the game is over for the player and the object is returned as GameOver data
     */
    getPlayerGameOverResult(): object;
}