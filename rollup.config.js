import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'

// const globals = {
//   // lodash: 'lodash',
//   // qs: 'qs',
//   // vue: 'vue',
//   'vue-property-decorator': 'vue-property-decorator',
// }

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    babel({
      presets: [['@babel/preset-env', { targets: { browsers: '> 0.1%' } }]],
      plugins: ['transform-vue-jsx'],
      extensions: ['.ts', '.tsx'],
    }),
  ],
  // external: Object.keys(globals),
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    exports: 'named',
    // globals: globals,
  },
}
