/// <reference types="socket.io" />
import GameEngine from "./GameEngine";

export interface ServerEngineOptions {
    /** Number of steps per second */
    stepRate?: number;
    /** Number of steps in each update (sync) */
    updateRate?: number;
    /** Rate at which full-syncs are sent, in step count */
    fullSyncRate?: number;
    /** Path where traces should go */
    tracesPath?: string;
    /** Should ping player connections to lance.gg */
    countConnections?: boolean;
    /** Should send update immeadieatly when new object is created */
    updateOnObjectCreation?: boolean;
    /** Number of seconds after which a player is automatically disconnected if no input is recieved. Set to 0 for no timeout */
    timeoutInterval: number;
}

/**
 * ServerEngine is the main server-side singleton code.
 * Extend this class with your own server-side logic, and
 * start a single instance.
 *
 * This class should not be used to contain the actual
 * game logic.  That belongs in the GameEngine class, where the mechanics
 * of the gameplay are actually implemented.
 * The ServerEngine singleton is typically a lightweight
 * implementation, logging gameplay statistics and registering
 * user activity and user data.
 *
 * The base class implementation is responsible for starting
 * the server, initiating each game step, accepting new
 * connections and dis-connections, emitting periodic game-state
 * updates, and capturing remote user inputs.
 */
export default class ServerEngine {
    /**
     * create a ServerEngine instance
     *
     * @param {SocketIO.Server} io - the SocketIO server
     * @param {GameEngine} gameEngine - instance of GameEngine
     * @param {ServerEngineOptions} options - server options
     */
    constructor(io: SocketIO.Server, gameEngine: GameEngine, options: ServerEngineOptions);

    options: ServerEngineOptions;
    io: SocketIO.Server;
    serializer: Serializer;
    gameEngine: GameEngine;
    networkTransmitter: NetworkTransmitter;
    networkMonitor: NetworkMonitor;

    defaultRoomName: string;
    rooms: object;
    connectedPlayers: object;
    playerInputQueues: object;
    objMemory: object;

    /** Start the server engine */
    start(): void;

    schedule: Scheduler;

    /** Every step starts here */
    step(): void;

    serverTime: number;

    syncStateToClients(roomName: string): void;

    /** create a serialized package of the game world */
    serializeUpdate(roomName: string, options: object): object;

    /**
     * Create a room
     *
     * There is a default room called "/lobby".  All newly created players
     * and objects are assigned to the default room.  When the server sends
     * periodic syncs to the players, each player is only sent those objects
     * which are present in his room.
     *
     * @param {String} roomName - the new room name
     */
    createRoom(roomName: string): void;

    /**
     * Assign an object to a room
     *
     * @param {Object} obj - the object to move
     * @param {String} roomName - the target room
     */
    assignObjectToRoom(obj: object, roomName: string): void;

    /**
     * Assign a player to a room
     *
     * @param {Number} playerId - the playerId
     * @param {String} roomName - the target room
     */
    assignPlayerToRoom(playerId: number, roomName: string);

    /** Handle the object creation */
    onObjectAdded(obj: object): void;

    /** handle the object creation */
    onObjectDestroyed(obj): void;

    getPlayerId(socket: SocketIO.Socket): number;

    /** handle new player connection */
    onPlayerConnected(socket: SocketIO.Socket): void;

    /** handle player timeout */
    onPlayerTimeout(socket: SocketIO.Socket): void;

    /** handle player dis-connection */
    onPlayerDisconnected(socketId: number, playerId: number): void;

    /** resets the idle timeout for a given player  */
    resetIdleTimeout(socket: SocketIO.Socket): void;

    /**
     * add an input to the input-queue for the specific player
     * each queue is key'd by step, because there may be multiple inputs
     * per step */
    queueInputForPlayer(data: object, playerId: number): void;

    /** an input has been received from a client, queue it for next step */
    onReceivedInput(data, socket): void;

    /**
     * Report game status
     * This method is only relevant if the game uses MatchMaker functionality.
     * This method must return the game status.
     *
     * @return {String} Stringified game status object.
     */
    gameStatus(): string;
}