import defaultExport from "@uniswap/token-lists";
import Ajv from "ajv";
import * as data from "./sushiswap.tokenlist.json";

var ajv = new Ajv();
var valid = ajv
  .addSchema(defaultExport.schema, "SushiSwap")
  .validate("SushiSwap", data.default);
if (!valid) {
  throw new Error(ajv.errorsText());
}
