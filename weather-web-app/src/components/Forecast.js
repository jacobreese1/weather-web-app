import { useState, useEffect } from "react";
import Conditions from "./conditions/Conditions";
import styles from "./Forecast.module.css";
import RadioButton from "./elements/RadioButton";

const Forecast = () => {
  //   const [longitude, setLongitude] = useState();
  //   const [latitude, setLatitude] = useState();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //       });

  //       await fetch(
  //         "https://community-open-weather-map.p.rapidapi.com/weather?q=seattle&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
  //         {
  //           method: "GET",
  //           headers: {
  //             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  //             "x-rapidapi-key":
  //               "2285fd6af2mshbb0083a4e670696p11ba94jsn7e53884c3285",
  //           },
  //         }
  //       )
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     };
  //     fetchData();
  //   }, [latitude, longitude]);
  const [responseObj, setResponseObj] = useState({});
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("imperial");

  const uriCodedCity = encodeURIComponent(city);

  const getForecast = (e) => {
    // fetch(
    //     "https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&limit=1&appid=e0bfa8943fccaf4e391b2daf5d46247d",
    //   {

    e.preventDefault();

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${uriCodedCity}&units=${units}`,
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

  const radioChangeHandler = (event) => {
    setUnits(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.forecast}
        />
        <svg
          xmlns="../images/svg/magnifying-glass.svg"
          fill="none"
          className={styles.forecastSVG}
        ></svg>
        <div className={styles.forecastRadio}>
          {/* <input
            type="radio"
            name="units"
            checked={units === "imperial"}
            value="imperial"
            id="imperial"
            onChange={(e) => setUnits(e.target.value)}
            className={styles.radioInput}
          />
          <label className={styles.radioBtnLabel}>
            <span htmlFor="imperial" className={styles.radioBtn}></span>
            Fahrenheit
          </label> */}
          {/* <input
                type="radio"
                name="units"
                checked={units === "metric"}
                value="metric"
                id="metric"
                onChange={(e) => setUnits(e.target.value)}
                className={styles.radioInput}
              />
              <label className={styles.radioBtnLabel}>
                <span htmlFor="metric" class={styles.radioBtn}></span>
                Celcius
              </label> */}
          <RadioButton
            changed={radioChangeHandler}
            id="1"
            // isSelected={units}
            label="Fahrenheit"
            value="imperial"
            name="temp"
          />
          <RadioButton
            changed={radioChangeHandler}
            id="2"
            // isSelected={units}
            label="Celcius"
            value="metric"
            name="temp"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Get Forecast
        </button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
