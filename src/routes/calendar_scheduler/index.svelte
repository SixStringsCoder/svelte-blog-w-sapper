<script>
	import Calendar from './Calendar.svelte';
	import Scheduler from './Scheduler.svelte';
	
	let schedule = {};
	
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
	
	const setApptToSch = (e) => {
		console.log(e.detail)
		let time = `${e.detail.hour}:${e.detail.minutes < 10 ? '0'+e.detail.minutes : e.detail.minutes}${e.detail.amOrPM}`;
		let appt = {
			id: dateID,
			eventname: e.detail.eventName,
			time,
			complete: false
		};
		if (!schedule[dateID]) {
			schedule[dateID] = [appt];
			console.log("new event");
		} else {
			let dateEvents = schedule[dateID];
			schedule[dateID] = [...dateEvents, appt]
		}
		
	}
	
	$: console.dir(schedule)
</script>


<main>
	<Calendar on:click={handleScheduler} />
		{#if schedulerShowing}
			<Scheduler on:modalClose={() => schedulerShowing = false}
								 on:addAppt={setApptToSch}
								 {dateID}
								 {schedDate}
								 {appointments} />
		{/if}
</main>	

				
<style>
	main {font-family: Verdana, sans-serif;}
</style>