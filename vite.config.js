import path from "node:path";
import react from "@vitejs/plugin-react";
import { createLogger, defineConfig } from "vite";

const isDev = process.env.NODE_ENV !== "production";

console.warn = () => {};

const logger = createLogger();
const loggerError = logger.error;
logger.error = (msg, options) => {
  if (options?.error?.toString().includes("CssSyntaxError: [postcss]")) {
    return;
  }
  loggerError(msg, options);
};

export default defineConfig({
  base: "/",
  customLogger: logger,
  plugins: [
    react({
      fastRefresh: true,
      babel: {
        plugins: [
          ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
        ],
      },
    }),
  ],
  server: {
    cors: true,
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless",
    },
    allowedHosts: true,
    warmup: {
      clientFiles: [
        "./src/App.jsx",
        "./src/main.jsx",
        "./src/pages/**/*.jsx",
        "./src/components/**/*.jsx",
      ],
    },
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false, // Muda para true temporariamente para debug
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: !isDev, // Só remove console.log em produção
        drop_debugger: true,
        pure_funcs: isDev
          ? []
          : ["console.log", "console.info", "console.debug"],
        // NÃO remova console.error e console.warn
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-toast",
          ],
          "animation-vendor": ["framer-motion", "gsap"],
          "form-vendor": ["react-hook-form", "@formspree/react"],
          "icons-vendor": ["react-icons", "lucide-react"],
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split(".").at(-1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/woff2?|ttf|otf|eot/i.test(extType)) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "gsap",
    ],
    exclude: [
      "@babel/parser",
      "@babel/traverse",
      "@babel/generator",
      "@babel/types",
    ],
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
