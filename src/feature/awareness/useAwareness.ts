import type { MaybeRef, ShallowRef } from 'vue-demi'
import { computed, onMounted, onUnmounted, shallowRef, toValue } from 'vue-demi'
import type { Awareness } from 'y-protocols/awareness'

export function useAwareness<T extends NonNullable<unknown> = { [x: string]: any }>(_awareness: MaybeRef<Awareness | undefined>) {
  const states = shallowRef(new Map<number, T>())
  const localState: ShallowRef<T> = shallowRef({} as T)
  const awareness = computed(() => toValue(_awareness))

  const setLocalState = (nextState: T) => {
    if (!awareness.value)
      return
    // states.value.set(awareness.value.clientID, nextState)
    awareness.value.setLocalState(
      nextState,
    )

    localState.value = nextState
  }

  const forceUpdateOnAwarenessChange = () => {
    if (!awareness.value)
      return
    states.value = new Map(
      Array.from(awareness.value.getStates()).map(([clientID, state]) => [clientID, state as T]),
    ) as Map<number, T>
  }

  onMounted(() => {
    awareness.value?.on('change', forceUpdateOnAwarenessChange)
  })

  onUnmounted(() => {
    awareness.value?.off('change', forceUpdateOnAwarenessChange)
  })

  return {
    states: computed(() => states.value),
    localID: computed(() => awareness.value?.clientID),
    localState: computed(() => localState.value),
    setLocalState,
  }
}
