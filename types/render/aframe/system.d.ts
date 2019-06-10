import GameEngine from "../../GameEngine";
import Renderer from "../Renderer";


declare interface typeof_system {
    schema: { traceLevel: { default: number } };
    init();
    tick(t: number, dt: number);
    setGlobals(gameEngine: GameEngine, renderer: Renderer);
}

declare const system: typeof_system;
export { system as default };