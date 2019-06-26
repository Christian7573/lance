import GameEngine from "../../GameEngine";
import DynamicObject from "../../serialize/DynamicObject";
import { SimpleCollisionDetection, SimpleCollisionInitOptions } from "../SimplePhysicsEngine";

export interface BruteForceCollisionDetectionOptions {
    autoResolve?: boolean;
}

export default class BruteForceCollisionDetection implements SimpleCollisionDetection {
    constructor(options: BruteForceCollisionDetectionOptions);
    collisionPairs: object;

    init(options: SimpleCollisionInitOptions);

    findCollision(obj1: DynamicObject, obj2: DynamicObject): boolean;

    /** Check if pair (id1, id2) have collided */
    checkPair(id1: number, id2: number): boolean;
    
    /** Detect by checking all pairs */
    detect(): void;
}