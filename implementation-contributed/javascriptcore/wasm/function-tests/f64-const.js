import * as assert from '../assert.js';
import Builder from '../Builder.js';

const builder = (new Builder())
      .Type().End()
      .Function().End()
      .Export()
          .Function("answer")
          .Function("minInt")
      .End()
      .Code()
          .Function("answer", { params: [], ret: "f64" })
              .F64Const(42.424242)
          .End()

          .Function("minInt", { params: [], ret: "f64" })
             .F64Const(-1)
          .End()

      .End();

const bin = builder.WebAssembly().get();
const module = new WebAssembly.Module(bin);
const instance = new WebAssembly.Instance(module);
assert.eq(instance.exports.answer(), 42.424242);
assert.eq(instance.exports.minInt(), -1);
