import React from 'react'
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('bataman');
  let [age, setAge] = useState(20);
  let [country, setCountry] = useState('India');
  let [img,setImg]= useState()

  function update(){
    setAge(30);
    setName('Superman');
    setCountry('USA');
    setImg("https://assets-in.bmscdn.com/discovery-catalog/events/et00397464-yuzkxnymar-landscape.jpg")
  }
  return(
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{country}</p>
      <img src={img} alt="" height={"400px"} width={"600px"} />
      <div><button onClick={update}>click</button></div>
    </div>
  );
 };


export default App;
