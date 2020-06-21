import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ToDo, fetchToDos, deletedToDo } from '../actions';
import { StoreState } from '../reducers'

interface AppProps {
 toDos: ToDo[];
 fetchToDos: Function;
 deletedToDo: typeof deletedToDo;
}

interface AppState {
  fetching: boolean;
}


class _App extends Component<AppProps, AppState> {

  state = { fetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.toDos.length && this.props.toDos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchToDos();
    this.setState({ fetching: true });
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
        <p>{this.state.fetching ? 'Loading...' : null}</p>
        {this.renderList()}
      </div>
    )
  }

}

const mapStateToProps = ({ toDos }: StoreState): { toDos: ToDo[] } => ({ toDos });


export const App =  connect(mapStateToProps, { fetchToDos, deletedToDo })(_App);