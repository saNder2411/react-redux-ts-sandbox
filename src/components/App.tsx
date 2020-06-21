import React, { Component } from 'react';

interface AppProps {
 color?: string;
}

interface AppState {
  counter: number;
}

export class App extends Component<AppProps, AppState> {

  state = { counter: 0 };

  onIncrement = ():void => {
    this.setState((prevState: AppState): AppState => ({ counter: prevState.counter + 1 }));
  };

  onDecrement = ():void => {
    this.setState((prevState: AppState): AppState => ({ counter: prevState.counter - 1 }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {counter}
      </div>
    )
  }

}