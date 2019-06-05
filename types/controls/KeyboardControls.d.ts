import ClientEngine from "../ClientEngine";
import GameEngine from "../GameEngine";

export interface KeyboardControlsBindingOptions {
    repeat: boolean;
}

export default class KeyboardControls {
    constructor(clientEngine: ClientEngine);

    clientEngine: ClientEngine;
    gameEngine: GameEngine;
    keyState: object;
    boundKeys: object;

    setupListeners();
    
    bindKey(keys: string[] | string, actionName: string, options: KeyboardControlsBindingOptions);

    onKeyChange(e: KeyboardEvent, isDown: boolean);
}