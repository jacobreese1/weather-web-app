import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import Forecast from "./components/Forecast";
import Card from "./components/elements/Card";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Forecast />
        <Card>
          <CurrentWeather />
        </Card>
        <WeeklyForecast />
      </header>
    </div>
  );
};

export default App;
