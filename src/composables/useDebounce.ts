export function useDebounce(delay: number = 300) {
  const debounce = <T extends unknown[]>(fn: (...args: T) => void) => {
    let timeoutId: number | null = null

    return (...args: T): void => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }

  return {
    debounce,
  }
}
