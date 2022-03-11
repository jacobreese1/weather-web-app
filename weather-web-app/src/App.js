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
        `http://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=imperial&limit=1&appid=e0bfa8943fccaf4e391b2daf5d46247d`
        // `http://api.openweathermap.org/data/2.5/weather?q=Louisville,KY,usA&units=imperial&limit=1&appid=e0bfa8943fccaf4e391b2daf5d46247d`
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
        <SearchBar />
        <CurrentWeather />
        <WeeklyForecast />
      </header>
    </div>
  );
}

export default App;
