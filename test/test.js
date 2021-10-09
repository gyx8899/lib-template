const assert = require("assert");

assert.equal("1", "1");
assert.notEqual("1", "0");

assert.deepEqual(
    {
        a: 1,
        b: "2",
        c: [1, "2"],
    },
    {
        a: 1,
        b: "2",
        c: [1, "2"],
    }
);
assert.notDeepEqual(
    {
        a: 1,
        b: "2",
        c: function () {
            return 1;
        },
    },
    {
        a: 1,
        b: "2",
        c: function () {
            return 1;
        },
    }
);
