import React from 'react';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <Counter />
        <h2>Welcome!</h2>
        <ul>
          <li><a href="http://brunch.io/">Brunch</a></li>
          <li><a href="https://facebook.github.io/react/">React</a></li>
          <li><a href="http://redux.js.org">Redux</a></li>
        </ul>
      </div>
    );
  }
}
