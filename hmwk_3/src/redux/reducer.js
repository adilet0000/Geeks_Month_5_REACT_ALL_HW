import { types } from './types';

const initialState = {
  catFact: '',
  loading: false,
  error: null
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CAT_FACT_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_CAT_FACT_SUCCESS:
      return { ...state, loading: false, catFact: action.payload };
    case types.FETCH_CAT_FACT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default catReducer;
