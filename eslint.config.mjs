import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "typescript-eslint";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", ".git/**"],
  },
  ...tsPlugin.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
