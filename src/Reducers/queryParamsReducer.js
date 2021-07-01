const initialComponent = [{ id: Date.now(), key: "", value: "" }];

const queryParamsReducer = (state = initialComponent, action) => {
  switch (action.type) {
    case "ADD_QUERYPARAMS":
      return [...state, { id: Date.now(), key: "", value: "" }];
    case "REMOVE_QUERYPARAMS":
      // // const newState = action.oldState.splice(action.index)
      // console.log(action.newState)
      // // if (newState) {

      return [...state];
    // }
    case "ADD_KEY":
      // const value=[...state][action.inputId][action.name] = action.key
      return action.value
    default:
      return state;
  }
};

export default queryParamsReducer;
