import type * as Y from 'yjs'
import { useDoc } from '../doc'

export function useSharedType<T extends Y.AbstractType<any>>(name: string, constructor: (new () => Y.AbstractType<any>) | undefined): T {
  const doc = useDoc()
  return doc.get(name, constructor) as T
}
