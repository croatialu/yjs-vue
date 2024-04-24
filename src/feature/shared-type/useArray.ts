import * as Y from 'yjs'
import { computed, onUnmounted, watch } from 'vue-demi'
import { patchSharedType, patchState } from '../patch'
import { useDoc } from '../doc'
import { useSharedType } from './useSharedType'
import { useImmer } from './useImmer'
import { deepClone } from './utils'

export function useArray<T = any>(name: string) {
  const doc = useDoc()
  const array = useSharedType<Y.Array<T>>(name, Y.Array)

  const [state, setState] = useImmer<T[]>([])

  const arrayObserver = () => {
    const result = patchState(
      deepClone(state.value),
      array.toJSON(),
    )
    setState(result)
  }

  watch(state, (v) => {
    doc.transact(() => {
      patchSharedType(
        array,
        v,
      )
    })
  })

  array.observeDeep(arrayObserver)

  onUnmounted(() => {
    array.unobserve(arrayObserver)
  })

  return [computed(() => state.value), setState] as const
}
