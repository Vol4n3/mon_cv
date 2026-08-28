import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import stylistic from '@stylistic/eslint-plugin'
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  globalIgnores([`dist/*`, `package-lock.json`]),
  {
    rules: {
      "@stylistic/quotes": [`error`, `backtick`],
    },
    files: [`**/*.{js,mjs,cjs,ts,mts,cts}`],
    plugins: { js },
    extends: [`js/recommended`, stylistic.configs.recommended],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  { files: [`**/*.json`], plugins: { json }, language: `json/json`, extends: [`json/recommended`] },
  { files: [`**/*.md`], plugins: { markdown }, language: `markdown/commonmark`, extends: [`markdown/recommended`] },
])
