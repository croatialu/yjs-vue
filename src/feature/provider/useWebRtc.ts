import type { ProviderOptions } from 'y-webrtc'
import { WebrtcProvider } from 'y-webrtc'

import { useDoc, useProviders } from './../doc'

export function useWebRtc(
  room: string,
  options?: ProviderOptions,
): WebrtcProvider {
  const doc = useDoc()
  const providers = useProviders()

  const existingProvider
    = providers.get(WebrtcProvider)?.get(room) as WebrtcProvider | undefined

  const createWebrtcProvider = () => {
    const provider = new WebrtcProvider(
      room,
      doc,
      options,
    )

    if (!(providers.has(WebrtcProvider)))
      providers.set(WebrtcProvider, new Map())

    providers.get(WebrtcProvider)?.set(room, provider)

    return provider
  }

  const provider = existingProvider || createWebrtcProvider()

  return provider
}
