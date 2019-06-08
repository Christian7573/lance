export default class MathUtils {
    /** Interpolate from start to end, advancing "percent" of the way */
    static interpolate(start: number, end: number, percent: number): number;
    /** Interpolate from start to end, advancing "percent" of the way
     * This returns the delta, aka the amount that needs to be added to `start`
     */
    static interpolateDelta(start: number, end: number, percent: number): number;
    /** interpolate from start to end, advancing "percent" of the way
    * and noting that the dimension wraps around {x >= wrapMin, x < wrapMax}
    * 
    * returns just the delta. i.e. the value that must be added to the start value */
    static interpolateDeltaWithWrapping(start: number, end: number, percent: number, wrapMin: number, wrapMax: number): number;
    /** Interpolate from start to end, advancing "percent" of the way
     * and noting that the dimension wraps around
     */
    static interpolateWithWrapping(start: number, end: number, percent: number, wrapMin: number, wrapMax: number): number;
}