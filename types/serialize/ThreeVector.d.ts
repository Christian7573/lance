import Serializable from "./Serializable";

export interface BendingOptions {
    /** number of increments */
    increments?: number;
    /** the percentage to bend */
    percent?: number;
    /** No less than this value */
    min?: number;
    /** No more than this value */
    max?: number;
}

export default class ThreeVector extends Serializable<ThreeVector> {
    static readonly netScheme: object;

    /**
    * Creates an instance of a ThreeVector.
    * @param {Number} x - first value
    * @param {Number} y - second value
    * @param {Number} z - second value
    */
   constructor(x: number, y: number, z: number);

   x: number;
   y: number;
   z: number;

   /**
     * Formatted textual description of the ThreeVector.
     * @return {String} description
     */
    toString(): string;

    /**
     * Set ThreeVector values
     *
     * @param {Number} x x-value
     * @param {Number} y y-value
     * @return {ThreeVector} returns self
     */
    set(x: number, y: number): ThreeVector;

    /** Multiply this vector by another vector
     * @param {ThreeVector} other the other vector
     * @return {ThreeVector} returns self
     */
    multiply(other: ThreeVector): ThreeVector;

    /**
     * Multiply this ThreeVector by a scalar
     *
     * @param {Number} s the scale
     * @return {ThreeVector} returns self
     */
    multiplyScalar(s: number): ThreeVector;

    /**
     * Add other vector to this vector
     *
     * @param {ThreeVector} other the other vector
     * @return {ThreeVector} returns self
     */
    add(other: ThreeVector): ThreeVector;

    /**
     * Subtract other vector to this vector
     *
     * @param {ThreeVector} other the other vector
     * @return {ThreeVector} returns self
     */
    subtract(other: ThreeVector): ThreeVector

    /**
     * Get vector length (from the origin to the specified point)
     *
     * @return {Number} length of this vector
     */
    length(): number;

    /**
     * Normalize this vector, in-place
     *
     * @return {ThreeVector} returns self
     */
    normalize(): ThreeVector;

    /**
     * Copy values from another ThreeVector into this ThreeVector
     *
     * @param {ThreeVector} sourceObj the other vector
     * @return {ThreeVector} returns self
     */
    copy(sourceObj: ThreeVector): ThreeVector;
    
    /**
     * Create a clone of this vector
     *
     * @return {ThreeVector} returns clone
     */
    clone(): ThreeVector;

    /**
     * Apply in-place lerp (linear interpolation) to this ThreeVector
     * towards another ThreeVector
     * @param {ThreeVector} target the target vector
     * @param {Number} p The percentage to interpolate
     * @return {ThreeVector} returns self
     */
    lerp(target: ThreeVector, p: number): ThreeVector;

    /**
     * Get bending Delta Vector
     * towards another ThreeVector
     * @param {ThreeVector} target the target vector
     * @param {BendingOptions} options bending options
     * @return {ThreeVector} returns new Incremental Vector
     */
    getBendingDelta(target: ThreeVector, options: BendingOptions): ThreeVector;
}