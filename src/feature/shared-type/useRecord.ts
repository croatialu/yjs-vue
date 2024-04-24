import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'
import { useMap } from './useMap'
import type { Updater } from './utils'
import { isUpdater } from './utils'

const MAP_KEY = 'YJS_VUE___RECORD'

export function useRecord<T>(name: string): [ComputedRef<T | undefined>, (value: Updater<T | undefined>) => void] {
  const [map, setMap] = useMap(MAP_KEY)

  // setRecord(defaultValue as any)

  const record = computed(() => {
    return map.value[name] as T | undefined
  })

  function setRecord(value: Updater<T>) {
    setMap((draft) => {
      const r = isUpdater(value) ? value(draft[name]) : value

      draft[name] = r
    })
  }

  return [record, setRecord] as any
}
