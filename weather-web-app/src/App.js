import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Forecast />
        <CurrentWeather />
        <WeeklyForecast />
      </header>
    </div>
  );
};

export default App;
