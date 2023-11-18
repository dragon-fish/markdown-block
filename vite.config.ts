import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const PROD = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [dts()],
  build: {
    outDir: 'dist',
    lib: {
      name: 'MarkdownTagModule',
      entry: 'src/index.ts',
      fileName: (format) =>
        format === 'es' ? `index.mjs` : `index.${format}.js`,
      formats: ['es', 'umd', 'cjs', 'iife'],
    },
    minify: PROD ? 'esbuild' : false,
  },
  esbuild: {
    drop: !PROD ? undefined : ['console'],
  },
})
