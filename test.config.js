import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'tests/index.js',
  moduleName: 'heimdall-js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**', ignoreGlobal: true })
  ],
  targets: [
    { dest: 'dist/tests/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/tests/bundle.umd.js', format: 'umd' },
    { dest: 'dist/tests/bundle.es.js', format: 'es' },
  ]
};
