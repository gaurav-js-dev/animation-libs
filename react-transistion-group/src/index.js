import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const timeout = 500;

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      open: false
    }

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(({ open }) => ({ open: !open }))
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.toggleOpen}>Toggle open</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={timeout}
          transitionLeaveTimeout={timeout}
        >
          {open ? <Hello /> : null}
        </CSSTransitionGroup>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
