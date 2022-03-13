import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import WeeklyForecast from "./components/WeeklyForecast";
import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SearchBar /> */}
        <Forecast />
        <CurrentWeather />
        <WeeklyForecast />
      </header>
    </div>
  );
};

export default App;
