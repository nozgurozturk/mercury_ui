import peerDepsExternal from "rollup-plugin-peer-deps-external";
import jsx from 'acorn-jsx';
import typescript from '@rollup/plugin-typescript';
// import typescript from "rollup-plugin-typescript2";
// import { terser } from 'rollup-plugin-terser'
import sass from "rollup-plugin-sass";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import analyze from 'rollup-plugin-analyzer'
import packageJson from './package.json'
export default {
  input: [
  "src/index.ts",
  ],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({   
    jsx: 'preserve', 
  }),
    sass({
      insert: true
    }),
    // terser(),
    analyze()
  ]
};