await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  external: ['yjs', 'vue', 'vue-demi', 'y-webrtc', 'y-websocket', 'y-indexeddb', 'y-protocols'],
})

export {}
