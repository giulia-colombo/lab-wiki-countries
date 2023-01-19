import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import countriesData from "./countries.json"
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <h1>Country List</h1>
      <Navbar/>
      <CountriesList countries={countries}/>
    </div>
  );
}

export default App;
