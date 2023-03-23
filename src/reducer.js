const initialState = {
    products: [],
  }

  function generateId(state=initialState) {
    return state.products.length++;
}

  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "cart/productAdded": {
        return {
            ...state,
            products: [
                ...state.products,
                {
                    id: generateId(),
                    product: action.payload,
                    count: 0,
                }
            ]
        }    
        }
      case "cart/productRemoved": {
        return {
            ...state,
            products: state.products.filter(item => item.id !== action.payload)
            }
        }
        case "cart/clearCart": {
            return {
                products: []
            }
        }
      default:
        return state
    }
  }

export default cartReducer;