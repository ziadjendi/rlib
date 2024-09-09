import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import  terser  from "@rollup/plugin-terser";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
  external: ["react", "react-dom"],

  // Ignore specific warnings
  onwarn: (warning, warn) => {
    // Ignore "use client" warnings from MUI
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
      return;
    }
    // Call the default warning handler for all other warnings
    warn(warning);
  },
};

export default config;
