<script>
  import VideoRepl from '../../components/VideoRepl.svelte';
	import { continents } from './continentsData.js';
  import Continent from './Continent.svelte';
	import MapModal from './MapModal.svelte';
	
	let continentMap = "";
	let modalShowing = false;
	
	const showMap = (mapURL) => {
		continentMap = mapURL;
		modalShowing = true;
	}
</script>


<style>
	header {
		width: 100%;
		text-align: center;
		color: #8C3420;
	}	
	
	footer {
		width: 100%;
		text-align: right;
		font-size: .8rem;
	}	
</style>


<header>
	<h1>The Accordion</h1>
	<p>Packing a lot of information into a small space</p>
</header>

{#if modalShowing}
	<MapModal mapurl={continentMap} on:click={() => modalShowing = false} />
{/if}

{#each continents as {heading, content, learnurl, mapurl}}
	<Continent {heading} 
						 {content} 
						 learnmore={learnurl}
						 on:click={() => showMap(mapurl)} />
{/each}

<footer>
	<p>
		Information and images from <a href="https://en.wikipedia.org/wiki/Main_Page">wikipedia</a>
	</p>		
</footer>

<VideoRepl iframeURL="https://www.youtube.com/embed/vs10Omo9H7c"
 					 title="Accordion Svelte Tutorial"
 					 replURL="https://svelte.dev/repl/0aff293b94e44574a83a8271ba457136?version=3.29.7" />
