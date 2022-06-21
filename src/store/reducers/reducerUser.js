import produce from 'immer';

import { GET_USER } from '../constants/users';

const initialState = {
  id: null,
};

export default produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER: {
      draft.id = payload;
      break;
    }

    default:
      break;
  }
}, initialState);
