import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Allow <img> usage
      "@typescript-eslint/no-unused-vars": "off", // Allow unused vars like 'slug'
      "@typescript-eslint/no-explicit-any": "off", // Allow usage of 'any'
    },
  },
];

export default eslintConfig;
