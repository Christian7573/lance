/** A component that can be attached to a gameobject */
class GameComponent {
    
    constructor(){
        /**
         * the gameObject this component is attached to. This gets set in the addComponent method
         * @member {GameObject}
         */
        this.parentObject = null;
    }

    static get name(){
        return this.constructor.name;
    }

    static get netScheme(){
        return null;
    }
}

export { GameComponent as default }