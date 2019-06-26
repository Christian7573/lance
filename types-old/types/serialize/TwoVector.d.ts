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

export default class TwoVector extends Serializable<TwoVector> {
    static readonly netScheme: object;

    /**
    * Creates an instance of a TwoVector.
    * @param {Number} x - first value
    * @param {Number} y - second value
    */
   constructor(x: number, y: number);

   x: number;
   y: number;

   /**
     * Formatted textual description of the TwoVector.
     * @return {String} description
     */
    toString(): string;

    /**
     * Set TwoVector values
     *
     * @param {Number} x x-value
     * @param {Number} y y-value
     * @return {TwoVector} returns self
     */
    set(x: number, y: number): TwoVector;

    /** Multiply this vector by another vector
     * @param {TwoVector} other the other vector
     * @return {TwoVector} returns self
     */
    multiply(other: TwoVector): TwoVector;

    /**
     * Multiply this TwoVector by a scalar
     *
     * @param {Number} s the scale
     * @return {TwoVector} returns self
     */
    multiplyScalar(s: number): TwoVector;

    /**
     * Add other vector to this vector
     *
     * @param {TwoVector} other the other vector
     * @return {TwoVector} returns self
     */
    add(other: TwoVector): TwoVector;

    /**
     * Subtract other vector to this vector
     *
     * @param {TwoVector} other the other vector
     * @return {TwoVector} returns self
     */
    subtract(other: TwoVector): TwoVector

    /**
     * Get vector length (from the origin to the specified point)
     *
     * @return {Number} length of this vector
     */
    length(): number;

    /**
     * Normalize this vector, in-place
     *
     * @return {TwoVector} returns self
     */
    normalize(): TwoVector;

    /**
     * Copy values from another TwoVector into this TwoVector
     *
     * @param {TwoVector} sourceObj the other vector
     * @return {TwoVector} returns self
     */
    copy(sourceObj: TwoVector): TwoVector;
    
    /**
     * Create a clone of this vector
     *
     * @return {TwoVector} returns clone
     */
    clone(): TwoVector;

    /**
     * Apply in-place lerp (linear interpolation) to this TwoVector
     * towards another TwoVector
     * @param {TwoVector} target the target vector
     * @param {Number} p The percentage to interpolate
     * @return {TwoVector} returns self
     */
    lerp(target: TwoVector, p: number): TwoVector;

    /**
     * Get bending Delta Vector
     * towards another TwoVector
     * @param {TwoVector} target the target vector
     * @param {BendingOptions} options bending options
     * @return {TwoVector} returns new Incremental Vector
     */
    getBendingDelta(target: TwoVector, options: BendingOptions): TwoVector;
}