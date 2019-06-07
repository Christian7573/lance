import GameObject, { GameObjectOptions } from "./GameObject";
import GameEngine from "../GameEngine";
import TwoVector from "./TwoVector";

export interface DynamicObjectProps {
    /**
    * Creates an instance of a dynamic object.
    * NOTE: all subclasses of this class must comply with this constructor signature.
    *       This is required because the engine will create temporary instances when
    *       syncs arrive on the clients.
    * @param {GameEngine} gameEngine - the gameEngine this object will be used in
    * @param {Object} options - options for the new object. See {@link GameObject}
    * @param {Object} props - properties to be set in the new object
    * @param {TwoVector} props.position - position vector
    * @param {TwoVector} props.velocity - velocity vector
    * @param {Number} props.height - object height
    * @param {Number} props.width - object width
    */
    /** Position vector */
    position?: TwoVector;
    /** Velocity vector */
    velocity?: TwoVector;
    /** Height */
    height?: number;
    /** Width */
    width?: number;
}

/**
 * DynamicObject is the base class of the game's objects, for games which
 * rely on SimplePhysicsEngine.  It defines the
 * base object which can move around in the game world.  The
 * extensions of this object (the subclasses)
 * will be periodically synchronized from the server to every client.
 *
 * The dynamic objects have pseudo-physical properties, which
 * allow the client to extrapolate the position
 * of dynamic objects in-between server updates.
 */
export default class DynamicObject extends GameObject {
    /**
    * The netScheme is a dictionary of attributes in this game
    * object.  The attributes listed in the netScheme are those exact
    * attributes which will be serialized and sent from the server
    * to each client on every server update.
    * The netScheme member is implemented as a getter.
    *
    * You may choose not to implement this method, in which
    * case your object only transmits the default attributes
    * which are already part of {@link DynamicObject}.
    * But if you choose to add more attributes, make sure
    * the return value includes the netScheme of the super class.
    *
    * @memberof DynamicObject
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
    * Creates an instance of a dynamic object.
    * NOTE: all subclasses of this class must comply with this constructor signature.
    *       This is required because the engine will create temporary instances when
    *       syncs arrive on the clients.
    * @param {GameEngine} gameEngine - the gameEngine this object will be used in
    * @param {Object} options - options for the new object. See {@link GameObject}
    * @param {Object} props - properties to be set in the new object
    * @param {TwoVector} props.position - position vector
    * @param {TwoVector} props.velocity - velocity vector
    * @param {Number} props.height - object height
    * @param {Number} props.width - object width
    */
    constructor(gameEngine: GameEngine, options: GameObjectOptions, props: object);

    /** The id of the player who created this object */
    playerId: number;
    bendingIncrements: number;
    position: TwoVector;
    velocity: TwoVector;
    /** Object width for collision detection purposes. Default is 1 */
    width: number;
    /** Object height for collision detection purposes. Default is 1 */
    height: number;
    /** Determine if the object is static (i.e. it never moves, like a wall). The value 0 implies the object is dynamic.  Default is 0 (dynamic). */
    isStatic: boolean;
    /** The friction coefficient. Velocity is multiplied by this for each step. Default is (1,1)*/
    friction: TwoVector;
    /** Object orientation angle in degrees */
    angle: number;

    readonly x: number;
    readonly y: number;

    /**
     * Formatted textual description of the dynamic object.
     * The output of this method is used to describe each instance in the traces,
     * which significantly helps in debugging.
     *
     * @return {String} description - a string describing the DynamicObject
     */
    toString(): string;

    /**
     * Each object class can define its own bending overrides.
     * return an object which can include attributes: position, velocity,
     * and angle.  In each case, you can specify a min value, max
     * value, and a percent value.
     */
    readonly bending: object;

    /**
    * turn object clock-wise
    * @param {Number} deltaAngle - the angle to turn, in degrees
    * @return {DynamicObject} return this object
    */
    turnRight(deltaAngle: number): DynamicObject;

    /**
    * turn object counter-clock-wise
    * @param {Number} deltaAngle - the angle to turn, in degrees
    * @return {DynamicObject} return this object
    */
    turnLeft(deltaAngle: number): DynamicObject;

    /**
    * accelerate along the direction that the object is facing
    * @param {Number} acceleration - the acceleration
    * @return {DynamicObject} return this object
    */
    accelerate(acceleration: number): DynamicObject;

    /**
     * Formatted textual description of the game object's current bending properties.
     * @return {String} description - a string description
     */
    bendingToString(): string;

    /**
    * The maximum velocity allowed.  If returns null then ignored.
    */
    readonly maxSpeed: number;

    /**
    * Copy the netscheme variables from another DynamicObject
    * This is used by the synchronizer to create temporary objects, and must be implemented by all sub-classes as well.
    * @param {DynamicObject} other DynamicObject
    */
    syncTo(other: GameObject): void;

    //
    bendToCurrent(original, percent, worldSettings, isLocal, increments);
    applyIncrementalBending(stepDesc: any);

    getAABB(): { min: [number, number], max: [number, number] };

    /**
    * Determine if this object will collide with another object.
    * Only applicable on "bruteForce" physics engine.
    * @param {DynamicObject} other DynamicObject
    * @return {Boolean} true if the two objects collide
    */
    collidesWith(other: DynamicObject): boolean;
}