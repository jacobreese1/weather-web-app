import styles from "./App.module.css";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import Forecast from "./components/Forecast";
import Card from "./components/elements/Card";

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.cardloc}>
          <div className={styles.cardlocForecast}>
            <Forecast />
          </div>
          <div className={styles.cardlocCurrent}>
            <Card>
              <CurrentWeather />
            </Card>
          </div>
        </div>
      </header>
      <WeeklyForecast />
    </div>
  );
};

export default App;
