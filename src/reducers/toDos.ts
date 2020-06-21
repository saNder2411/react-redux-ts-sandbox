import { ToDo, Action, ActionTypes } from '../actions';

export const toDosReducer = (state: ToDo[] = [], action: Action): ToDo[] => {

  switch (action.type) {
    case ActionTypes.FETCH_TO_DOS_SUCCESS:
      state = action.payload;
      return state;

    case ActionTypes.DELETE_TO_DO:
      // DON'T DO THAT!!!
      return state.filter((todo: ToDo) => todo.id !== action.payload);
    default:
      return state;
  }

};