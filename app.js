const clockContainer = document.querySelector('.clock-container')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const getClockHTML = (hours, minutes, seconds) => {
  clockContainer.innerHTML = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>  
  `
}
const updateClock = () => {
  const present = new Date()
  const hours = formatTimeUnit(present.getHours())
  const minutes = formatTimeUnit(present.getMinutes())
  const seconds = formatTimeUnit(present.getSeconds())

  getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)
