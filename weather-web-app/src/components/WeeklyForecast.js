import ForecastConditions from "./conditions/ForecastConditions";
import Card from "./elements/Card";
import styles from "./WeeklyForecast.module.css";
import { useState, useEffect } from "react";

const WeeklyForecast = () => {
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
        `https://community-open-weather-map.p.rapidapi.com/forecast?&lat=${latitude}&lon=${longitude}&units=imperial`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
            "X-RapidAPI-Key":
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
    <div className={styles.container}>
      <Card>
        <ForecastConditions responseObj={responseObj} />
      </Card>
      <Card>
        <ForecastConditions responseObj={responseObj} />
      </Card>
      <Card>
        <ForecastConditions responseObj={responseObj} />
      </Card>
      <Card>
        <ForecastConditions responseObj={responseObj} />
      </Card>
      <Card>
        <ForecastConditions responseObj={responseObj} />
      </Card>
    </div>
  );
};

export default WeeklyForecast;
