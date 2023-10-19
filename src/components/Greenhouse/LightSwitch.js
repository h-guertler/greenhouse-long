import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const { themeName, setThemeName } = useTheme();

  const toggleOn = () => {
      setThemeName("day");
  }

  const toggleOff = () => {
      setThemeName("night");
  }

  return (
    <div className="light-switch day">
      <div className="on" onClick={toggleOn}>DAY</div>
      <div className="off" onClick={toggleOff}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
