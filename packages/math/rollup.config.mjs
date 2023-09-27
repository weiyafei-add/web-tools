import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "./index.ts",
  output: {
    file: "./lib/index.js",
  },
  plugins: [typescript()],
});
