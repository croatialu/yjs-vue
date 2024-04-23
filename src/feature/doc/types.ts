import type { IndexeddbPersistence } from 'y-indexeddb'
import type { WebrtcProvider } from 'y-webrtc'
import type { WebsocketProvider } from 'y-websocket'

export type Provider =
  | WebrtcProvider
  | WebsocketProvider
  | IndexeddbPersistence
