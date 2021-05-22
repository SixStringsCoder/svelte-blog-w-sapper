// import { browserStore } from './localStore'

import { writable } from 'svelte/store';

const browserStore = (key, initialValue) => {
  const lsData = localStorage.getItem(key);
  const data = lsData ? JSON.parse(lsData) : initialValue;

  const svelteStore = writable(data, () => {
    const unsubscribe = svelteStore.subscribe(currDataState => {
      localStorage.setItem(key, JSON.stringify(currDataState))
    })
    return unsubscribe;
  })
  return svelteStore;
}

const scheduleData = {
	// May_25_2021: [
	// 	{
	// 		id: 108757,
	// 		eventname: "fix car",
	// 		time: "2:30pm",
	// 		completed: false,
	// 	}, 
	// 	{ 
	// 		id: 119370,
	// 		eventname: "practice JS Promises",
	// 		time: "4:00pm", 
	// 		completed: false 
	// 	}
	// ]
};

export const scheduleStore = browserStore('schedLocalStorage', scheduleData);