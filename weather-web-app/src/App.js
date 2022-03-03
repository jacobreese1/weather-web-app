import "./_App.scss";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <CurrentWeather />
        <WeeklyForecast />
      </header>
    </div>
  );
}

export default App;
