import './App.css';
import imagen1 from './img/rick-morty.png';
import {useState} from 'react';
import Characters from './Components/Characters';
function App() {

  const [result, setCharacters] = useState(null);

  const reqApi = async () => {
    try {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      if (api.status === 200) {
        const characterApi = await api.json();
        //console.log(characterApi);
        //console.log(characters);
        setCharacters(characterApi.results);
        console.log(result);
      }
    } catch (Exception) {
      console.error('Error en consumo de api');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and Morty</h1>
        {/* Trae informacion el characters */}
        {result? (
          <Characters c={result}></Characters>
        ) : (
        <>
        <img src={imagen1} alt='Rick and Morty' className='img-home'></img>
        <button onClick={reqApi} className='btn-search'>
          Buscar personajes
        </button>
        </>  
        )}
        
      </header>
    </div>
  );
}

export default App;
