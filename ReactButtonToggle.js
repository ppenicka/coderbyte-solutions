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
      (this.state.toggle) ?
      <button onClick={this.handleClick}>ON</button> :
      <button onClick={this.handleClick}>OFF</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);