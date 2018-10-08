import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import copy from 'rollup-plugin-cpy';

import pkg from './package.json';

export default {
    input: 'packages/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: false
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: false
        }
    ],
    plugins: [
        external(),
        scss({
            output: './dist/njui-mobile.css'
        }),
        url(),
        copy({
            files: 'packages/Icon/fonts/nj-icon.*',
            dest: 'dist/fonts'
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        resolve(),
        commonjs()
    ]
};
