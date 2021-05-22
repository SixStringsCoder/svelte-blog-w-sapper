<script>
	import { onDestroy } from 'svelte';
	import { scheduleStore } from './stores/schedule-store';
	import Calendar from './Calendar.svelte';
	import Scheduler from './Scheduler.svelte';
	
	let schedule = {};
	
	const unsubscribe = scheduleStore.subscribe(currDataState => {
		schedule = currDataState;
	});
	
	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
	
	let schedulerShowing = false;	
	let dateID = "";
	let schedDate = "";

	$: appointments = schedule[dateID];
	
	const makeDateSchedHeading = () => {
		let dateHeading = dateID.replace(/_/g, " ");
		let date = new Date(`${dateHeading}`);
		return schedDate = date.toLocaleString("en-US", {day: 'numeric', month: 'long', year: 'numeric'} );
	}
	
	const handleScheduler = (e) => {
		schedulerShowing = true;
		dateID = e.target.dataset.dateid;
		makeDateSchedHeading();
	}
	
	const closeScheduler = () => {
		schedulerShowing = false;
		if (schedule[dateID] && schedule[dateID].length === 0) {
			scheduleStore.update(currDataState => { 
				delete currDataState[dateID] 
				return currDataState 
			})
		}
	}
	
	const setApptToSch = (e) => {
		//console.log(e.detail)
		let time = `${e.detail.hour}:${e.detail.minutes < 10 ? '0'+e.detail.minutes : e.detail.minutes}${e.detail.amOrPM}`;
		
		let newAppt = {
			id: Math.floor(Math.random() * 1000000),
			eventname: e.detail.eventName,
			time,
			completed: false
		};
		
		if (!schedule[dateID]) {
			scheduleStore.update(currDataState => { 
				currDataState[dateID] = [newAppt]; 
				return currDataState 
			})
		} else {
			scheduleStore.update(currDataState => {
				let currDayAppts = currDataState[dateID];
				currDataState[dateID] = [...currDayAppts, newAppt];
				return currDataState 
			})
		}
		
// 		if (!schedule[dateID]) {
// 			schedule[dateID] = [newAppt];
// 			console.log("First and only appt of this day entered");
// 		} else {
// 			let currSchedAppts = schedule[dateID];
// 			schedule[dateID] = [...currSchedAppts, newAppt]
// 		}	
	}
	
	$: console.log(schedule)
</script>


<main>
	<Calendar on:click={handleScheduler}
						{schedule} />
		{#if schedulerShowing}
			<Scheduler on:modalClose={closeScheduler}
								 on:addAppt={setApptToSch}
								 {dateID}
								 {schedDate}
								 {appointments}
									/>
		{/if}
</main>	

				
<style>
	main {font-family: Verdana, sans-serif;}
</style>