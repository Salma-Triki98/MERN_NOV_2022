import './App.css';
import AnotherComponent from './components/AnotherComponent';

function App() {

  const x = 3; //?pass variables to the HTML (1)

  const person = { //? can't just show the object in HTML; it will break (2)
    name: "Joe",
    age: 37,
    favFood: "🍕"
  }

  //? (3)
  const animals = ["tiger", "elephant", "zebra"];

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>React is a Framework 😊🚀</h1>
        <p>
          {/*Open React Portal */}{/* Transferred a variable from my function into the browser */}
          {/* x = {x} */}
          x = {JSON.stringify(person)} {/* useful for debugging; stringifies the object */} <br />

          {/* array = {JSON.stringify(animals)} */}
        </p>
        <ul>
          {
            animals.map((el, idx) => {
              return <li key={idx}>{el}</li> //? (3) with the key, React knows what we are rendering; keep track of what elements have been rendered 
            })
          }
        </ul>
        <AnotherComponent person={person} x={x} /> {/*  */}
      </div>
    </fieldset>
  );
}
export default App;