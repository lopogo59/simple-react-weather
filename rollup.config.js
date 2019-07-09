import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external({
      includeDependencies: true
    }),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    json(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ],
      runtimeHelpers: true
    }),
    resolve(),
    commonjs()
  ]
}
