export const useCombinedReducers = useReducers => {
  // Global State
  const state = Object.keys(useReducers).reduce(
    (acc, key) => ({ ...acc, [key]: useReducers[key][0] }),
    {}
  )

  // Global Dispatch Function
  const dispatch = action =>
    Object.keys(useReducers)
      .map(key => useReducers[key][1])
      .forEach(fn => fn(action))

  return [state, dispatch]
}
