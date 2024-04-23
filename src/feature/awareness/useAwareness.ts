import type { ComputedRef, ShallowRef } from 'vue-demi'
import { computed, onMounted, onUnmounted, shallowRef } from 'vue-demi'
import type { Awareness } from 'y-protocols/awareness'

export function useAwareness<T extends NonNullable<unknown> = { [x: string]: any }>(awareness: Awareness): {
  states: ComputedRef<Map<number, T>>
  localID: number
  localState: ComputedRef<T>
  setLocalState: (nextState: T) => void
} {
  const states = shallowRef(new Map<number, T>())
  const localState: ShallowRef<T> = shallowRef({} as T)

  const setLocalState = (nextState: T) => {
    awareness.setLocalState(
      nextState,
    )

    localState.value = nextState
  }

  const forceUpdateOnAwarenessChange = () => {
    states.value = awareness.getLocalState() as Map<number, T>
  }

  onMounted(() => {
    awareness.on('change', forceUpdateOnAwarenessChange)
  })

  onUnmounted(() => {
    awareness.off('change', forceUpdateOnAwarenessChange)
  })

  return {
    states: computed(() => states.value),
    localID: awareness.clientID,
    localState: computed(() => localState.value),
    setLocalState,
  }
}
