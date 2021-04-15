import Header from './components/header/Header';
import FilterBar from './components/FitlerBar/FilterBar';
import JobCards from './components/JobCards/JobCards';
function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
      <JobCards />
    </div>
  );
}
export default App;
