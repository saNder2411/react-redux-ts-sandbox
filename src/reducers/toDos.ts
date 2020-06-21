import { ToDo, FetchToDosAction, ActionTypes } from '../actions';


export const toDosReducer = (state: ToDo[] = [], action: FetchToDosAction): ToDo[] => {

  switch (action.type) {
    case ActionTypes.FETCH_TO_DOS_SUCCESS:
      state = action.payload;
      return state;
    default:
      return state;
  }

};