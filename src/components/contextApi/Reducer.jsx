export const initialState = {
    basket: [],
    user: null
};

export const getCartTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {

    console.log(action)

    switch(action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
