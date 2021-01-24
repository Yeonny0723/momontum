const timeSpan = document.getElementById("currentTime");
const dayContainer = document.getElementById("day-container");

const getTime = () => {
  const currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  timeSpan.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  var arr = `${currentDate}`.split(" ");
  dayContainer.innerText = `${arr[0]}, ${arr[1]} ${arr[2]}`;
};

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
