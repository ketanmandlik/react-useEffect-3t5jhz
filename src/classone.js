import Recat, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    this.state = {
      windowWidth: window.innerWidth
    };
  }
  componentDidMount() {
    //Life cycle when component loads
  }
}
