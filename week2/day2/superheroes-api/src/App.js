import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [superHeroes, setSuperHeroes] = useState([]);

  // console.log("1, before useEffect");

  // useEffect Hook that will only excuste when the component has finished rendering
  useEffect(() => {
    console.log("2, inside of useEffect");
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(response => {
        // console.log("✅", response.data);
        setHeroes(response.data)
      }).catch(err => {
        console.log("❌", err);
      })
  }, [])
  // console.log("3, after useEFfect");

  // Vanilla JS to fetch Data from an API
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(someResponse => {
        return someResponse.json()
      })
      .then(apiData => {
        console.log(apiData);
        setSuperHeroes(apiData);
      })
      .catch(someError => {
        console.log(someError)
      })
  }

  // Axios Fetch
  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        console.log("✅", res.data);
        setSuperHeroes(res.data);
      })
      .catch(err => {
        console.log("❌", err);
      })
  }

  return (
    <div className="App">
      <div className='container mt-5'>
        <h1> SuperHeros API 🦸‍♀️🦸‍♂️</h1>
        <hr />
        <button className='btn btn-outline-dark shadow p-3 mb-5 rounded' onClick={fetchHeroes}>Fetch Them All ⚡</button>
        <button className='btn btn-outline-danger shadow p-3 mb-5 rounded ms-3' onClick={axiosHeroes}>Axios 🚀</button>
        <hr />
        {/* {JSON.stringify(superHeroes)} */}
        <br />
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Hero Name</th>
              <th>Full Name</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {superHeroes.map((hero, idx) => {
              return (
                <tr key={idx}>
                  <td><img className='rounded w-50' src={hero.images.sm} alt="hero img" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "N/A"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
