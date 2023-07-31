const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const myFavoriteDay = 'Saturday'

const saturday = {
  weekday: false,
  good: true,
  quote: 'Saturdays do indeed exist'
}

function randomDay() {
  return daysOfTheWeek[Math.floor(Math.random() * daysOfTheWeek.length)]
}
  
console.log(daysOfTheWeek)

export {
  daysOfTheWeek,
  myFavoriteDay,
  saturday,
  randomDay
}
