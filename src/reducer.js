const initialState = {
    products: [],
  }
  
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "cart/productAdded": {
        return {
            ...state,
            products: [
                ...state.products,
                {
                    id: "example",
                    product: action.payload,
                }
            ]
        }
      }
      case "cart/productRemoved": {
        return {
            ...state,
            products: [
                ...state.products.slice(0, action.payload),
                ...state.products.slice(action.payload + 1)
                ],
            }
        }
        case "cart/productReduced": {
            let reducedProduct = state.products.find(product => product.id === action.payload.id);
            let count = reducedProduct.count-=1;
            reducedProduct = { ...reducedProduct, count: count };
            return {
                ...state, products: [...state.products, reducedProduct]
            }
        }
        case "cart/productIncreased": {
            let increasedProduct = state.products.find(product => product.id === action.payload.id);
            let count = increasedProduct.count+=1;
            increasedProduct = { ...increasedProduct, count: count};
            return {
                ...state, products: [...state.products, increasedProduct]
            }
        }
      default:
        return state
    }
  }
  
export default cartReducer;