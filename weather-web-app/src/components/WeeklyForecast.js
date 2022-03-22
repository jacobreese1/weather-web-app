import Card from "./elements/Card";
import styles from "./WeeklyForecast.module.css";

const WeeklyForecast = () => {
  return (
    <div className={styles.container}>
      <Card>
        <p>7 Day Forecast</p>
      </Card>
    </div>
  );
};

export default WeeklyForecast;
