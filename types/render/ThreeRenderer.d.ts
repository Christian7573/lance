///<reference path="./three/three.d.ts" />
import Renderer from "./Renderer";
/** TODO: I have mixed feelings about this class.  It doesn't actually provide
  * anything useful.  I assume each game will write their own renderer even in THREE.
  * we can make it store a list of objects, and provide a Raycaster, and send events.
  * But it hijacks the creation of the scene and the THREE.renderer.  It doesn't make
  * sense to me that the camera and lights are in the derived class, but the scene and
  * renderer are in the base class.  seems like inheritance-abuse. */
export default class ThreeRenderer extends Renderer {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.Renderer;
    THREE: typeof THREE;
    raycaster: THREE.Raycaster;

    draw(): void;
    
    addObject(id): void;

    removeObject(o);
}