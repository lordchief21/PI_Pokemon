import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner} from './components/Spinner'
import './App.css';

import PokeList from './components/PokeList';
import PokeCreate from './components/PokeCreate';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
        <Route exact path='/' element={ <PokeList/> }/>
        <Route exact path='/pokeCreate' element={<PokeCreate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
