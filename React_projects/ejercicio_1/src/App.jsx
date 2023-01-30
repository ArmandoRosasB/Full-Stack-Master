import logo from './logo.svg';
import './App.css';
import { YearComponent } from './components/YearComponent';

function App() {
  const fecha = new Date();
  const current_year = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Year navigator</h1>

        <YearComponent year={current_year}></YearComponent>
      </header>
    </div>
  );
}

export default App;
