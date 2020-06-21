import Axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface FetchToDosAction {
  type: ActionTypes.FETCH_TO_DOS_SUCCESS,
  payload: ToDo[],
}

export interface DeleteToDoAction {
  type: ActionTypes.DELETE_TO_DO,
  payload: number,
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => async (dispatch: Dispatch) => {
  const { data } = await Axios.get<ToDo[]>(url);

  dispatch<FetchToDosAction>({
    type: ActionTypes.FETCH_TO_DOS_SUCCESS,
    payload: data,
  });
};

export const deletedToDo = (id: number): DeleteToDoAction => ({
  type: ActionTypes.DELETE_TO_DO,
  payload: id,
});