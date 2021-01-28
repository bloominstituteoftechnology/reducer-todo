export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

const initialState = {
  status: StatusFilters.All,
  colors: []
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'STATUS_FILTER_CHANGED': {
      return {
        ...state,
        status: action.payload
      }
    }

    case 'COLOR_FILTER_CHANGED': {
      let { color, changeType } = action.payload
      const { colors } = state

      switch (changeType) {
        case 'added': {
          if (colors.includes(color)) {
            return state
          }
          return {
            ...state,
            colors: state.colors.concat(color),
          }
        }
        case 'removed': {
          return {
            ...state,
            colors: state.colors.filter(
              existingColor => existingColor !== color
            )
          }
        }
        default:
          return state
      }
    }
    default:
      return state
  }
}