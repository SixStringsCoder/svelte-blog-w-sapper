<script>
	import { audioData } from './audioData.js';
	import { onMount } from 'svelte';
	
	import ProgressBarTime from './ProgressBarTime.svelte';
	import Controls from './Controls.svelte';
	import VolumeSlider from './VolumeSlider.svelte';
	
	// Audio URL from audioData
	const fileURL = audioData[1].url
	const audio = new Audio(fileURL);

	
	// Audio Time
	let totalTrackTime = audio.duration; // in seconds 
	let totalTimeDisplay;
	let currTimeDisplay;
	let progress = 0;
	let trackTimer;	
	$: console.log(totalTrackTime, progress, audio.ended)
	
	// Volume slider
	$: vol = 50;
	
	let isPlaying = false;
	// $: console.log(isPlaying)
	
	const toggleTimeRunning = () => {
		if (audio.ended) {
			clearInterval(trackTimer);		
		} else {
			trackTimer = setInterval(handleAudioTime, 100);
		}
	}
	
	function handleAudioTime() {
		progress = audio.currentTime * (100 / totalTrackTime);
		
		let currHrs = Math.floor((audio.currentTime / 60) / 60);
		let currMins = Math.floor(audio.currentTime / 60);
		let currSecs = Math.floor(audio.currentTime - currMins * 60);
		
		let durHrs = Math.floor( (totalTrackTime / 60) / 60 );
		let durMins = Math.floor( (totalTrackTime / 60) % 60 );
		let durSecs =  Math.floor(totalTrackTime - (durHrs*60*60) - (durMins * 60));
		
		if(currSecs < 10) currSecs = `0${currSecs}`;
		if(durSecs < 10) durSecs = `0${durSecs}`;
		if(currMins < 10) currMins = `0${currMins}`;
		if(durMins < 10) durMins = `0${durMins}`;

		currTimeDisplay = `${currHrs}:${currMins}:${currSecs}`;
 		totalTimeDisplay = `${durHrs}:${durMins}:${durSecs}`
		// console.log(progress);
		if (audio.ended) isPlaying = false;
	}
	
	function displayTime() {
		audio.onloadedmetadata = () => totalTrackTime = audio.duration;
		// audio.ontimeupdate = () => audio.currentTime * (100 / totalTrackTime);
		toggleTimeRunning();
	}

	// Volume
	const adjustVol = () => audio.volume = Number(vol) / 100;

	// Controls
	const playPause = () => {
		isPlaying = !isPlaying;
		isPlaying ? audio.play() : audio.pause();
	}
	const rewind = () => audio.currentTime -= 20;
	const forward = () => audio.currentTime += 20;

	
	onMount(() => displayTime());
</script>


<main>
	<section id="player-cont">
		
		<ProgressBarTime {totalTrackTime} 
										 {totalTimeDisplay} 
										 {currTimeDisplay} 
										 {progress} />	
		
		<Controls on:rewind={rewind} 
							on:playOrPause={playPause} 
							on:forward={forward} 
							{isPlaying} />
		
		<VolumeSlider bind:vol 
									on:input={adjustVol} />
		
	</section>
</main>	


<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ddd;
	}

	#player-cont {
		width: 250px;
		height: 150px;
		padding: .7rem 1.5rem 0;
		box-shadow: 0 0 5px black;
		background: #222;
		color: #bbb;
		border-radius: 5px;
	}
</style>