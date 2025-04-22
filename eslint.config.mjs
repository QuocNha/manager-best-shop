import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/dist/**"],
  },

  // next + typescript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // custom rules override
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      semi: 0,
      indent: 0,
      "react/jsx-filename-extension": 0,
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "react/require-default-props": 0,

      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      "jsx-a11y/anchor-is-valid": 0,

      "no-use-before-define": 0,
      "no-unused-vars": 0,
      "no-param-reassign": 0,
      "implicit-arrow-linebreak": 0,
      "import/no-useless-path-segments": 0,
      "consistent-return": 0,
      "arrow-parens": 0,
      "object-curly-newline": 0,
      "operator-linebreak": 0,
      "import/no-extraneous-dependencies": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "import/prefer-default-export": 0,

      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/ban-types": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/no-explicit-any": 0,

      "no-underscore-dangle": 0,
      "react/function-component-definition": 0,
      "react/react-in-jsx-scope": 0,
      "arrow-body-style": 0,
      "prefer-arrow-callback": 0,
      "import/no-cycle": 0,

      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
    },
  },
];

export default eslintConfig;
