import styles from "./ForecastConditions.module.css";

const ForecastConditions = (props) => {
  return (
    <div className={styles.container}>
      {props.responseObj.cod === 200 ? (
        <div>
          <ul>
            <li>
              Low: {Math.round(props.responseObj.list[0].main.temp_min)}&deg;
            </li>
            <li>
              High: {Math.round(props.responseObj.list[0].main.temp_max)}&deg;
            </li>
            <li>
              Feels like:{" "}
              {Math.round(props.responseObj.list[0].main.feels_like)}&deg;{" "}
            </li>
            <li>
              Current conditions:{" "}
              {props.responseObj.list[0].weather[0].description}
            </li>
          </ul>
        </div>
      ) : null}
      {/* <div className={styles.container}>
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
      </div> */}
    </div>
  );
};

//Sample json returned data

export default ForecastConditions;
