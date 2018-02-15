// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.from
description: >
  Return a new TypedArray
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

var source = [42, 43, 42];

testWithBigIntTypedArrayConstructors(function(TA) {
  var result = TA.from(convertToBigInt(source));
  assert.sameValue(result.length, 3);
  assert.sameValue(result[0], 42n);
  assert.sameValue(result[1], 43n);
  assert.sameValue(result[2], 42n);
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
});
