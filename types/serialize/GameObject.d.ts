import Serializable from "./Serializable";
import GameEngine from "../GameEngine";
import GameComponent from "./GameComponent";

export interface GameObjectOptions {
    /** Object ID */
    id?: number;
}

/**
 * GameObject is the base class of all game objects.
 * It is created only for the purpose of clearly defining the game
 * object interface.
 * Game developers will use one of the subclasses such as DynamicObject,
 * or PhysicalObject.
 */
export default class GameObject extends Serializable<GameObject> {
    static readonly netScheme: object;

    /**
    * Creates an instance of a game object.
    * @param {GameEngine} gameEngine - the gameEngine this object will be used in
    * @param {Object} options - options for instantiation of the GameObject
    * @param {Number} id - if set, the new instantiated object will be set to this id instead of being generated a new one. Use with caution!
    */
   constructor(gameEngine: GameEngine, options?: GameObjectOptions);
   gameEngine: GameEngine;
   /**
    * ID of this object's instance.
    * There are three cases of instance creation which can occur:
    * 1. In the normal case, the constructor is asked to assign an ID which is unique
    * across the entire game world, including the server and all the clients.
    * 2. In extrapolation mode, the client may have an object instance which does not
    * yet exist on the server, these objects are known as shadow objects.  Their IDs must
    * be allocated from a different range.
    * 3. Also, temporary objects are created on the client side each time a sync is received.
    * These are used for interpolation purposes and as bending targets of position, velocity,
    * angular velocity, and orientation.  In this case the id will be set to null.
    */
   id: number;

   /**
     * Called after the object is added to to the game world.
     * This is the right place to add renderer sub-objects, physics sub-objects
     * and any other resources that should be created
     * @param {GameEngine} gameEngine the game engine
     */
    onAddToWorld(gameEngine): any;

    /**
     * Called after the object is removed from game-world.
     * This is where renderer sub-objects and any other resources should be freed
     * @param {GameEngine} gameEngine the game engine
     */
    onRemoveFromWorld(gameEngine): any;

    /**
     * Formatted textual description of the game object.
     * @return {String} description - a string description
     */
    toString(): string;

    /**
     * Formatted textual description of the game object's current bending properties.
     * @return {String} description - a string description
     */
    bendingToString(): string;

    saveState(other: GameObject);

    /**
    * Bending is defined as the amount of error correction that will be applied
    * on the client side to a given object's physical attributes, incrementally,
    * by the time the next server broadcast is expected to arrive.
    *
    * When this percentage is 0.0, the client always ignores the server object's value.
    * When this percentage is 1.0, the server object's attributes will be applied in full.
    *
    * The GameObject bending attribute is implemented as a getter, and can provide
    * distinct values for position, velocity, angle, and angularVelocity.
    * And in each case, you can also provide overrides for local objects,
    * these attributes will be called, respectively, positionLocal, velocityLocal,
    * angleLocal, angularVelocityLocal.
    *
    * @example
    * get bending() {
        *   return {
        *     position: { percent: 1.0, min: 0.0 },
        *     velocity: { percent: 0.0, min: 0.0 },
        *     angularVelocity: { percent: 0.0 },
        *     angleLocal: { percent: 1.0 }
        *   }
        * };
        */
    readonly bending: object;

    // ¯\_(ツ)_/¯
    bendToCurrentState(bending, worldSettings, isLocal, bendingIncrements): void;
    bendToCurrent(original, bending, worldSettings, isLocal, bendingIncrements);

    /**
     * synchronize this object to the state of an other object, by copying all the netscheme variables.
     * This is used by the synchronizer to create temporary objects, and must be implemented by all sub-classes as well.
     * @param {GameObject} other the other object to synchronize to
     */
    syncTo<T extends GameObject>(other: T, ...args: any[]);

    /** copy physical attributes to physics sub-object */
    refreshToPhysics();

    /** copy physical attributes from physics sub-object */
    refreshFromPhysics();

    /** apply a single bending increment */
    applyIncrementalBending(...args: any[]): any ;

    /** clean up resources */
    destroy();

    addComponent(componentInstance: GameComponent);
    remoevComponent(componentName: string);

    /**
     * Check whether this game object has a certain component
     * @param {Object} componentClass the comp
     * @return {Boolean} true if the gameObject contains this component
     */
    hasComponent<T extends GameComponent>(componentClass: { new (gameEngine: GameEngine, options?: GameObjectOptions): T }): boolean;

    getComponent<T extends GameComponent>(componentClass: { new (gameEngine: GameEngine, options?: GameObjectOptions): T }): GameComponent;
}