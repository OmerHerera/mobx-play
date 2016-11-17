import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Input extends Component {
  handleChange(event) {
    this.props.appState.userInput = event.target.value;
  }
  render() {
    return (
      <div>
        <input type="text"
               placeholder="@name"
               value={this.props.appState.userInput}
               onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
};

export default Input;
