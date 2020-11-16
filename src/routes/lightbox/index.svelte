<script>
	import VideoRepl from '../../components/VideoRepl.svelte';
  import Lightbox from './Lightbox.svelte';
	import ImageDisplay from './ImageDisplay.svelte';
	
	let modalOpen = false;
	// $: console.log(modalOpen);
	
	let imageShowingIndex = 0;
	
	const handleImgClick = (e) => {
		imageShowingIndex = Number(e.target.id);
		modalOpen = true;
	}
	
</script>

		
<style>
	section {
		width: 100%;
		text-align: center;
		margin: 5% 0 2%;
	}
	
	button {
		background-color: #000;
		color: white;
		padding: 10px 20px;
		box-shadow: 0 2px 3px black;
		cursor: pointer;
	}
	
	button:active {
		background-color: #555;
		color: white;
		box-shadow: none;
	}
</style>


<!-- The Modal/Lightbox -->
{#if modalOpen}
	<Lightbox on:click={() => modalOpen = false} {imageShowingIndex} />
{:else}
	<ImageDisplay on:click={handleImgClick} />	
{/if}
	
<!-- Button to open Lightbox -->		
<section>		
	<button on:click={() => modalOpen = true}>
		Lightbox
	</button>		
</section>


<VideoRepl iframeURL="https://www.youtube.com/embed/aUFKBR-jfy0"
 					 title="Lightbox Svelte Tutorial"
 					 replURL="https://svelte.dev/repl/6f58eee68a8240f5846211bba60e83b0?version=3.29.7" />