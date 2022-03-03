import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
  return (
    <div>
      <h1>Current Weather</h1>
      <ul>
        <li>Temp</li>
        <li>Hi-Lo temp for day</li>
        <li>Feels like</li>
        <li>Current Time with display options (ex. moon at night, clouds)</li>
        <li>Precipitation</li>
        <li>Wind Speed</li>
        <li>Sunrise/Sunset</li>
        <li>Humidity</li>
        <li>UV index</li>
        <li>Pollen</li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
