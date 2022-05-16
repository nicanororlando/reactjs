import { TYPES } from 'actions/reducer/crud.actions';

const crudInitialState = { db: null };

export default function crudReducer(state = crudInitialState, action) {
  switch (action.type) {
    case TYPES.CREATE_DATA:
      break;
    case TYPES.READ_ALL_DATA:
      break;
    case TYPES.READ_ONE_DATA:
      break;
    case TYPES.UPDATE_DATA:
      break;
    case TYPES.DELETE_DATA:
      break;
    case TYPES.NO_DATA:
      return crudInitialState;
    default:
      return state;
  }
}
