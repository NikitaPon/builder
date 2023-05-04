module.exports = {
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'import'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: '@*/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '{app,processes,pages}/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '{widgets,features,entities}/**',
                        group: 'internal',
                    },
                    {
                        pattern: 'shared/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '{helpers,assets,images,types}/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
    },
};
