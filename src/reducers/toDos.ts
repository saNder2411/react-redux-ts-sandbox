import { ToDo, FetchToDosAction } from '../actions';
import { ActionTypes } from '../actions/types'



export const toDosReducer = (state: ToDo[] = [], action: FetchToDosAction): ToDo[] => {

  switch (action.type) {
    case ActionTypes.FETCH_TO_DOS_SUCCESS:
      state = action.payload;
      return state;
    default:
      return state;
  }

};