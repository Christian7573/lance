import GameObject from "./GameObject";

export default class GameComponent {
    constructor();

    /** the gameObject this component is attached to. This gets set in the addComponent method */
    parentObject: GameObject;

    static readonly name: string;
    static readonly netScheme: object;
}