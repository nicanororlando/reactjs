import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from 'types';

export const readData = (data) => ({ type: READ_ALL_DATA, payload: data });
export const createData = (data) => ({ type: CREATE_DATA, payload: data });
export const updateData = (data) => ({ type: UPDATE_DATA, payload: data });
export const deleteData = (id) => ({ type: DELETE_DATA, payload: id });
export const noData = () => ({ type: NO_DATA });
