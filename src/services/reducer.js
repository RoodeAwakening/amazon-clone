// define all of the application level states and define actions
// to make changes to the state


// initial states that we are going to be dealing with
export const initialState = {
  basket: [],
  user: null
}

// Selector
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0)
}

// Reducer
const reducer = (state, action) =>{
  console.log("action", action );

  switch(action.type){
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    default:
      return state;
  }
}

export default reducer; 