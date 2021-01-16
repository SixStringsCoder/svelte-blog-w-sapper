<script>
	import { onMount } from 'svelte';

	let windowWidth;
  let racer;
	export let racerXPos = 0;
	let racerWidth;
	export let racerImg;
	export let racerName;	
	export let isRacing; 
	export let racerID;
	export let winner;
	export let finishLinePos;
	
	let placings = [];
// 	$: console.log(placings)
	
	let raceLoop; // for setInterval
	
	const moveFwd = () => {
		if (racerXPos <= windowWidth) {
			return racerXPos += Math.floor(Math.random() * 100)
		} else {
			// console.log(racerXPos)
			isRacing = false;
			return;
		}	
	}
		
	$: if (isRacing) {
		raceLoop = setInterval(moveFwd, 500)
	}
	
	$: if (racerXPos >= finishLinePos) {
		placings = [...placings, racerID];
		racerXPos = finishLinePos;
		winner = racerID;
		console.log(`Racer ${racerName} with ID ${racerID} finished`, winner)
		clearInterval(raceLoop);
	}
	
	onMount(() => {
		racerXPos = racer.offsetLeft;
		racerWidth = racer.offsetWidth;
		console.log(`windowWidth: ${windowWidth}px--racerOffsetLeft: ${racerXPos}px--racerOffsetWidth: ${racerWidth}px`)
	})
</script>


<svelte:window bind:innerWidth={windowWidth} />

<div bind:this={racer} style="left: {racerXPos}px" data-id={racerID}>
	<img src={racerImg} alt={racerName} />
</div>


<style>
	div {
		position: relative;
		width: 50px;
		height: 50px;
		text-align: center;
		/* background: gray; */
		transition: left .8s ease-in;
		z-index: 10;
	}
	
	img {	
		max-width: 90%;
		/* background: gray; */
	}
</style>