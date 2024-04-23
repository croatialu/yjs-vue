import type * as Y from 'yjs'
import { useDocumentContext } from './context'

export function useDoc(): Y.Doc {
  const { doc } = useDocumentContext()

  if (doc !== null) {
    return doc
  }
  else {
    throw new Error(
      'Could not retrieve a document. Please wrap in a DocumentProvider.',
    )
  }
}
