import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personState, setPersonsState] = useState({
      persons : [
          {name:'Max', age:28},
          {name:'Manu', age:28},
          {name:'Stephanie', age:20}
      ]
    } );
    
    const [otherState,setOtherState] = useState("some other value");



    console.log(personState,otherState);

    const switchNameHandler = () =>{
      //console.log("was clicked");
      //Don't do this: this.state.persons[0].name='Maxmilian';
      setPersonsState({
          persons : [
            {name:'Maxmilian', age:28},
            {name:'Manu', age:28},
            {name:'Stephanie', age:34}
          ],
          otherState: personState.otherState
      });
    };

  return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch button</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobbies's racing.</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now????'));
}

export default app;

