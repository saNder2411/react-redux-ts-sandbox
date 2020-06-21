import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ToDo, fetchToDos } from '../actions';
import { StoreState } from '../reducers'

interface AppProps {
 toDos: ToDo[],
 fetchToDos(): any,
}


class _App extends Component<AppProps> {
  render() {

    return (
      <div>
      </div>
    )
  }

}

const mapStateToProps = ({ toDos }: StoreState): { toDos: ToDo[] } => ({ toDos });


export const App =  connect(mapStateToProps, { fetchToDos })(_App);