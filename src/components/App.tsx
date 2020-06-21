import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ToDo, fetchToDos, deletedToDo } from '../actions';
import { StoreState } from '../reducers'

interface AppProps {
 toDos: ToDo[];
 fetchToDos: Function;
 deletedToDo: typeof deletedToDo;
}


class _App extends Component<AppProps> {

  onButtonClick = (): void => {
    this.props.fetchToDos();
  };

  onTodoClick = (id: number): void => {
    this.props.deletedToDo(id);
  };

  renderList(): JSX.Element[] {
    const { toDos } = this.props;

    return toDos.map(({id, title}: ToDo) => (
      <div onClick={() => this.onTodoClick(id)} key={id}>
        {title}
      </div>
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


export const App =  connect(mapStateToProps, { fetchToDos, deletedToDo })(_App);