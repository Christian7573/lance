/**
 * The BaseTypes class defines the base types used in lance.
 * These are the types which can be used to define an object's netscheme attributes,
 * which can be serialized by lance.
 * @example
 *     static get netScheme() {
 *       return {
 *             strength: { type: BaseTypes.TYPES.FLOAT32 },
 *             shield: { type: BaseTypes.TYPES.INT8 },
 *             name: { type: BaseTypes.TYPES.STRING },
 *             backpack: { type: BaseTypes.TYPES.CLASSINSTANCE },
 *             coins: {
 *                 type: BaseTypes.TYPES.LIST,
 *                 itemType: BaseTypes.TYPES.UINT8
 *             }
 *         };
 *     }
 */

export interface BaseTypesInterface {
    /**
   * Seriablizable float */
  FLOAT32: 'FLOAT32';

  /**
   * Seriablizable 32-bit int */
  INT32: 'INT32';

  /**
   * Seriablizable 16-bit int */
  INT16: 'INT16';

  /**
   * Seriablizable 8-bit int */
  INT8: 'INT8';

  /**
   * Seriablizable unsigned 8-bit int */
  UINT8: 'UINT8';

  /**
   * Seriablizable string */
  STRING: 'STRING';

  /**
   * Seriablizable class.  Make sure you registered the classes included in this way. */
  CLASSINSTANCE: 'CLASSINSTANCE';

  /**
   * Seriablizable list. */
  LIST: 'LIST';
}