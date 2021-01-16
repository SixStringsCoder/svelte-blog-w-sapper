<script>
	import { onMount } from 'svelte';
	import { racers } from './racerData.js';
	import Header from './Header.svelte';
	import Racer from './Racer.svelte';
	
	let racer;
	let isRacing = false; 
	
	let winner;
			$: console.log(winner)
	
	let finishLine; // for bind:this
	let finishLinePos;
	
	onMount(() => {
		finishLinePos = finishLine.offsetLeft
		console.log(`The finish line is at ${finishLine.offsetLeft}`)
	})

</script>


<Header />

<main>
	<section id="racetrack">
		{#each racers as {name, imgUrl}, i}
			<div class="lane" class:winner={winner === i}>
				<Racer {isRacing} 
							 racerID={i}
							 bind:racer
							 racerImg={imgUrl}
							 racerName={name}
							 {finishLinePos}
							 {winner} />
		  </div>
		{/each}
		<div class="finish-line" bind:this={finishLine}>
			<span>Finish Line</span>
		</div>
	</section>	

	<section id="start-race-cont">
		<button on:click={() => isRacing = !isRacing}>{isRacing ? "Stop" : "Go"}</button>
	</section>	
</main>	


<style>
	main {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background: #148033;
	}
	
	section#racetrack {
		width: 99%;
		padding: 10px 0;
		background-color: #ddd;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	
	div.lane {
		width: 100%;
		padding: 10px 0;
		border-top: 5px solid #ddd;
		background: #BF4545;
		color: white
	}
	
	@keyframes blink {
		from { background: #BF4545; color: white}
		to { background: #fff; color: black}
	}
	
	.winner {
		animation: blink .5s 10;
	}
	
	.winner:after {
		content: "Winner!";
		font-size: 2rem;
		display: flex;
		justify-content: center;
		margin-bottom: 2rem
	}
	
	div.finish-line {
		position: absolute;
		right: 0;
		height: 97%;
		border: 3px solid #ddd;
	}
	
	div.finish-line span {
		width: 200px;
		color: #000;
		font-size: 1.5rem;
		position: absolute;
		top: 59%;
		right: -80px;
		transform: rotate(90deg);
	}
	
	section#start-race-cont {
		display: flex;
		justify-content: center;
	}
	
	button {
		width: 100px;
		padding: 8px;
		font-size: 1.3rem;
		border: none;
		background: goldenrod;
		box-shadow: 1px 2px 3px black;
		cursor: pointer;
	}
</style>