import './App.css';
import Form from './components/Form';
import ConditionalRendering from './components/ConditionalRendering';
function App() {
  const person = {
    name: "Bob",
    age: 50,
    hairColor: "Green"
  }
  const animals = ["🦓", "🐼", "🐯", "🐲"]
  const people = ["James", "Roben", "Chris"]
  return (
    <div className="App">
      <h1>Functional Component</h1>
      {/* <CountFunction /> */}
      {/* {animals.map((animal, i) => {

        return <FunctionalComp animal={animals} key={i} />
      })} */}
      {/* <FunctionalComp people={people} /> */}
      {/* <Form /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
