module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: '@steroidsjs/eslint-config',
    rules: {
        'import/order': [
            'warn',
        ],
        'react/react-in-jsx-scope': 'off',
    },
};
