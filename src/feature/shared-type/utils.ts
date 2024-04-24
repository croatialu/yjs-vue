export const deepClone = <T = any>(obj: T): T => JSON.parse(JSON.stringify(obj))

export type Updater<T> = ((state: T) => void) | T

export function isUpdater<T>(value: Updater<T>): value is ((state: T) => void) {
  return typeof value === 'function'
}
