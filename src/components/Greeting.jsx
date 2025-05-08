import dayIcon from '../assets/day.svg'
import nightIcon from '../assets/night.svg'

const Greeting = () => {
  const currentTime = new Date();
  const timeOfDay = getTimeOfDay(currentTime);
  // it is daytime if it is morning or afternoon
  const isDaytime = timeOfDay == 'Morning' || timeOfDay == 'Afternoon' ? true : false;
  return <div className="greeting">
    <img
      src={isDaytime ? dayIcon : nightIcon}
      alt={isDaytime ? "sun icon" : "moon icon"}
    />
    <h1>Good {timeOfDay}!</h1>
  </div>;
}

function getTimeOfDay(currentTime) {
  const timeInHours = currentTime.getHours();
  let timeOfDay = 'Night';
  if (timeInHours >= 6 && timeInHours < 12) timeOfDay = 'Morning';
  if (timeInHours >= 12 && timeInHours < 17) timeOfDay = 'Afternoon';
  if (timeInHours >= 17 && timeInHours < 21) timeOfDay = 'Evening';

  return timeOfDay;
}

export default Greeting;
