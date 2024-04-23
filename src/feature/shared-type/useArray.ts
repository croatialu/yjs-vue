import * as Y from 'yjs'
import { onUnmounted, shallowRef } from 'vue-demi'
import { useSharedType } from './useSharedType'

export function useArray<T = any>(name: string): {
  state: T[]
  get: (index: number) => T | undefined
  insert: (index: number, content: T[]) => void
  delete: (index: number, length: number) => void
  push: (content: T[]) => void
  unshift: (content: T[]) => void
  slice: (start: number, end?: number) => void
} {
  const array = useSharedType<Y.Array<T>>(name, Y.Array)

  const state = shallowRef(array.toJSON())

  const arrayObserver = () => {
    state.value = array.toJSON()
  }

  array.observe(arrayObserver)

  onUnmounted(() => {
    array.unobserve(arrayObserver)
  })

  return {
    state: array.toJSON(),
    get: (index: number) => array.get(index),
    insert: (index: number, content: T[]) => array.insert(index, content),
    delete: (index: number, length: number) => array.delete(index, length),
    push: (content: T[]) => array.push(content),
    unshift: (content: T[]) => array.unshift(content),
    slice: (start: number, end?: number) => array.slice(start, end),
  }
}
