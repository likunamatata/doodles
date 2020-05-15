import React, {Component} from 'react';
import { frame } from '../helpers/home-helpers'
import '../styles/home.css'


class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {
    frame()
  }

  render() {
    return (
      <div className="Home">
        <h1>Hi Hello I'm home</h1>
        </div>
    );
  }
 
}

export default Home;