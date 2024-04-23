// import * as Y from 'yjs'
// import { computed, onMounted, onUnmounted, shallowRef } from 'vue'
// import { useSharedType } from './useSharedType'

// export function useText(name: string) {
//   const text = useSharedType<Y.Text>(name, Y.Text)

//   const state = shallowRef(text.toString())

//   const textObserver = () => {
//     state.value = text.toString()
//   }

//   text.observe(textObserver)
//   onUnmounted(() => {
//     text.unobserve(textObserver)
//   })

//   return {
//     state: computed(() => state.value),
//     insert: (index: number, content: string) => text.insert(index, content),
//     delete: (index: number, length: number) => text.delete(index, length),
//     push: (content: string) => text.insert(text.length, content),
//     unshift: (content: string) => text.insert(0, content),
//     slice: (start: number, end?: number) => text.toString().slice(start, end),
//   }
// }
