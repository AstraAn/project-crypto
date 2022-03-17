import { CREATE_ADDRESS, DELETE_ACCOUNT, GET_BALANCE, ERROR_ADDRESS } from './types';

const initialState = []

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ADDRESS:
            return [...state, action.payload]
        case DELETE_ACCOUNT:
            state = state.filter(account => account.id !== action.payload.id);
            return state;
        case GET_BALANCE:
            state = state.map(account => {
                account.balance = action.payload[account.currencyAddress].final_balance
                return account
            })
            return state;
        case ERROR_ADDRESS:
            alert("Impossible. One or more addresses are specified incorrectly.");
            return state;
        default: return state;
    }
}