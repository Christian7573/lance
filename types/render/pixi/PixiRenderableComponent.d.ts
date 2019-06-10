import GameComponent from "../../serialize/GameComponent";

export interface PixiRenderableComponentOptions {
    assetName: string;
    spriteUrl: string;
    width: number;
    height: number;
    onRenderableCreated: (sprite: PIXI.Sprite, component: PixiRenderableComponent) => any;
}

export default class PixiRenderableComponent extends GameComponent {
    constructor(options: PixiRenderableComponentOptions);

    /**
     * Initial creation of the Pixi renderable
     * @returns A pixi container/sprite
     */
    createRenderable(): PIXI.Sprite;

    /**
     * This method gets executed on every render step
     * Note - this should only include rendering logic and not game logic
     */
    render(): void;
}