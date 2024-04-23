import type * as Y from 'yjs'
import { inject, provide } from 'vue-demi'
import type { Provider } from './types'

// export const DocumentContext = React.createContext<{
//   doc: Y.Doc | null
//   providers: Map<new (...args: any[]) => Provider, Map<string, Provider>> | null
// }>({
//       doc: null,
//       providers: null,
//     })

const YJS_VUE_IDENTIFIER = 'YJS_VUE'

interface DocumentContext {
  doc: Y.Doc | null
  providers: Map<new (...args: any[]) => Provider, Map<string, Provider>> | null
}

export function provideDocumentContext(ctx: DocumentContext) {
  provide(YJS_VUE_IDENTIFIER, ctx)
  return ctx
}

export function useDocumentContext(): DocumentContext {
  const ctx = inject<DocumentContext>(YJS_VUE_IDENTIFIER)

  if (!ctx)
    throw new Error('Could not retrieve document context. Please wrap in a DocumentProvider.')

  return ctx
}
