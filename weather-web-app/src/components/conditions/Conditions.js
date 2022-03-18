import styles from "./Conditions.module.css";

const Conditions = (props) => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className={styles.container}>
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <ul>
            <li>{Math.round(props.responseObj.main.temp)}&deg;</li>
            <li>Low: {Math.round(props.responseObj.main.temp_min)}&deg;</li>
            <li>High: {Math.round(props.responseObj.main.temp_max)}&deg;</li>
            <li>
              Feels like: {Math.round(props.responseObj.main.feels_like)}&deg;{" "}
            </li>
            <li>{currentTime}</li>
            <li>
              Current conditions: {props.responseObj.weather[0].description}
            </li>
            <li>{Math.round(props.responseObj.wind.speed)}mph</li>
            <li>
              Humidity: {Math.round(props.responseObj.main.humidity)}&#37;
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

//Sample json returned data

// test({
//   coord: { lon: -0.1257, lat: 51.5085 },
//   weather: [
//     { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
//   ],
//   base: "stations",
//   main: {
//     temp: 43.34,
//     feelslike: 35.82,
//     tempmin: 41.45,
//     temp_max: 45.14,
//     pressure: 1022,
//     humidity: 89,
//   },
//   visibility: 10000,
//   wind: { speed: 16.11, deg: 290, gust: 27.63 },
//   clouds: { all: 75 },
//   dt: 1647472295,
//   sys: {
//     type: 2,
//     id: 2019646,
//     country: "GB",
//     sunrise: 1647411165,
//     sunset: 1647453942,
//   },
//   timezone: 0,
//   id: 2643743,
//   name: "London",
//   cod: 200,
// });

export default Conditions;
