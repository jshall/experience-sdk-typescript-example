import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

// generate a disable map for rules tied to legacy (now ignored) function component
// propTypes/defaultProps features; we don't blanket disable every react rule—only those that hinge
// on removed runtime behavior
const react19LegacyRulesOff = {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
};

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    jsxA11yPlugin.flatConfigs.recommended,
    reactPlugin.configs.flat.recommended,
    reactHooksPlugin.configs['recommended-latest'],
    { ignores: ['dist/', 'extension.js', '*.config.{js,mjs}'] },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: { jsx: true },
                tsconfigRootDir: import.meta.dirname
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                process: 'readonly',
                console: 'readonly',
                fetch: 'readonly'
            }
        },
        settings: {
            'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
            'import/resolver': {
                typescript: true,
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                }
            },
            react: {
                version: 'detect'
            },
            linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
        },
        // merge Jest recommended rules and disable legacy React 19 function component prop rules
        rules: {
            ...react19LegacyRulesOff
        }
    }
);
