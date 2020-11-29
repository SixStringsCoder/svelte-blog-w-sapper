<script>
	import { createEventDispatcher } from 'svelte';
	
	let dispatch = createEventDispatcher();

  export let isPlaying;
	// $: console.log(`isPlaying: ${isPlaying}`)
	
	const icons = {
		play: "https://freesvg.org/img/media-playback-start.png",
		pause: "https://freesvg.org/img/media-playback-pause.png",
		rewind: "https://freesvg.org/img/media-skip-backward.png",
		fwd: "https://freesvg.org/img/media-skip-forward.png"
	}
</script>

<div id="btn-cont">
	<button id="rewind" on:mousedown={() => dispatch('rewind')}>
		<img src={icons.rewind} alt="rewind"/> 
	</button>
	<button id="play" on:click={() => dispatch('playOrPause')}>
		<img src={isPlaying ? icons.pause : icons.play} alt="play and pause icons"/> 
	</button>

	<button id="forward" on:mousedown={() => dispatch('forward')}>
		<img src={icons.fwd} alt="rewind"/> 
	</button>
</div>  

<style>
	#btn-cont {
		display: flex;
		justify-content: space-between;
	}
	
	button {
		width: 37px;
		border: none;
		font-size: 2.3rem;
		padding: 0;
		cursor: pointer;
		margin: 0;
		background-color: transparent;
	}
	
	button:active {
		font-size: 2.2rem;
		background-color: transparent;
	}
	
	button img {
		width: 100%;
	}
</style>