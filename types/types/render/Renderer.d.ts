import ClientEngine from "../ClientEngine";
import GameEngine from "../GameEngine";

/**
 * The Renderer is the component which must *draw* the game on the client.
 * It will be instantiated once on each client, and must implement the draw
 * method.  The draw method will be invoked on every iteration of the browser's
 * render loop.
 */
export default class Renderer {
    static getInstance(): Renderer;

    /**
    * Constructor of the Renderer singleton.
    * @param {GameEngine} gameEngine - Reference to the GameEngine instance.
    * @param {ClientEngine} clientEngine - Reference to the ClientEngine instance.
    */
   constructor(gameEngine: GameEngine, clientEngine: ClientEngine);
   gameEngine: GameEngine;
   clientEngine: ClientEngine;

   /**
     * Initialize the renderer.
     * @return {Promise} Resolves when renderer is ready.
    */
   init(): Promise<void>;

   reportSlowFrameRate();

   /**
     * The main draw function.  This method is called at high frequency,
     * at the rate of the render loop.  Typically this is 60Hz, in WebVR 90Hz.
     * If the client engine has been configured to render-schedule, then this
     * method must call the clientEngine's step method.
     *
     * @param {Number} t - current time (only required in render-schedule mode)
     * @param {Number} dt - time elapsed since last draw
     */
    draw(t: number, dt: number): void;

    /**
     * The main draw function.  This method is called at high frequency,
     * at the rate of the render loop.  Typically this is 60Hz, in WebVR 90Hz.
     *
     * @param {Number} t - current time
     * @param {Number} dt - time elapsed since last draw
     */
    runClientStep(t: number, dt: number): void;

    /**
     * Handle the addition of a new object to the world.
     * @param {Object} obj - The object to be added.
     */
    addObject(obj: object): void;

    /**
     * Handle the removal of an old object from the world.
     * @param {Object} obj - The object to be removed.
     */
    removeObject(obj: object): void;

    /**
     * Called when clientEngine has stopped, time to clean up
     */
    stop(): void;
}