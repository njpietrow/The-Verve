import { UPDATE_FILTER,  REMOVE_FILTER } from "../actions/filter_actions"

const defaultFilters = Object.freeze({
  category: "coffee",
});

const filterReducer = (state = defaultFilters, action) => {
  Object.freeze(state)
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value };
      return Object.assign({},state,newFilter);
    case REMOVE_FILTER:
      let newState = Object.assign({}, state);
      delete newState[action.filter];
      return newState;
    default:
      return state;
  }
}

export default filterReducer; 