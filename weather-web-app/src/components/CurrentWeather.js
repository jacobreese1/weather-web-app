import styles from "./CurrentWeather.module.css";
import { useState, useEffect } from "react";
import Conditions from "./conditions/Conditions";

const CurrentWeather = () => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [responseObj, setResponseObj] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?&lat=${latitude}&lon=${longitude}&units=imperial`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":
              "2285fd6af2mshbb0083a4e670696p11ba94jsn7e53884c3285",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          setResponseObj(response);
        });
    };
    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default CurrentWeather;
