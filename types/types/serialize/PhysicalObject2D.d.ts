import GameObject, { GameObjectOptions } from "./GameObject";
import GameEngine from "../GameEngine";
import TwoVector from "./TwoVector";

export interface PhysicalObject2DProps {
    /** Position vector */
    position?: TwoVector;
    /** Velocity vector */
    velocity?: TwoVector;
    /** Angle */
    angle: number;
    /** Mass */
    mass: number;
    /** Angular velocity */
    angularVelocity: number;
}

/**
 * The PhysicalObject2D is the base class for physical game objects in 2D Physics
 */
export default class PhysicalObject2D extends GameObject {
    /**
    * The netScheme is a dictionary of attributes in this game
    * object.  The attributes listed in the netScheme are those exact
    * attributes which will be serialized and sent from the server
    * to each client on every server update.
    * The netScheme member is implemented as a getter.
    *
    * You may choose not to implement this method, in which
    * case your object only transmits the default attributes
    * which are already part of {@link PhysicalObject2D}.
    * But if you choose to add more attributes, make sure
    * the return value includes the netScheme of the super class.
    *
    * @memberof PhysicalObject2D
    * @member {Object} netScheme
    * @example
    *     static get netScheme() {
        *       return Object.assign({
        *           mojo: { type: BaseTypes.TYPES.UINT8 },
        *         }, super.netScheme);
        *     }
        */
    static readonly netScheme: object;

    /**
    * Creates an instance of a physical object.
    * Override to provide starting values for position, velocity, angle and angular velocity.
    * NOTE: all subclasses of this class must comply with this constructor signature.
    *       This is required because the engine will create temporary instances when
    *       syncs arrive on the clients.
    * @param {GameEngine} gameEngine - the gameEngine this object will be used in
    * @param {GameObjectOptions} options - options for the new object. See {@link GameObject}
    * @param {PhysicalObject2DProps} props - properties to be set in the new object
    */
    constructor(gameEngine: GameEngine, options: GameObjectOptions, props: PhysicalObject2DProps);

    playerId: number;
    bendingIncrements: number;
    position: TwoVector;
    velocity: TwoVector;
    angle: number;
    angularVelocity: number;
    mass: number;
    class: typeof PhysicalObject2D;

    /**
     * Called after the object is added to to the game world.
     * This is the right place to add renderer sub-objects, physics sub-objects
     * and any other resources that should be created
     */
    onAddToWorld(): any;

    /**
     * Formatted textual description of the dynamic object.
     * The output of this method is used to describe each instance in the traces,
     * which significantly helps in debugging.
     *
     * @return {String} description - a string describing the PhysicalObject2D
     */
    toString(): string;

    /**
     * Each object class can define its own bending overrides.
     * return an object which can include attributes: position, velocity,
     * angle, and angularVelocity.  In each case, you can specify a min value, max
     * value, and a percent value.
     *
     * @return {Object} bending - an object with bending paramters
     */
    readonly bending: object;

    /** Display object's physical attributes as a string for debugging purposes mostly */
    bendingToString(): string;

    /**derive and save the bending increment parameters:
     *- bendingPositionDelta
     *- bendingVelocityDelta
     *- bendingAVDelta
     *- bendingAngleDelta
     *these can later be used to "bend" incrementally from the state described
     *by "original" to the state described by "self" */
    bendToCurrent(original: object, percent: number, worldSettings: object, isLocal: boolean, increments: number);

    syncTo(other: GameObject, options: object);

    /** update position, angle, angular velocity, and velocity from new physical state. */
    refreshFromPhysics();

    /** generic vector copy.  We need this because different
    * physics engines have different implementations.
    * TODO: Better implementation: the physics engine implementor
    * should define copyFromLanceVector and copyToLanceVector */
    copyVector(source: TwoVector, target: TwoVector): void;

    /** update position, angle, angular velocity, and velocity from new game state. */
    refreshToPhysics(): void;

    /** apply one increment of bending */
    applyIncrementalBending(stepDesc: object);

    // interpolate implementation
    interpolate(nextObj: PhysicalObject2D, percent: number): void;
}