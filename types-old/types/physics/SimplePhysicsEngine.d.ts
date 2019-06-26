import PhysicsEngine, { PhysicsEngineOptions } from "./PhysicsEngine";
import TwoVector from "../serialize/TwoVector";
import DynamicObject from "../serialize/DynamicObject";
import GameEngine from "../GameEngine";

export interface SimplePhysicsCollisionOptions {
    /** Can be set to "HSHG" or "bruteForce". Default is Brute-Force collision detection. */
    type: "HSHG" | "bruteForce";
    /** For bture force, this can be set for a simple distance-based (raduis) collision detection */
    colllisionDistance?: number;
    /** For brute force collision, colliding objects should be moved apart */
    autoResolve?: boolean;
}
export interface SimplePhysicsEngineOptions extends PhysicsEngineOptions {
    /** Collision options */
    collisions?: SimplePhysicsCollisionOptions;
    /** TwoVector instance which describes gravity, which will be added to the velocity of all objects at every step */
    gravity?: TwoVector;
}

/**
 * SimplePhysicsEngine is a pseudo-physics engine which works with
 * objects of class DynamicObject.
 * The Simple Physics Engine is a "fake" physics engine, which is more
 * appropriate for arcade games, and it is sometimes referred to as "arcade"
 * physics. For example if a character is standing at the edge of a platform,
 * with only one foot on the platform, it won't fall over. This is a desired
 * game behaviour in platformer games.
 */
export default class SimplePhysicsEngine extends PhysicsEngine {
    /**
    * Creates an instance of the Simple Physics Engine.
    * @param {SimplePhysicsEngineOptions} options - physics options
    */
    constructor(options: SimplePhysicsEngineOptions);

    /** Gravity affecting all objects */
    gravity: TwoVector;

    collisionDetection: SimpleCollisionDetection;

    /** A single object advances, based on:
      * isRotatingRight, isRotatingLeft, isAccelerating, current velocity
      * wrap-around the world if necessary */
    objectStep(o: DynamicObject, dt: number);

    step(dt: number, objectFilter: Function);
}

export interface SimpleCollisionInitOptions {
    gameEngine: GameEngine;
}
export interface SimpleCollisionDetection {
    init(options: SimpleCollisionInitOptions);
    detect(): void;
}