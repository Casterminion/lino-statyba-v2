import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/components/sections/**/*", "src/components/layout/**/*", "src/app/page.tsx"],
    rules: {
      no-restricted-syntax: [
        "warn",
        {
          selector: "Literal[value=/\\b(?:sm|md|lg|xl|2xl):/]",
          message: "Use Vitruvius breakpoints (wide/desktop/mobile) in homepage architecture paths.",
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
