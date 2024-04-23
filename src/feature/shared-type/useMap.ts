import type { ComputedRef } from 'vue-demi'
import { computed, onUnmounted, shallowRef } from 'vue-demi'
import * as Y from 'yjs'
import { useSharedType } from './useSharedType'

export function useMap<T = any>(name: string): {
  state: ComputedRef<{
    [x: string]: any
  }>
  get: (name: string) => T | undefined
  set: (name: string, value: T) => void
} {
  const map = useSharedType<Y.Map<T>>(name, Y.Map)

  const state = shallowRef(map.toJSON())

  const mapObserver = () => {
    state.value = map.toJSON()
  }
  map.observe(mapObserver)

  onUnmounted(() => {
    map.unobserve(mapObserver)
  })

  return {
    state: computed(() => state.value),
    get: (name: string) => map.get(name),
    set: (name: string, value: T) => {
      map.set(name, value)
    },
  }
}
