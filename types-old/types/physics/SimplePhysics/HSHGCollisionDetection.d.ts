import GameEngine from "../../GameEngine";
import { instanceof_hshg } from "./HSHG";
import DynamicObject from "../../serialize/DynamicObject";
import { SimpleCollisionDetection, SimpleCollisionInitOptions } from "../SimplePhysicsEngine";

export interface HSHGCollisionDetectionOptions {
    COLLISION_DISTANCE?: number;
}

export default class HSHGCollisionDetection implements SimpleCollisionDetection {
    constructor(options: HSHGCollisionDetectionOptions);

    gameEngine: GameEngine;
    grid: instanceof_hshg;
    previousCollisionPairs: object;
    stepCollidingPairs: object;

    init(options: SimpleCollisionInitOptions): void;
    detect(): void;

    /**
     * checks wheter two objects are currently colliding
     * @param {DynamicObject} o1 first object
     * @param {DynamicObject} o2 second object
     * @return {boolean} are the two objects colliding?
     */
    areObjectsColliding(obj1: DynamicObject, obj2: DynamicObject): boolean;
}