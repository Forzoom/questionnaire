const vue = require('rollup-plugin-vue');

module.exports = exports = [
    {
        input: './src/index.js',
        output: {
            file: './dist/questionnaire.esm.js',
            format: 'es',
        },
        plugins: [
            vue({
                css: './dist/questionnaire.css',
            }),
        ],
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/questionnaire.cjs.js',
            format: 'cjs',
        },
        plugins: [
            vue({
                css: './dist/questionnaire.css',
            }),
        ],
    },
];