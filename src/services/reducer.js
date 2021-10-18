// define all of the application level states and define actions
// to make changes to the state

export const initialState = {
  basket: [],
  user: null
}

// Selector
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amouunt, 0)
}

const reducer = (state, action) =>{
  console.log("action", action );
  switch(action.type){
    default:
      return state;
  }
}

export default reducer; 