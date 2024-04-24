import { computed, onUnmounted, watch } from 'vue-demi'
import * as Y from 'yjs'
import { useDoc } from '../doc'
import { patchSharedType } from '../patch'
import { useSharedType } from './useSharedType'
import { useImmer } from './useImmer'
import { deepClone } from './utils'

export function useMap<T = any>(name: string) {
  const doc = useDoc()
  const map = useSharedType<Y.Map<T>>(name, Y.Map)

  const [state, updateState] = useImmer<{
    [x: string]: T | undefined
  }>(map.toJSON())

  watch(state, (v) => {
    doc.transact(() => {
      patchSharedType(
        map,
        v,
      )
    })
  })

  const mapObserver = () => {
    updateState(
      deepClone(map.toJSON()),
    )
  }

  map.observeDeep(mapObserver)
  onUnmounted(() => {
    map.unobserve(mapObserver)
  })

  return [computed(() => state.value), updateState] as const
}
