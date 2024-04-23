import { WebsocketProvider } from 'y-websocket'

import { useDoc, useProviders } from '../doc'

export function useWebSocket(url: string, room: string): WebsocketProvider {
  const doc = useDoc()
  const providers = useProviders()

  const existingProvider
    = providers.get(WebsocketProvider)?.get(room) as WebsocketProvider | undefined

  const createWebSocketProvider = () => {
    const provider = new WebsocketProvider(
      url,
      room,
      doc,
    )

    if (!(providers.has(WebsocketProvider)))
      providers.set(WebsocketProvider, new Map())

    providers.get(WebsocketProvider)?.set(room, provider)

    return provider
  }

  return existingProvider || createWebSocketProvider()
}
