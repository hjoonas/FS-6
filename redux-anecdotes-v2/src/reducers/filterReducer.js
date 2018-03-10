const initialFilter = ''

const filterReducer = (state = initialFilter, action) => {
    switch (action.type) {
        case 'SET_FILTER':
          return action.filter
        case 'DELETE_FILTER':
          return initialFilter
        default:
          return state
      }
}
  
export const updateFilter = (filter) => {
  return {
      type: 'SET_FILTER',
      filter
  }
}
  
export default filterReducer