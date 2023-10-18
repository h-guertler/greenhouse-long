import { useContext } from 'react'
import { useTheme } from '../../context/ThemeContext'
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName, setThemeName } = useTheme();
  let themeImage;

  if (themeName === "day") {
    themeImage = dayImage
  } else if (themeName === "night") {
    themeImage = nightImage
  }

  // if (themeName === "night") {
  //   themeImage = nightImage
  // }

  // console.log(themeName)

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
