import { types } from './types';

export const add = (num1, num2) => {
  return {
    type: types.ADD,
    payload: { num1, num2 }
  };
};

export const subtract = (num1, num2) => {
  return {
    type: types.SUBTRACT,
    payload: { num1, num2 }
  };
};

export const multiply = (num1, num2) => {
  return {
    type: types.MULTIPLY,
    payload: { num1, num2 }
  };
};

export const divide = (num1, num2) => {
  return {
    type: types.DIVIDE,
    payload: { num1, num2 }
  };
};
