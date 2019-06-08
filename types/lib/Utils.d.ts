export default class Utils {
    static hashStr(str: string, bits: number): number;

    static arrayBuffersEqual(buf1: ArrayBuffer, buf2: ArrayBuffer): boolean;

    static httpGetPromise(url: string): Promise<object>;
}