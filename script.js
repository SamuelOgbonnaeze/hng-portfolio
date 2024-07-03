function getCurrentTime() {
  const now = new Date();

  // Get the current time in UTC
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();

  const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return { hours, currentTime };
}

function getCurrentDay() {
  const now = new Date();

  // Get the current day in UTC
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[now.getUTCDay()];

  return { currentDay };
}

function Home() {
  const { hours, currentTime } = getCurrentTime();
  const { currentDay } = getCurrentDay();

  const timeMessage = document.getElementById('time-message');
  const dayMessage = document.getElementById('day-message');

  dayMessage.innerHTML = `Today is ${currentDay}.`;
  timeMessage.innerHTML = `The time is ${currentTime}. ${hours >= 18 ? 'How did your day go?' : 'How is your day going?'}`;
}

document.addEventListener('DOMContentLoaded', Home);
