import { writable } from 'svelte/store'

// const storedSched = localStorage.getItem("storedSchedule");
const schedule = writable({
	"May_25_2021": [
		{
			id: 108757,
			eventname: "fix car",
			time: "2:30pm",
			completed: false,
		}, 
		{ 
			id: 119370,
			eventname: "practice JS Promises",
			time: "4:00pm", 
			completed: false 
		}
	]
});

export default schedule;