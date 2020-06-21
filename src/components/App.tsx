import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ToDo, fetchToDos } from '../actions';
import { StoreState } from '../reducers'

interface AppProps {
 toDos: ToDo[],
 fetchToDos(): any,
}


class _App extends Component<AppProps> {

  onButtonClick = (): void => {
    this.props.fetchToDos();
  };

  renderList(): JSX.Element[] {
    const { toDos } = this.props;

    return toDos.map(({id, title}: ToDo) => (
      <div key={id}>{title}</div>
    ));
  }

  render() {

    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }

}

const mapStateToProps = ({ toDos }: StoreState): { toDos: ToDo[] } => ({ toDos });


export const App =  connect(mapStateToProps, { fetchToDos })(_App);