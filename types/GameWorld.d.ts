
export interface GameWorldQuery {
    /** Object id */
    id?: number;
    /** Player id */
    playerId?: number;
    /** Instance type */
    instanceType: { new (...args): any }
    /** An array of component names */
    componentNames: string[];
    /** Only return a single object. Default: false */
    returnSingle: boolean;
}

/**
 * This class represents an instance of the game world,
 * where all data pertaining to the current state of the
 * world is saved.
 */
export class GameWorld {
    stepCount: number;
    objects: object;
    playerCount: number;
    idCount: number;

    /**
     * Constructor of the World instance
     */
    constructor();
    
    /**
     * Gets a new, fresh and unused id that can be used for a new object
     * @return {Number} the new id
     */
    getNewId(): number;

    /**
     * Returns all the game world objects which match a criteria
     * @param {GameWorldQuery} query The query object
     * @returns {Array | GameObject} All game objects which match all the query parameters, or the first match if returnSingle was specified
     */
    queryObjects(query: GameWorldQuery & { returnSingle: false }): GameObject[];
    queryObjects(query: GameWorldQuery & { returnSingle: true }): GameObject;

    /**
     * Returns The first game object encountered which matches a criteria.
     * Syntactic sugar for {@link queryObjects} with `returnSingle: true`
     * @param {GameWorldQuery} query The query object
     * @returns {GameObject}
     */
    queryObject(query: GameWorldQuery): GameObject;
    
    /**
     * Add an object to the game world
     * @param {GameObject} object object to add
     */
    addObject(object: GameObject): void;

    /**
     * Remove an object from the game world
     * @param {number} id id of the object to remove
     */
    removeObject(id: number): void;

    /**
     * World object iterator.
     * Invoke callback(objId, obj) for each object
     *
     * @param {function} callback function receives id and object. If callback returns false, the iteration will cease
     */
    forEachObject(callback: (number, GameObject) => any): void;
}

export default GameWorld;