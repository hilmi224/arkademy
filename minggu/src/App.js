import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
      
      
  }
  };

  headleClick(){
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.headleClick()}>Button</button>
      </div>
    );
  }
}

export default App;