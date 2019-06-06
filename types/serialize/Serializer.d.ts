export default class Serializer {
    constructor();

    registeredClasses: object;
    customTypes: object;

    /**
     * Adds a custom primitive to the serializer instance.
     * This will enable you to use it in an object's netScheme
     * @param customType
     */
    // TODO: the function below is not used, and it is not clear what that
    // first argument is supposed to be
    addCustomType(customType);

    /**
     * Checks if type can be assigned by value.
     * @param {String} type Type to Checks
     * @return {Boolean} True if type can be assigned
     */
    static typeCanAssign(type: string): boolean

    /**
     * Registers a new class with the serializer, so it may be deserialized later
     * @param {Function} classObj reference to the class (not an instance!)
     * @param {String} classId Unit specifying a class ID
     */
    registerClass(classObj: Function, classId: string);

    deserialize(dataBuffer, byteOffset): { obj: object, byteOffset: number };

    writeDataView(dataView, value, bufferOffset, netSchemProp);

    readDataView(dataView, bufferOffset: number, netSchemProp): { data: any, bufferSize: number };

    getTypeByteSize(type: string): number;
}