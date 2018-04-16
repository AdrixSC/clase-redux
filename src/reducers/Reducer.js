let initialState = { count: 0}

let reducer = (state = initialState, action) => {
  let newState;
    switch (action.type) {
        case "INCREMENTAR_CONTADOR":
        //state.count = state.count + 1; (mutando el estado)
        newState = { //creando nuevo objeto para no mutar el estado
          count: state.count + 1
        }
          return newState;
        case "DECREMENTAR_CONTADOR":
        newState = {
          count: state.count - 1
        }
          return newState;
        default:
          return state;
    }
}

export default reducer;