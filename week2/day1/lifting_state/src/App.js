import './App.css';
import React, { useState } from 'react';
import Display from './components/Display';
import Animal from './components/Animal';
import Form from './components/Form';
import Person from './components/Person';
import PersonForm from './components/PersonForm';

function App() {
  // create state variable for this component
  const [animals, setAnimals] = useState(["🦓", "🦁", "🐘", "🐒"]);
  const [people, setPeople] = useState([
    {
      name: "Toad",
      age: 30
    },
    {
      name: "Mario",
      age: 40
    },
    {
      name: "Luigi",
      age: 30
    },
    {
      name: "Princess Peach",
      age: 30
    }
  ])


  const addAnimal = (newAnimal) => {
    console.log("Hello from app.js", newAnimal);
    //? antoher method to mutate the state (step by step)
    // 1. create a copy of state
    const copyAnimals = [...animals];
    // 2. push the newAnimal inside of the copyAnimal[]
    copyAnimals.push(newAnimal);
    // 3. call setAnimals and pass it the new array
    setAnimals(copyAnimals);
    //--------------------------------
    //? one method to mutate the state (short)
    // setAnimals([...animals, newAnimal]);
    // ---------------------------------

    // const addPeople = (newPerson) => {
    //   setPeople(newPerson);
    // }
  }
  return (
    <div className="App">
      <h1>lifting state</h1>

      {/* <Display animals={animals} /> */}

      {/* <Form addAnimal={addAnimal} /> */}

      {/* { // laternative way to display each animal
        animals.map((el, i) => {
          return <Animal el={el} key={i} />
        })
      } */}
      {/* ------ people ------ */}
      <PersonForm people={people} setPeople={setPeople} />
      {people.map((person, idx) => {
        return <Person person={person} key={idx} />
      })}
    </div>
  );
}

export default App;
