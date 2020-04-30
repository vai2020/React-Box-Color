import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {             //constructor set up for State
      super(props)
      this.state={color:"blue", counter:0}         //this.state={}initialize State
      
    } 
    toggle=() => {
      this.setState ({color:"pink", counter:this.state.counter+1})
        if(this.state.color=="pink") {
        this.setState({color:"blue"})

        }
    }
    render() {
      console.log(this.state.counter)   
    
    return (
    <div className="App">
      <h1 className="c">{this.state.counter}   </h1>
     <div className="toggleBox" 
     onClick={this.toggle}  style={{backgroundColor:this.state.color}} >   </div>  
    

     {/* /* onClick={this.toggle}create a box and added toggle method */ }

    </div>
  );
}

  }

export default App;
