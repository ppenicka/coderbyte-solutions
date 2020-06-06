import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true};
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{ this.state.toggle ? 'ON' : 'OFF' }</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);