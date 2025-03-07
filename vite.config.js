import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/datatable/Datatables.jsx',
      name: 'DataTables',
      fileName: (format) => `gf-react-datatables.${format}.js`,
      formats: ['umd'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
