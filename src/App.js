import React, { Component } from 'react';

import NameComponent from './componets/NameComponent';

class App extends Component {
  componentDidMount(){
    console.log('mounted');
  }
  consoleLog(){
    console.log('vivek');
  }
  render() {
 var word ="vivek kumar jaiswal";
 var array = ['welcome','vivek','kumar','jaiswal'];
 var arrayToRender = [];
 array.forEach(function(word){
arrayToRender.push(
  <p>{word}</p>
);
 });
    return (
      <div>
      {arrayToRender}
        <NameComponent/>
        <button onClick ={this.consoleLog}>
          <NameComponent/>
           </button>
      </div>
    );
  }
}

export default App;
