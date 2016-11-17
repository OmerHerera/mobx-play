import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Label extends Component {
  render() {
    return (
      <div>
        <label>{this.props.appState.text}</label>
      </div>
    );
  }
};

export default Label;
