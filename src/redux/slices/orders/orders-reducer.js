import {
    CREATE_ORDER_FAIL,
    FETCH_ORDERS_FAIL,
    FETCH_ORDERS_START,
    FETCH_ORDER_SUCCESS,
    CLEAR_ERROR
} from './orders-types';

const INITIAL_STATE = {
    orders: null,
    loading: false,
    error: null,
}

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders: [...action.payload],
            };
        case FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export default ordersReducer;