<script>
	// Based on https://www.w3schools.com/howto/howto_css_timeline.asp
	import { onMount } from 'svelte';
	
	import { getData } from './holidaysAPI.js';
	import { histEvents } from './historyData.js';
	import Event from './Event.svelte';
	import SearchForm from './SearchForm.svelte';
	
	let events = [];
	// $: console.log(events)
	
	const convertDate = (date) => {
		// Add your time zone to get accurate date
		let timezone = 'PST'
		let nd = new Date(`${date} ${timezone}`);		
		// console.log(nd);

		// For all parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
		let prettyDate = nd.toLocaleDateString('en-EN', { day: 'numeric', month: 'long', year: 'numeric'});	
		return prettyDate;
	}
	
	let searchTerm;
	let searchInput;
	// $: console.log(searchTerm)
	
	const getResults = () => {
		for (let evt of events) {
			let lowerEvt = evt.name.toLowerCase();
			if (lowerEvt.includes(searchTerm.toLowerCase())) {
				console.log(evt.name)
				setTimeout(() => searchInput.value = "", 2000)
				return moveIntoView(evt.name)			
			}
		}
		return noResults()
	}
	
	const noResults = () => {
		searchInput.value = "No Results"
		setTimeout(() => searchInput.value = "", 2000)
	}
	
	/* Scroll to Holiday */
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
	function moveIntoView(result) {
		document.getElementById(result).scrollIntoView(
			{
				behavior: "smooth", 
			 	block: "center", 
				inline: "center"
			}
		);
	}
	
	onMount(async () => events = await getData());
</script>


<header>
	<SearchForm bind:searchTerm 
							bind:searchInput
							on:submit={getResults} />
</header>

<main>
	<div class="timeline">
		{#each events as {name, date}, i}
			<Event {name} 
						 date={convertDate(date)} 
						 left={i % 2 === 0}
						 eventID={name} />
		{/each}
	</div>	
</main>


<style>
	* {
		box-sizing: border-box;
	}
	
	header {
		position: fixed;
		top: 0;
		background: #f99e58;
		width: 100%;
		height: 100px;
		padding: 5px;
		z-index: 10;
	}

	/* Set a background color */
	main {
		background-color: #474e5d;
		font-family: Helvetica, sans-serif;
		margin-top: 90px;
		overflow: scroll;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
		content: '';
		position: absolute;
		width: 6px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	
	/* Media queries - Responsive timeline on screens less than 600px wide */
	@media screen and (max-width: 600px) {
	/* Place the timelime to the left */
		.timeline::after {
			left: 31px;
		}
	}
</style>