import { useState, useEffect } from "react"
export default function Time() {
  const	date = new Date()
  const [clockState, setClockState] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes()
  });

	useEffect(() => {
		setInterval(() =>{
			const date = new Date();
			setClockState({
        hours: date.getHours(),
        minutes: date.getMinutes()
      });
		},1000);
	}, []);
	
	return(
	<time>
	{clockState.hours}:{clockState.minutes}
	</time>
)
}
// const	date = new Date();
// const [dateTime, setDateTime] = useState({
//   hours: date.getHours(),
//   minutes: date.getMinutes(),
// seconds: date.getSeconds()
  
// });
// useEffect(() => {
//   const timer = setInterval(() => {
//     const date = new Date();
//     setDateTime({
//       hours: date.getHours(),
//       minutes: date.getMinutes(),
//   seconds: date.getSeconds()
     
//     });
//   }, 1000);
//   return () => clearInterval(timer);
// }, []);
// return(
// <time>
// {dateTime.hours}:{dateTime.minutes}:{date.seconds}