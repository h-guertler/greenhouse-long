import './ClimateStats.css';
import { useContext } from 'react';
import { ClimateContext } from '../../context/ClimateContext';

function ClimateStats() {

  const { temperature } = useContext(ClimateContext)
  const { humidity } = useContext(ClimateContext)

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
