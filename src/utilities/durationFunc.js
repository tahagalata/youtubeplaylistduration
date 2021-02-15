export function secondsToOthers(duration) {
  let days = 0, hours = 0, minutes = 0, seconds = 0
  days = Math.floor(duration / 86400)
  let remainingAfterDays = duration % 84600
  hours = Math.floor(remainingAfterDays / 3600)
  let remainingAfterHours = remainingAfterDays % 3600
  minutes = Math.floor(remainingAfterHours / 60)
  seconds = remainingAfterHours % 60

  return {days, hours, minutes, seconds}  
}

export function secondsToLongString(duration) {
  let {days, hours, minutes, seconds} = secondsToOthers(duration)

  //Checks if bigger than 0 to display and checks if bigger than 1 to add plural -s
  let text = (days ? `${days} Day${days>1 ? 's' :''}, ` : '') + 
  (hours ? `${hours} Hour${hours>1 ? 's' :''}, ` : '') + 
  (minutes ? `${minutes} Minute${minutes>1 ? 's' :''}, `: '') + 
  (seconds ? `${seconds} Second${seconds>1 ? 's' :''}` : '0 Seconds')

  return text
}

export function secondsToShortString(duration) {
  let {days, hours, minutes, seconds} = secondsToOthers(duration)


  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}

  return hours+':'+minutes+':'+seconds;
  
}