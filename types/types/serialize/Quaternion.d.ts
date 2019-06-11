import Serializable from "./Serializable";
import ThreeVector from "./ThreeVector";

export default class Quaternion extends Serializable<Quaternion> {
    static readonly netScheme: object;

    /**
    * Creates an instance of a Quaternion.
    * @param {Number} w - first value
    * @param {Number} x - second value
    * @param {Number} y - third value
    * @param {Number} z - fourth value
    */
    constructor(w: number, x: number, y: number, z: number);

    w: number;
    x: number;
    y: number;
    z: number;

    /**
     * Formatted textual description of the Quaternion.
     * @return {String} description
     */
    toString(): string;

    /**
     * copy values from another quaternion into this quaternion
     *
     * @param {Quaternion} sourceObj the quaternion to copy from
     * @return {Quaternion} returns self
     */
    copy(sourceObj: Quaternion): Quaternion;

    /**
     * set quaternion values
     *
     * @param {Number} w w-value
     * @param {Number} x x-value
     * @param {Number} y y-value
     * @param {Number} z z-value
     * @return {Quaternion} returns self
     */
    set(w: number, x: number, y: number, z: number): Quaternion;

    /**
     * return an axis-angle representation of this quaternion
     *
     * @return {Object} contains two attributes: axis (ThreeVector) and angle.
     */
    toAxisAngle(): { axis: ThreeVector, angle: number }

    normalize(): Quaternion;

    /**
     * set the values of this quaternion from an axis/angle representation
     *
     * @param {ThreeVector} axis The axis
     * @param {Number} angle angle in radians
     * @return {Quaternion} returns self
     */
    setFromAxisAngle(axis: ThreeVector, angle: number): Quaternion;

    /**
     * conjugate the quaternion, in-place
     *
     * @return {Quaternion} returns self
     */
    conjugate(): Quaternion;

    /**
     * multiply this quaternion by another, in-place
     *
     * @param {Quaternion} other The other quaternion
     * @return {Quaternion} returns self
     */
    multiply(other: Quaternion): Quaternion;

    /**
     * Apply in-place slerp (spherical linear interpolation) to this quaternion,
     * towards another quaternion.
     *
     * @param {Quaternion} target The target quaternion
     * @param {Number} bending The percentage to interpolate
     * @return {Quaternion} returns self
     */
    slerp(target: Quaternion, bending: number): Quaternion;
}