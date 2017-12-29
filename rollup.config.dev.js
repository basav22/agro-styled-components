import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
// ejs -13      11
// cjs - 14     
// iife - 13    9
export default {
  input: "./main.js",
  output: [
    {
      file: "build/agrostyled.es.js",
      format: "es",
      sourcemap: "false",
      globals: {
        "styled-components": "styled"
      },
      name: "basav"
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      sourcemap: false,
      namedExports: {
        react: ["Component", "createElement"]
      }
    }),
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["styled-components"]
};
