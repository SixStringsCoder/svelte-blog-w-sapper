<script>
	// https://www.w3schools.com/howto/howto_css_calendar.asp
  import Calendar from './Calendar.svelte'
	import Scheduler from './Scheduler.svelte'

	let showScheduler = false;

	let dateID = "";
	let schedDate = "";

	const makeDateSchedHeading = () => {
		let dateHeading = dateID.replace(/_/g, " ");
		let date = new Date(`${dateHeading}`);
		return schedDate = date.toLocaleString("en-US", {day: 'numeric', month: 'long', year: 'numeric'} );
	}

	const addToSchedule = (e) => {
		showScheduler = true;
		dateID = e.target.dataset.dateid;
		makeDateSchedHeading();
	}
	
	$: console.dir(dateID, schedDate)

</script>


<main>
		<Calendar on:click={addToSchedule} />
		{#if showScheduler}
			<Scheduler on:modalClose={() => showScheduler = false}
								 {dateID}
								 {schedDate} />
		{/if}
</main>


<style>
	main {
		font-family: Verdana, sans-serif;
	}
</style>