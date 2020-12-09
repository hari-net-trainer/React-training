import React, { Component } from 'react';
import {Layout} from './Layout'
import {Heading} from './Components/Heading'
import {Footer} from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Heading/>
          <div>
              <Layout />
          </div>
        <Footer/>
      </div>
    );
  }
}
export default App;



