import { minifyHtml } from "vite-plugin-html";

export default {
  jsx: {
    factory: "h",
  },
  esbuild: {
    jsxInject: `import { h } from "nanoact"`,
  },
  plugins: [minifyHtml()],
};
