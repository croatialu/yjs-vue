import type { ComputedRef, ShallowRef } from 'vue-demi'
import { computed, onUnmounted, shallowRef } from 'vue-demi'
import * as Y from 'yjs'
import { useSharedType } from './useSharedType'

export function useMap<T = any>(name: string): {
  state: ComputedRef<{
    [x: string]: T
  }>
  get: ComputedRef<(name: string) => T | undefined>
  set: (name: string, value: T) => void
} {
  const map = useSharedType<Y.Map<T>>(name, Y.Map)

  const state: ShallowRef<{ [x: string]: T }> = shallowRef(map.toJSON())

  const mapObserver = () => {
    state.value = map.toJSON()
  }
  map.observe(mapObserver)

  onUnmounted(() => {
    map.unobserve(mapObserver)
  })

  return {
    state: computed(() => state.value),
    get: computed(() => (name: string) => state.value[name] as T | undefined),
    set: (name: string, value: T) => {
      map.set(name, value)
    },
  }
}
