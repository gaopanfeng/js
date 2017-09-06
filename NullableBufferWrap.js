/**
 * Created by gaopanfeng on 2017/9/6.
 */
const Uint1Array = require('uint1array');
class NullableBufferWrap {
    constructor(buffer) {
        this.buffer = buffer;
        let length = buffer.length;
        this.nullable = new Uint1Array(length);
    }
    set(i, value) {
        this.buffer[i] = value;
        this.nullable[i] = 1;
    }
    get(i) {
        let v = this.buffer[i];
        if (v === 0 && this.nullable[i] === 0) {
            v = undefined;
        }
        return v;
    }
    static of(buffer) {
        return new NullableBufferWrap(buffer);
    }
}

module.exports = NullableBufferWrap;
