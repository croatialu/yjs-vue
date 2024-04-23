import * as Y from 'yjs'
import type { PropType } from 'vue-demi'
import { defineComponent, onUnmounted, toRefs, watchEffect } from 'vue-demi'
import { useDoc } from './useDoc'
import type { Provider } from './types'
import { provideDocumentContext } from './context'

export const DocumentProvider = defineComponent({
  props: {
    doc: {
      type: Object as PropType<Y.Doc>,
      default: () => new Y.Doc(),
    },
    folderName: {
      type: String,
    },
    documentName: {
      type: String,
    },
  },
  setup(props, ctx) {
    const { folderName, documentName, doc } = toRefs(props)
    let superDoc: Y.Doc | null

    try {
      superDoc = useDoc()
    }
    catch {}

    watchEffect(() => {
      if (!superDoc)
        return

      superDoc.getMap(folderName.value ?? '').set(
        documentName.value ?? doc.value?.guid ?? '',
        doc.value,
      )
    })

    const providers = new Map<new (...args: any[]) => Provider, Map<string, Provider>>()

    onUnmounted(() => {
      providers.forEach((map) => {
        map.forEach(provider => provider.destroy())
      })
    })

    provideDocumentContext({
      doc: doc.value,
      providers,
    })

    return () => {
      return ctx.slots.default?.()
    }
  },
})
