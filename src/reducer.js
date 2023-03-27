import { persistantState } from "./store";

//Set initial state
/*
const initialState = {
    products: [],
}
*/
/*
if (localStorage.getItem(products) === Null) {
} else {
    initialState = localStorage.getItem(products)
}
*/

//Create function to generate id
function generateId(state=persistantState) {
    return state.currentId+1;
}

//Create function to handle cart actions
function cartReducer(state=persistantState, action) {
    //Enable multiple actions based on message
    switch (action.type) {
        //If product is added
        case "cart/productAdded": {
            if (state.products.find(item => item.product.id===action.payload.id)) {
                return {...state, products: state.products.map(item => item.product.id === action.payload.id ? {...item, count:item.count+1} : item)}                
            } else {
                let currentId = state.currentId;
                return {
                    //Maintain existing state
                    ...state,
                    //Update products
                    products: [
                        //Include existing products
                        ...state.products,
                        //Add additional product 
                        {
                            id: generateId(),
                            product: action.payload,
                            count: 0,
                        }
                    ],
                    currentId: state.currentId+1
                }        
            }
        }
        //If product is removed
        case "cart/productRemoved": {
            return {
                //Maintain existing state
                ...state,
                //Filter products to remove item with desired id
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