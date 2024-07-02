function getCurrentTimeAndDay() {
    const now = new Date();
  
    // Get the current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    // Get the current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getDay()];
  
    return { hours, currentTime, currentDay };
  }
  
  function Home() {
    const { hours, currentTime, currentDay } = getCurrentTimeAndDay();
  
    const timeMessage = document.getElementById('time-message');
    const DayMessage= document.getElementById('day-message');

    DayMessage.innerHTML= `Today is ${currentDay}.`

    timeMessage.innerHTML = `The time is ${currentTime}. ${hours >= 18 ? 'How did your day go?' : 'How is your day going?'}`;
  }
  
  document.addEventListener('DOMContentLoaded', Home);
  