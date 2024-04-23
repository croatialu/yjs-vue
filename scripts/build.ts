await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  // plugins: [
  //   dts(),
  // ],
  external: ['yjs', 'vue', 'y-webrtc', 'y-websocket', 'y-indexeddb', 'y-protocols'],
})
