import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./TopButton";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TempDetails from "./TempDetails";
import Forecast from "./Forecast";
import getWeatherData from "../services/WeatherService";
import getFormattedWeatherData from "../services/WeatherService";
import { useEffect, useState } from "react";

function WeatherCard() {
  const [query, setQuery] = useState({ q: "kolkata" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(query, units).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const cardStyle = {
    fontSize: "2rem",
    minHeight: "80vh",
  };

  const outerDivStyle = {
  };

  return (
    <div className="bg-slate-900 max-h-full min-h-screen" style={outerDivStyle}>
      <div
        className={`mx-auto max-w-screen-md py-24 px-32    `}
        style={cardStyle}
      >
        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
