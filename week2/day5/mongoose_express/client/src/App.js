import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [ninja, setNinja] = useState([]);
  const [name, setName] = useState("");
  const [numBelt, setNumBelt] = useState(0);
  const [grad, setGrad] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/ninjas")
      .then((allNinjas) => {
        console.log("✅✅", allNinjas.data);
        setNinja(allNinjas.data)
      })
      .catch((err) => { console.log("❌❌", err); })

  }, [])

  const handleNinja = (e) => {
    e.preventDefault();
    const newNinja = {
      name: name,
      num_belts: numBelt,
      is_graduating: grad
    }
    console.log(newNinja);
    axios.post("http://localhost:8000/api/ninjas", newNinja)
      .then(newlyCreatedNinja => { console.log("✅", newlyCreatedNinja) })
      .catch(err => { console.log("❌", err) })
  }


  return (
    <div className="App">
      <h1>Ninja</h1>
      <div>
        {JSON.stringify(name)} <br />
        {JSON.stringify(numBelt)} <br />
        {JSON.stringify(grad)} <br />
      </div>
      <form onSubmit={handleNinja}>
        name: <input value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
        number of belts: <input type="number" onChange={(e) => { setNumBelt(e.target.value) }} value={numBelt} /> <br />
        Graduating: <input type="checkbox" onChange={(e) => { setGrad(e.target.checked) }} checked={grad} /> <br />
        <button>Create a Ninja</button>
      </form>
      <br />
      <hr />




      {ninja.map((element) => {
        return <div key={element._id}>
          name: {element.name} <br />
          number of belts: {element.num_belts} <br />
          Grad 🎓: {element.is_graduating ? "✅" : "❌"} <br />
          <hr />
        </div>
      })}
    </div>
  );
}

export default App;
