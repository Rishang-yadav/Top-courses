import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const[text,setText] = useState('');
  const[name,setName] = useState('amit');

  //variation 1 -> every Render
  // useEffect(()=>{
  //   console.log("UI rendering done");
  // });

  //variation 2 -> first Render
  // useEffect(()=>{
  //   console.log("first render");
  // },[]);


  //variation 3 -> first render+ whenever dependence changes
  // useEffect(()=>{
  //   console.log("Chane observed");
  // },[name]);

  //variation 4 -> to handle the unmounting of a component
  useEffect( () => {
    //add event listener
    console.log("listener added");

    return () =>{
    console.log("listener removed");
    }

  },[text]);



  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
