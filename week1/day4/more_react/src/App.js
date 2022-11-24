import './App.css';
import ClassComponent from './components/ClassComponent';
import Person from './components/Person';

function App() {
  //? (2) pass "num" to the class component
  //? (6) Pass a complex object and change a value

  const person = {
    name: "bob",
    favFood: "🥗",
    age: 45
  }

  return (
    <div className="App">
      <h1>More State</h1>
      <ClassComponent num={10} person={person} />
      {/* //* every componenet has its own state */}
      {/* <ClassComponent num={10} person={person} /> */}
      <Person person={person} />
    </div>
  );
}

export default App;
