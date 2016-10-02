const eslint = require('./src/eslint');
const mocha = require('./src/mocha');
const node = require('./src/node');
const objects = require('./src/objects');
const react = require('./src/react');
const unicorn = require('./src/unicorn');

module.exports = {
    env: {
        browser: true,
        es6: true,
        mocha: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: [
        'json',
        'mocha',
        'node',
        'objects',
        'react',
        'unicorn'
    ],
    rules: Object.assign(
        eslint,
        mocha,
        node,
        objects,
        react,
        unicorn
    )
};
