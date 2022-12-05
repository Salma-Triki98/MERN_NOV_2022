import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ninjas, setNinjas] = useState([]);
  const [name, setName] = useState("");
  const [belt, setBelt] = useState(0);
  const [grad, setIsGrad] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:8000/api/ninjas")
      .then((someResponseData) => {
        console.log(someResponseData);
        setNinjas(someResponseData.data);
      })
      .catch((err) => { console.log("❌", err); })
  }, [])

  const makeNinja = (e) => {
    e.preventDefault();
    console.log(name, belt, grad);
    const newNinja = {
      name,
      num_belts: belt,
      is_graduating: grad
    }
    axios.post("http://localhost:8000/api/ninjas", newNinja)
      .then(newCreatedNinja => { console.log("✅", newCreatedNinja) })
      .catch(err => { console.log("❌❌", err) })
  }

  return (
    <div className="App">
      <h1>Ninjas</h1>
      {/* STATE VARS */}
      <div>
        {JSON.stringify(name)}
        {JSON.stringify(belt)}
        {JSON.stringify(grad)}
      </div>

      <form onSubmit={makeNinja}>
        name: <input value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
        number of belts: <input type="number" onChange={(e) => { setBelt(e.target.value) }} value={belt} min="0" /> <br />
        graduated ? <input type="checkbox" onChange={(e) => { setIsGrad(e.target.checked) }} checked={grad} />
        <button>Create</button>
      </form>
      <hr />
      {
        ninjas.map((ninja) => {
          return <div key={ninja._id}>
            name: {ninja.name} <br />
            number of belts: {ninja.num_belts} <br />
            is graduating🎓: {ninja.is_graduating ? "✅" : "❌"}
            <hr />
          </div>
        })
      }

    </div>
  );
}

export default App;
