import { DECREASE_COUNTER, INCREASE_COUNTER, RESET } from "../type/counterType";

const initial_state = {
    counter : 0
}

const counterReducer = (state = initial_state,action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {...state,counter : state.counter + 1}
        case DECREASE_COUNTER:
            return {
                ...state,
                counter : state.counter - 1
            }
        case RESET:
            return {...state,counter : 0}
        default:
            return state 
    }
};

export {counterReducer}