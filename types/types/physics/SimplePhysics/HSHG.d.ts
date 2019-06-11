import DynamicObject from "../../serialize/DynamicObject";

export interface typeof_hshg {
    new (): instanceof_hshg;
    update_RECOMPUTE: () => void;
    update_REMOVEALL: () => void;
}
export interface instanceof_hshg {
    addObject(obj: DynamicObject): void;
    removeObject(obj: DynamicObject): void;
    update(): void;
    queryForCollisionPairs(broadOverlapTestCallback: (objA: DynamicObject, objB: DynamicObject) => boolean): [DynamicObject, DynamicObject][];
    MAX_OBJECT_CELL_DENSITY: number;
    /** Default: 256 = 16x16 */
    INITIAL_GRID_LENGTH: number;
    HIERARCHY_FACTOR: number;
    HIERARCHY_FACTOR_SQRT: number;
    UPDATE_METHOD: () => void;
}

declare const HSHG: typeof_hshg;

export { HSHG as default };