import { TYPES } from 'reducerExample/actions/crudActions';

export const initialState = {
  db: null,
};

export const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      return { ...state, db: action.payload };
    }
    case TYPES.CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case TYPES.UPDATE_DATA: {
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.DELETE_DATA: {
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.NO_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};
