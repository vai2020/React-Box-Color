import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {             //constructor set up for State
      super(props)
      this.state={color:"blue"}         //this.state={}initialize State
    } 
    toggle=() => {
      this.setState ({color:"pink"})
    }
          
  render() {
    return (
    <div className="App">
     <div className="toggleBox" 
     onClick={this.toggle}  style={{backgroundColor:this.state.color}} >   </div>  
    

     {/* /* onClick={this.toggle}create a box and added toggle method */ }

    </div>
  );
}

  }

export default App;
