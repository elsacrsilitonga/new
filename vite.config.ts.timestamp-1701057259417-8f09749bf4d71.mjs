// vite.config.ts
import { defineConfig } from "file:///C:/Users/Elsa%20Claudia/OneDrive/Dokumen/pendekarr/Pendekar-Projek-main/Pendekar-Projek-main/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///C:/Users/Elsa%20Claudia/OneDrive/Dokumen/pendekarr/Pendekar-Projek-main/Pendekar-Projek-main/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import UnoCSS from "file:///C:/Users/Elsa%20Claudia/OneDrive/Dokumen/pendekarr/Pendekar-Projek-main/Pendekar-Projek-main/node_modules/unocss/dist/vite.mjs";
var vite_config_default = defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    UnoCSS({
      configFile: "./uno.config.ts"
    })
  ],
  server: {
    port: 3001
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxFbHNhIENsYXVkaWFcXFxcT25lRHJpdmVcXFxcRG9rdW1lblxcXFxwZW5kZWthcnJcXFxcUGVuZGVrYXItUHJvamVrLW1haW5cXFxcUGVuZGVrYXItUHJvamVrLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEVsc2EgQ2xhdWRpYVxcXFxPbmVEcml2ZVxcXFxEb2t1bWVuXFxcXHBlbmRla2FyclxcXFxQZW5kZWthci1Qcm9qZWstbWFpblxcXFxQZW5kZWthci1Qcm9qZWstbWFpblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvRWxzYSUyMENsYXVkaWEvT25lRHJpdmUvRG9rdW1lbi9wZW5kZWthcnIvUGVuZGVrYXItUHJvamVrLW1haW4vUGVuZGVrYXItUHJvamVrLW1haW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG4vLyBpbXBvcnQgZGV2dG9vbHMgZnJvbSAnc29saWQtZGV2dG9vbHMvdml0ZSc7XG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLyogXG4gICAgVW5jb21tZW50IHRoZSBmb2xsb3dpbmcgbGluZSB0byBlbmFibGUgc29saWQtZGV2dG9vbHMuXG4gICAgRm9yIG1vcmUgaW5mbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZXRhcm5hdi9zb2xpZC1kZXZ0b29scy90cmVlL21haW4vcGFja2FnZXMvZXh0ZW5zaW9uI3JlYWRtZVxuICAgICovXG4gICAgLy8gZGV2dG9vbHMoKSxcbiAgICBzb2xpZFBsdWdpbigpLFxuICAgIFVub0NTUyh7XG4gICAgICBjb25maWdGaWxlOiAnLi91bm8uY29uZmlnLnRzJyxcbiAgICB9KVxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAxLFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2QsU0FBUyxvQkFBb0I7QUFDL2UsT0FBTyxpQkFBaUI7QUFFeEIsT0FBTyxZQUFZO0FBRW5CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNUCxZQUFZO0FBQUEsSUFDWixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
