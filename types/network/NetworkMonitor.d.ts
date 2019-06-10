import { Emitter } from "event-emitter";
import ServerEngine from "../ServerEngine";
import ClientEngine from "../ClientEngine";

/**
 * Measures network performance between the client and the server
 * Represents both the client and server portions of NetworkMonitor
 */
export default class NetworkMonitor implements Emitter {
    emit(type: string, ...args: any[]): void;
    off: import("event-emitter").EmitterMethod;
    on: import("event-emitter").EmitterMethod;
    once: import("event-emitter").EmitterMethod;

    server?: ServerEngine;
    gameName: string;

    /** client */
    registerClient(clientEngine: ClientEngine);

    sendRTTQuery(): void;

    onReceivedRTTQuery(queryId: number): void;

    /** server */
    registerPlayerOnServer(socket: SocketIO.Socket): void;

    respondToRTTQuery(socket: SocketIO.Socket, queryId: number): void;
}