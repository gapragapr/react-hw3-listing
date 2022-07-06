import './App.css';
import data from './data/data'
import Listing from './components/Listind/LIsting';

function App() {
  return (
    <Listing items={data}></Listing>
  );
}

export default App;
