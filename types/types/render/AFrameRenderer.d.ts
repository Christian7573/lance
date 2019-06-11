import Renderer from "./Renderer";
import GameEngine from "../GameEngine";
import ClientEngine from "../ClientEngine";

/**
 * The A-Frame Renderer
 */
export default class AFrameRenderer extends Renderer {
    /**
    * Constructor of the Renderer singleton.
    * @param {GameEngine} gameEngine - Reference to the GameEngine instance.
    * @param {ClientEngine} clientEngine - Reference to the ClientEngine instance.
    */
   constructor(gameEngine: GameEngine, clientEngine: ClientEngine);

   reportSlowFrameRate();

   /**
     * Initialize the renderer.
     * @return {Promise} Resolves when renderer is ready.
    */
   init(): Promise<void>;

   draw();

   tick(t: number, dt: number);
}