import PhysicsEngine from "./PhysicsEngine";

/**
 * CannonPhysicsEngine is a three-dimensional lightweight physics engine
 */
export default class CannonPhysicsEngine extends PhysicsEngine {
    world: CANNON.World;
    CANNON: typeof CANNON;

    /** entry point for a single step of the Simple Physics  */
    step(dt: number, objectFilter: Function): void;

    addSphere(radius: number, mass: number): CANNON.Body;

    addBox(x: number, y: number, z: number, mass: number, friction: number): CANNON.Body;

    addCylinder(radiusTop: number, radiusBottom: number, height: number, numSegments: number, mass: number): CANNON.Body;

    removeObject(body: CANNON.Body): void;
}