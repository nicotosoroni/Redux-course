import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from 'reduxExample/types';

export const createAction = (data) => ({ type: CREATE_DATA, payload: data });
export const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data });
export const updateAction = (data) => ({ type: UPDATE_DATA, payload: data });
export const deleteAction = (data) => ({ type: DELETE_DATA, payload: data });
export const noDataAction = () => ({ type: NO_DATA });
