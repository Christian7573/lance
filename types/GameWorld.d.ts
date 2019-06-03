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
}

export default LanceGG.GameWorld;