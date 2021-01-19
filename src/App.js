import './App.css';
import { Component } from 'react';

class App extends Component {
state = {
  compteur: 0,
}

incremente = () => {
  this.setState({
    compteur: this.state.compteur +1 
  })
}

decremente = () => {
  this.setState({
    compteur: this.state.compteur -1 
  })
}

swapClass (){
  let span = document.getElementById("span");
  span.classList.toggle("textRed")
}
  render ()
 {
  return (
   <div className="App">
     <span id="span">{this.state.compteur}</span>
     <button onClick={this.incremente}>Click +1</button>
     <button onClick={this.decremente}>Click -1</button>
     <button onClick={this.swapClass}>Swap red</button>
   </div>
 );
  }
}

export default App;
