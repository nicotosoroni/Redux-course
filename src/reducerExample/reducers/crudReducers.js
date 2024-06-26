import { TYPES } from 'reducerExample/actions/crudActions';

export const initialState = {
  db: null,
  loading: true,
  error: null,
  dataToEdit: null,
};

export const crudReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
    }
    case TYPES.CREATE_DATA: {
    }
    case TYPES.UPDATE_DATA: {
    }
    case TYPES.DELETE_DATA: {
    }
    case TYPES.NO_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};
