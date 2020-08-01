const isEqualTo = require('./');

require('mocha');
const assert = require('assert');

let arr = [1,2,3];
let arr2 = arr;
let obj = {foo: "bar"};
let obj2 = obj;

describe('isEqualTo', function() {
    it('Should return true if x is equal to y:', function() {
        assert(!isEqualTo(1,2));
        assert(isEqualTo(arr, arr2));
        assert(isEqualTo("Hey!","Hey!"));
        assert(isEqualTo(obj, obj2));
        assert(isEqualTo(2+2,2*2));
        assert(!isEqualTo("Hey!", "hey!"));
    });
});