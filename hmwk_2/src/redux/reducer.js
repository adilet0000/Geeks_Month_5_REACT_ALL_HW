import { types } from './types';

const initialState = {
  result: 0,
};

export const calculatorReducer = (state = initialState, action) => {
//   const { num1, num2 } = action.payload;
  
  switch (action.type) {
    case types.ADD:
      return { ...state, result: action.payload.num1 + action.payload.num2 };
    case types.SUBTRACT:
      return { ...state, result: action.payload.num1 - action.payload.num2 };
    case types.MULTIPLY:
      return { ...state, result: action.payload.num1 * action.payload.num2 };
    case types.DIVIDE:
      return { ...state, result: action.payload.num2 !== 0 ? action.payload.num1 / action.payload.num2 : 'Division by zero is not avaible ¯\\(°_o)/¯' };
    default:
      return state;
  }
};
