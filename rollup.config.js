import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

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
        url({
            limit: 100 * 1024,
            publishPath: './assets/fonts/',
            include: [
                './packages/assets/fonts/nj-icon.ttf',
                './packages/assets/fonts/nj-icon.svg',
                './packages/assets/fonts/nj-icon.eot',
                './packages/assets/fonts/nj-icon.woff'
            ]
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        resolve(),
        commonjs()
    ]
};
