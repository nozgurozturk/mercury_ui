import peerDepsExternal from "rollup-plugin-peer-deps-external";
import jsx from 'acorn-jsx';
// import typescript from '@rollup/plugin-typescript';
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import analyze from 'rollup-plugin-analyzer'
// import copy from "rollup-plugin-copy";

export default {
  input: [
  "src/index.ts",
  "src/components/Button/Button.tsx",
  "src/components/Checkbox/Checkbox.tsx",
  "src/components/Collapse/Collapse.tsx",
  "src/components/Collapse/Panel.tsx",
  "src/components/Drawer/Drawer.tsx",
  "src/components/Grid/Row.tsx",
  "src/components/Grid/Col.tsx",
  "src/components/Icon/Icon.tsx",
  "src/components/Loader/Loader.tsx",
  "src/components/Menu/Menu.tsx",
  "src/components/Modal/Modal.tsx",
  "src/components/NumberInput/NumberInput.tsx",
  "src/components/Radio/Radio.tsx",
  "src/components/Result/Result.tsx",
  "src/components/Select/Select.jsx",
  "src/components/Skeleton/Skeleton.tsx",
  "src/components/Tab/Tab.tsx",
  "src/components/Tab/TabGroup.tsx",
  "src/components/Table/Table.tsx",
  "src/components/Text/Text.tsx",
  "src/components/TextInput/TextInput.tsx",
  "src/components/Title/Title.tsx",
  // "src/components/Button/index.ts",
  // "src/components/Checkbox/index.ts",
  // "src/components/Collapse/index.ts",
  // "src/components/Drawer/index.ts",
  // "src/components/Grid/index.ts",
  // "src/components/Icon/index.ts",
  // "src/components/Loader/index.ts",
  // "src/components/Menu/index.ts",
  // "src/components/Modal/index.ts",
  // "src/components/NumberInput/index.ts",
  // "src/components/Radio/index.ts",
  // "src/components/Result/index.ts",
  // "src/components/Select/index.js",
  // "src/components/Skeleton/index.ts",
  // "src/components/Tab/index.ts",
  // "src/components/Table/index.ts",
  // "src/components/Text/index.ts",
  // "src/components/TextInput/index.ts",
  // "src/components/Title/index.ts",
  ],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  preserveModules: true,
  acornInjectPlugins: [jsx()],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(), 
    typescript({ useTsconfigDeclarationDir:true}),
    sass({
      insert: true
    }),
    analyze()
  ]
};