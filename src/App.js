import React, {useState} from 'react';
//import Hello from './SayHello';
import Tweet from './Tweet'

function App() {

  

  

  return (
    <div className="app">
      
      
      {/* <h1>Hello React</h1> */}
      <Tweet name='Iron Man' msg='I am the BEST'/>
      <Tweet name='Thor' msg='I am the strongest avenger'/>
      <Tweet name='Spider Man' msg='I am the youngest avenger'/>
      <Tweet name='Hulk' msg='Smash you!'/>
      {/* <h1>App Component</h1>
      <Hello /> */}
    </div>
  );
}

export default App;
