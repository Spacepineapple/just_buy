//Set initial state
const initialState = {
        products: [],
}

let currentId = 0;

//Create function to generate id
function generateId() {
    return currentId++;
}

//Create function to handle cart actions
function cartReducer(state = initialState, action) {
    //Enable multiple actions based on message
    switch (action.type) {
        //If product is added
        case "cart/productAdded": {
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