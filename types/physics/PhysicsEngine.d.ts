import GameEngine from "../GameEngine";

export interface PhysicsEngineOptions {
    gameEngine: GameEngine;
}

/** The base Physics Engine class defines the expected interface
  * for all physics engines */
export default abstract class PhysicsEngine {

    constructor(options: PhysicsEngineOptions);
    options: PhysicsEngineOptions;
    gameEngine: GameEngine;

    /**
     * A single Physics step.
     *
     * @param {Number} dt - time elapsed since last step
     * @param {Function} objectFilter - a test function which filters which objects should move
     */
    abstract step(dt: number, objectFilter: Function);
}