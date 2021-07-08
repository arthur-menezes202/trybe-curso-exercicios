import logo from './logo.svg';
import './App.css';
import './data.js'
import pokemons from './data.js';
function App() {
  return (
    <div className="App">
      <p>{pokemons[0].name}</p>
      <p>{pokemons[0].type}</p>
      <p>{pokemons[0].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[0].image} />
      <p>{pokemons[1].name}</p>
      <p>{pokemons[1].type}</p>
      <p>{pokemons[1].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[1].image} />
      <p>{pokemons[2].name}</p>
      <p>{pokemons[2].type}</p>
      <p>{pokemons[2].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[2].image} />
      <p>{pokemons[3].name}</p>
      <p>{pokemons[3].type}</p>
      <p>{pokemons[3].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[3].image} />
      <p>{pokemons[4].name}</p>
      <p>{pokemons[4].type}</p>
      <p>{pokemons[4].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[4].image} />
      <p>{pokemons[5].name}</p>
      <p>{pokemons[5].type}</p>
      <p>{pokemons[5].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[5].image} />
      <p>{pokemons[7].name}</p>
      <p>{pokemons[7].type}</p>
      <p>{pokemons[7].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[7].image} />
      <p>{pokemons[8].name}</p>
      <p>{pokemons[8].type}</p>
      <p>{pokemons[8].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
      <img src={pokemons[8].image} />
      
    </div>
  );
}

export default App;
