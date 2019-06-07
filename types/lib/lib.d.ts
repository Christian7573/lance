import Trace from './Trace';

interface lib {
    Trace: typeof Trace;
}

declare const lib2: lib;

export default lib2;