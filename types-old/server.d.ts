import * as GameEngine_export from './types/GameEngine';
import * as GameWorld_export from './types/GameWorld';
import * as P2PhysicsEngine_export from './types/physics/P2PhysicsEngine';
import * as SimplePhysicsEngine_export from './types/physics/SimplePhysicsEngine';
import * as CannonPhysicsEngine_export from './types/physics/CannonPhysicsEngine';
import * as BaseTypes_export from './types/serialize/BaseTypes';
import * as TwoVector_export from './types/serialize/TwoVector';
import * as ThreeVector_export from './types/serialize/ThreeVector';
import * as Quaternion_export from './types/serialize/Quaternion';
import * as DynamicObject_export from './types/serialize/DynamicObject';
import * as PhysicalObject2D_export from './types/serialize/PhysicalObject2D';
import * as PhysicalObject3D_export from './types/serialize/PhysicalObject3D';
import * as ServerEngine_export from './types/ServerEngine.js';
import * as Lib_export from './types/lib/lib.js';

declare const GameEngine_default: typeof GameEngine_export.default;
declare const GameWorld_default: typeof GameWorld_export.default;
declare const P2PhysicsEngine_default: typeof P2PhysicsEngine_export.default;
declare const SimplePhysicsEngine_default: typeof SimplePhysicsEngine_export.default;
declare const CannonPhysicsEngine_default: typeof CannonPhysicsEngine_export.default;
declare const BaseTypes_default: typeof BaseTypes_export.default;
declare const TwoVector_default: typeof TwoVector_export.default;
declare const ThreeVector_default: typeof ThreeVector_export.default;
declare const Quaternion_default: typeof Quaternion_export.default;
declare const DynamicObject_default: typeof DynamicObject_export.default;
declare const PhysicalObject2D_default: typeof PhysicalObject2D_export.default;
declare const PhysicalObject3D_default: typeof PhysicalObject3D_export.default;
declare const ServerEngine_default: typeof ServerEngine_export.default;
declare const Lib_default: typeof Lib_export.default;

export {
  GameEngine_default as GameEngine,
  GameWorld_default as GameWorld,
  P2PhysicsEngine_default as P2PhysicsEngine,
  SimplePhysicsEngine_default as SimplePhysicsEngine,
  CannonPhysicsEngine_default as CannonPhysicsEngine,
  BaseTypes_default as BaseTypes,
  TwoVector_default as TwoVector,
  ThreeVector_default as ThreeVector,
  Quaternion_default as Quaternion,
  DynamicObject_default as DynamicObject,
  PhysicalObject2D_default as PhysicalObject2D,
  PhysicalObject3D_default as PhysicalObject3D,
  ServerEngine_default as ServerEngine,
  Lib_default as Lib
};

declare namespace LanceTypes {
  const GameEngine: typeof GameEngine_export;
  const GameWorld: typeof GameWorld_export;
  const P2PhysicsEngine: typeof P2PhysicsEngine_export;
  const SimplePhysicsEngine: typeof SimplePhysicsEngine_export;
  const CannonPhysicsEngine: typeof CannonPhysicsEngine_export;
  const BaseTypes: typeof BaseTypes_export;
  const TwoVector: typeof TwoVector_export;
  const ThreeVector: typeof ThreeVector_export;
  const Quaternion: typeof Quaternion_export;
  const DynamicObject: typeof DynamicObject_export;
  const PhysicalObject2D: typeof PhysicalObject2D_export;
  const PhysicalObject3D: typeof PhysicalObject3D_export;
  const ServerEngine: typeof ServerEngine_export;
  const Lib: typeof Lib_export;
}