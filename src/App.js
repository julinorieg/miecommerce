import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={"Tu Super Online!"}/>
    </div>
  );
}

export default App;
