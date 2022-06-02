import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner} from './components/Spinner'
import './App.css';

import PokeList from './components/PokeList';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
        <Route exact path='/' element={ <PokeList/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
