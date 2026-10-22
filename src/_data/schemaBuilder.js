import { buildSchema } from "../_lib/schema.js";

export default {
  script(input) {
    return buildSchema(input);
  },
};
