import { defineConfig } from 'vite'

const PROD = process.env.NODE_ENV === 'production'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      name: 'MarkdownElement',
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
