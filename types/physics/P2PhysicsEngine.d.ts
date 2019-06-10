import PhysicsEngine from "./PhysicsEngine";
import { DynamicObject } from "../package/clientExports";
import * as p2 from "p2";

/**
 * CannonPhysicsEngine is a three-dimensional lightweight physics engine
 */
export default class P2PhysicsEngine extends PhysicsEngine {
    world: p2.World;
    p2: typeof p2;

    /** entry point for a single step of the Simple Physics */
    step(dt: number, objectFilter: (DynamicObject) => boolean);

    /** Add a circle */
    addCircle(radius: number, mass: number): p2.Body;

    addBox(width: number, height: number, mass: number): p2.Body;

    removeObject(body: p2.Body);
}