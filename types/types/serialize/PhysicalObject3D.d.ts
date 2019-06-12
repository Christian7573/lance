import GameObject, { GameObjectOptions } from "./GameObject";
import GameEngine, { GameEngineOptions } from "../GameEngine";
import ThreeVector from "./ThreeVector";
import Quaternion from "./Quaternion";

export interface PhysicalObject3DProps {
   /** Position vector */
   position?: ThreeVector;
   /** Velocity vector */
   velocity?: ThreeVector;
   /** Quaternion */
   quaternion?: Quaternion;
   /** 3-vector representation of angular velocity */
   angularVelocity?: ThreeVector;
}

/**
 * The PhysicalObject3D is the base class for physical game objects
 */
export default class PhysicalObject3D extends GameObject {
    /**
    * The netScheme is a dictionary of attributes in this game
    * object.  The attributes listed in the netScheme are those exact
    * attributes which will be serialized and sent from the server
    * to each client on every server update.
    * The netScheme member is implemented as a getter.
    *
    * You may choose not to implement this method, in which
    * case your object only transmits the default attributes
    * which are already part of {@link PhysicalObject3D}.
    * But if you choose to add more attributes, make sure
    * the return value includes the netScheme of the super class.
    *
    * @memberof PhysicalObject3D
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
    * Override to provide starting values for position, velocity, quaternion and angular velocity.
    * NOTE: all subclasses of this class must comply with this constructor signature.
    *       This is required because the engine will create temporary instances when
    *       syncs arrive on the clients.
    * @param {GameEngine} gameEngine - the gameEngine this object will be used in
    * @param {GameObjectOptions} options - options for the new object. See {@link GameObject}
    * @param {PhysicalObject3DProps} props - properties to be set in the new object
    */
    constructor(gameEngine: GameEngine, options: GameEngineOptions, props: PhysicalObject3DProps);

    playerId: number;
    bendingIncrements: number;
    position: ThreeVector;
    velocity: ThreeVector;
    quaternion: Quaternion;
    angularVelocity: ThreeVector;
    class: typeof PhysicalObject3D;

    /**
     * Formatted textual description of the dynamic object.
     * The output of this method is used to describe each instance in the traces,
     * which significantly helps in debugging.
     *
     * @return {String} description - a string describing the PhysicalObject3D
     */
    toString(): string;

    /** Display object's physical attributes as a string for debugging purposes mostly */
    bendingToString(): string;

    /** derive and save the bending increment parameters:
    * - bendingPositionDelta
    * - bendingAVDelta
    * - bendingQuaternionDelta
    * these can later be used to "bend" incrementally from the state described
    * by "original" to the state described by "self" */
    bendToCurrent(original: GameObject, percent: number, worldSettings: object, isLocal: boolean, increments: number): void;

    syncTo(other: GameObject, options: object);

    /** update position, angle, angular velocity, and velocity from new physical state. */
    refreshFromPhysics();

    /** update position, angle, angular velocity, and velocity to new physical state. */
    refreshToPhysics();

    /** apply one increment of bending */
    applyIncrementalBending(stepDesc: object): void;

    /** interpolate implementation */
    interpolate(nextObj: PhysicalObject3D, percent: number);
}