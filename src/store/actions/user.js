import { GET_USER } from '../constants/users';

export const fetchUser = (data) => async (dispatch) => {
  

  await dispatch({
    type: GET_USER,
    payload: data,
  });
};
