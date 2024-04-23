import type { ProviderOptions } from 'y-webrtc'
import { WebrtcProvider } from 'y-webrtc'

import type { ComputedRef, MaybeRef } from 'vue'
import { computed, shallowRef, toValue, watch } from 'vue'
import { useDoc, useProviders } from './../doc'

export function useWebRtc(
  _room: MaybeRef<string>,
  options?: ProviderOptions,
): ComputedRef<WebrtcProvider | undefined> {
  const doc = useDoc()
  const providers = useProviders()
  const room = computed(() => toValue(_room))

  const createWebrtcProvider = () => {
    if (!room.value)
      return
    const provider = new WebrtcProvider(
      room.value,
      doc,
      options,
    )

    if (!(providers.has(WebrtcProvider)))
      providers.set(WebrtcProvider, new Map())

    const old = providers.get(WebrtcProvider)?.get(room.value)

    old?.destroy()
    providers.get(WebrtcProvider)?.set(room.value, provider)
    return provider
  }

  const provider = shallowRef<WebrtcProvider | undefined>()

  watch(room, (newRoom, oldRoom) => {
    if (newRoom === oldRoom)
      return
    provider.value = createWebrtcProvider()
  }, { immediate: true })

  return computed(() => {
    return provider.value
  })
}
