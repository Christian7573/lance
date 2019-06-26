import Renderer from "../Renderer";
import GameEngine from "../../GameEngine";
import ClientEngine from "../../ClientEngine";
import GameObject from "../../serialize/GameObject";

/**
 * Pixi Renderer
 */
export default class PixiRenderer extends Renderer {/**
    * Returns a dictionary of image assets and their paths
    * E.G. {
               ship: 'assets/ship.png',
               missile: 'assets/missile.png',
           }
    */
    readonly ASSETPATHS: object;

    constructor(gameEngine: GameEngine, clientEngine: ClientEngine);
    sprites: object;
    isReady: boolean;

    init(): Promise<void>;
    viewportWidth: number;
    viewportHeight: number;
    stage: PIXI.Container;

    layers: object;

    draw();

    addObject(obj: GameObject);
    removeObject(obj: GameObject);
    
}