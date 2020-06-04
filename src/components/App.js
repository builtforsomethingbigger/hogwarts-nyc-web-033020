import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigIndex from "./PigIndex"

class App extends Component {
  constructor(props){
    super()
    
    this.state = {
        
    }   
}


  // fetchHogData = () => {    
  //   const apiUrl = '../src/porkers_data.js'

  //   fetch(apiUrl)
  //   .then(resp => resp.json())
  //   .then(hogs => this.setState({ hogs }))
  //   // .then(data=>console.log(data))
  // }  

  render() {

    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <PigIndex hogData={hogs}  />
      </div>
    );
  }
}

export default App;
