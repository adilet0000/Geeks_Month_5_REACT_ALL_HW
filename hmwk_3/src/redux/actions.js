import axios from 'axios';
import { types } from './types';

export const fetchCatFact = () => async (dispatch) => {
  dispatch({ type: types.FETCH_CAT_FACT_REQUEST });

  try {
    const response = await axios.get('https://catfact.ninja/fact');
    dispatch({ type: types.FETCH_CAT_FACT_SUCCESS, payload: response.data.fact });
  } catch (error) {
    dispatch({ type: types.FETCH_CAT_FACT_FAILURE, payload: error.message });
  }
};
