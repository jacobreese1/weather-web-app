import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [cityName, setCityName] = useState();
  const [stateCode, setStateCode] = useState();
  const [countryCode, setCountryCode] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.watchPosition((name) => {
        setCityName(name);
        setStateCode(name);
        setCountryCode(name);
      });

      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Louisville,KY,usA&units=imperial&limit=1&appid=e0bfa8943fccaf4e391b2daf5d46247d`
        )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [cityName, stateCode, countryCode]);

  return (
    <div className={styles.container}>
      <input placeholder="Search City/State" className={styles.searchBar} />
      <svg
        xmlns="../images/svg/magnifying-glass.svg"
        fill="none"
        className={styles.searchBarSVG}
      ></svg>
    </div>
  );
};

export default SearchBar;
