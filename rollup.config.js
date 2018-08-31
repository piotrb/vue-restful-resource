import VuePlugin from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  plugins: [
    VuePlugin(),
    /* VuePluginOptions */
    babel({
      plugins: ['transform-class-properties'],
    }),
    commonjs({
      extensions: ['.js', '.vue'],
    }),
  ],
  external: ['qs', 'vue'],
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
}
