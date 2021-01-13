import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// The Provider is a special type of React component that we wrap our application in so
// it can make the state data that's passed into it as a prop available to all other components.
// The Consumer is our means of grabbing and using the data that the Provider holds for us.
const StoreContext = createContext();
const { Provider } = StoreContext;

//instantiate our intial global state with the useProductReducer ()
//this will return state and dispatch
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);
  // now we return the new state and dispatch the function provided as data for the value prop
  return <Provider value={[state, dispatch]} {...props} />;
};

// When we execute this function from within a component, we will receive
// the[state, dispatch] data our StoreProvider provider manages for us
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
