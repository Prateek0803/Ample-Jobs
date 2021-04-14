import './App.css';
import {Grid} from '@material-ui/core'
import Header from './components/header/Header';
import FilterBar from './components/FitlerBar/FilterBar';
function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
    </div>
  );
}
export default App;
