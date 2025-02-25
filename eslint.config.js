import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
	...pluginQuery.configs['flat/recommended'],
  { ignores: [
		'dist', 
		'node_modules/*', 
		'public/*',
		'**/.*'
	]},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-multiple-empty-lines": [
			"error",
				{
					"max": 1,
					"maxEOF": 1
				}
			],
    	"indent": [
				"error",
				"tab",
				{
					"SwitchCase": 1
				}
			],
			"linebreak-style": [
				"error",
				"unix"
			],
			"max-len": [
				"warn",
				{
					"code": 150,
					"tabWidth": 2,
					// "ignoreStrings": true,
					"ignoreComments": true,
					"ignoreTemplateLiterals": true
				}
			],
    	"quotes": [
				"error",
				"double",
				{
					"allowTemplateLiterals": true
				}
			],
			"jsx-quotes": [
				"error",
				"prefer-double"
			],
			"semi": [
				"error",
				"never"
			],
			"eol-last": [
				"error",
				"always"
			],
			"multiline-ternary": [
				"error",
				"always-multiline"
			],
			"prefer-destructuring": [
				"warn"
			],
			"space-infix-ops": "error",
			"key-spacing": [
				"error",
				{
					beforeColon: false,
					afterColon: true,
				},
			],
    },
  },
)
