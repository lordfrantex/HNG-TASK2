export const initialCartObject = {
    cartItems: [],
    cartTotal: 0,
    page: 1,
    size: 10
}

export function cartReducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case 'INITIALIZE':
            return action.payload;
            break;
        case 'DECREASE_PAGINATION':
            return {
                ...state,
                page: state.page--
            }
            break;
        case 'INCREASE_PAGINATION':
            return {
                ...state,
                page: state.page++
            }
            break;
        case 'UPDATE_TOTAL_CART': {

            return {
                ...state,
                cartTotal: payload
            }
        }
            break;

        case 'INCREASE_QUANTITY': {
            const increaseQuantity = state.cartItems.map(item => item.id === payload.id ? { ...item, quantityOrdered: item.quantityOrdered + 1 } : item)
            return {
                ...state,
                cartItems: increaseQuantity,
            }

        }

            break;
        case 'DECREASE_QUANTITY': {
            let decreaseQuantity = state.cartItems.map(item => item.id === payload.id ? { ...item, quantityOrdered: Math.max(item.quantityOrdered - 1, 1) } : item)


            return {
                ...state,
                cartItems: decreaseQuantity
            }

        }

            break;
        case 'REMOVE_FROM_CART': {
            const updateCartItem = state.cartItems.filter(item => item.id !== payload.id)
            return {
                ...state,
                cartItems: updateCartItem
            }

        }
            break;
        case 'CLEAR_CART': {
            return {
                ...state,
                cartItems: [],
            }

        }
            break;
        case 'ADD_TO_CART': {

            const alreadyExists = state.cartItems.find(item => item.id === payload.id)
            if (alreadyExists) {
                const updateItem = state.cartItems.map(item => item.id === alreadyExists.id ? { ...item, quantityOrdered: item.quantityOrdered + 1 } : item)
                return {
                    ...state,
                    cartItems: updateItem
                }
            } else {

                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...payload, quantityOrdered: 1 }],
                }
            }

        }


            break;

        default:
            break;
    }
}