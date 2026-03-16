import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		ignores: ["lib/**", "node_modules/**", ".d.ts", "eslint.config.mjs"],
	},

	eslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	prettier,

	{
		plugins: {
			prettier: prettierPlugin,
			import: importPlugin,
		},

		rules: {
			"prettier/prettier": "error",
			"sort-imports": "off",
			"import/order": [
				"error",
				{
					"groups": [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
						"type",
					],
					"newlines-between": "always",
					"alphabetize": {
						order: "asc",
						caseInsensitive: true,
					},
					"distinctGroup": true,
				},
			],

			"import/no-duplicates": "error",

			"no-useless-return": "error",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},

	{
		files: ["src/**/*.ts", "src/**/*.tsx"],
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
]);
