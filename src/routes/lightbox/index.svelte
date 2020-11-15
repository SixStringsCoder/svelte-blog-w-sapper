<script>
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
		
<style>
	section {
		width: 100%;
		text-align: center;
		margin-top: 5%;
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