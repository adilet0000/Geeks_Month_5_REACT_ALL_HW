import { createStore } from 'redux';


export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const incrementByTen = () => ({ type: 'INCREMENT_BY_TEN' });
export const decrementByTen = () => ({ type: 'DECREMENT_BY_TEN' });
export const reset = () => ({ type: 'RESET' });


const initialState = 0;

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return state + 1;
      case 'DECREMENT':
         return state > 0 ? state - 1 : state;
      case 'INCREMENT_BY_TEN':
         return state + 10;
      case 'DECREMENT_BY_TEN':
         return state >= 10 ? state - 10 : state;
      case 'RESET':
         return 0;
      default:
         return state;
   }
};

export const store = createStore(counterReducer);