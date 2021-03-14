<script>
	import { onMount } from 'svelte';

	import SearchBar from './SearchBar.svelte';
	import Holiday from './Holiday.svelte';
	import { key } from './ApiKey.js';
	
	let language = "en";
	let country = "US"
	
	let searchTerm;
	$: console.log(searchTerm)
	
	/* API to get holiday data */
	const apiUrl = `https://holidayapi.com/v1/holidays?pretty&key=${key}&country=${country}&year=2020&language=${language}`
	
	let holidays = [];
	$: console.log(holidays)

	 const getData = async () => {	
		try {
		 const response = await fetch(apiUrl);
			if (response.ok) {
				const jsonResponse = await response.json();
				return holidays = jsonResponse.holidays
			}
			throw new Error('Request Failed');
		} catch(error) {
			console.log(`Oops! ${error}!`)
		};
	}
	
	const convertDate = (date) => {
		// Add your time zone to get accurate date
		let timezone = 'PST'
		let nd = new Date(`${date} ${timezone}`);

		let locale = 'en-EN'
		let year = nd.toLocaleDateString(locale, {year: 'numeric'});
		let month = nd.toLocaleDateString(locale, {month: 'long'});
		let day = nd.toLocaleDateString(locale, {day: 'numeric'});
		
		return `${month} ${day}, ${year}`
	}
	
	onMount( () => getData());
</script>


<main>
	<SearchBar bind:searchTerm />
	<div class="timeline">
		{#each holidays as {name, date}, i}
			<Holiday {name} date={convertDate(date)} left={i % 2 === 0} />
		{/each}
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
	}

	/* Set a background color */
	main {
		position: relative;
		background-color: #474e5d;
		font-family: Helvetica, sans-serif;
		overflow: scroll;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
		top: 35px;
		z-index: 1;
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