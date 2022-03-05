import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import WeeklyForecast from "./components/WeeklyForecast";
import { useEffect, useState } from "react";

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=imperial&appid=1e39a7bcb850e84609518a1b0086e36e`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [latitude, longitude]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar input={location} />
        <CurrentWeather />
        <WeeklyForecast />
      </header>
    </div>
  );
}

export default App;
