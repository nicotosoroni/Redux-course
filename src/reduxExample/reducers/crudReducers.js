import {
  READ_ALL_DATA,
  CREATE_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  NO_DATA,
} from 'reduxExample/types';

export const crudInitialState = {
  db: null,
};

export const crudReducer = (state, action) => {
  switch (action.type) {
    case READ_ALL_DATA: {
      return { ...state, db: action.payload };
    }
    case CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case NO_DATA: {
      return crudInitialState;
    }
    default:
      return state;
  }
};
