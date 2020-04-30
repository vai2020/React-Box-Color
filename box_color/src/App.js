import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {             //constructor set up for State
      super(props)
      this.state={         }         //initialize State
    }
          
  render() {
    return (
    <div className="App">
     <div className="color" onClick={this.toggle}   >   </div>  //create a box and added toggle function//


    </div>
  );
}

  }

export default App;
