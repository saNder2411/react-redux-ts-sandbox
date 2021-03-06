import { FetchToDosAction, DeleteToDoAction } from './';

export enum ActionTypes {
  FETCH_TO_DOS_SUCCESS = 'FETCH_TO_DOS_SUCCESS',
  DELETE_TO_DO = 'DELETE_TO_DO',
}

export type Action = FetchToDosAction | DeleteToDoAction;