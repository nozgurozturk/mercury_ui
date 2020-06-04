import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import analyze from 'rollup-plugin-analyzer'
// import copy from "rollup-plugin-copy";

export default {
  input: [
  "src/index.ts",
  "src/components/Button/index.ts",
  "src/components/Checkbox/index.ts",
  "src/components/Collapse/index.ts",
  "src/components/Grid/index.ts",
  "src/components/Icon/index.ts",
  "src/components/Loader/index.ts",
  "src/components/NumberInput/index.ts",
  "src/components/Radio/index.ts",
  // "src/components/Select/index.ts",
  "src/components/Text/index.ts",
  "src/components/TextInput/index.ts",
  "src/components/Title/index.ts",
  ],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: false
    }),
    analyze()
  ]
};