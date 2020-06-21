import Axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

interface FetchToDosAction {
  type: ActionTypes.FETCH_TO_DOS_SUCCESS,
  payload: ToDo[],
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => async (dispatch: Dispatch) => {
  const { data } = await Axios.get<ToDo[]>(url);

  dispatch<FetchToDosAction>({
    type: ActionTypes.FETCH_TO_DOS_SUCCESS,
    payload: data,
  });
};