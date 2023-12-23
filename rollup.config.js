import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js',
  output: {
    file: 'dist/vue.js',
    // umd 可以将 Vue 全局挂载到 window
    format: 'umd',
    name: 'Vue',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      open: true,
      port: '8090',
      contentBase: '',
      openPage: '/public/index.html'
    })
  ] 
}