<script>
	import { audioData } from './audioData.js';
	import { onMount } from 'svelte';
	
	// Components
	import TrackHeading from './TrackHeading.svelte';
	import ProgressBarTime from './ProgressBarTime.svelte';
	import Controls from './Controls.svelte';
	import VolumeSlider from './VolumeSlider.svelte';
	import PlayList from './PlayList.svelte';
	
	// AudioData for track
	let trackIndex = 1;	
	$: trackTitle = audioData[trackIndex].name;
	let audio = new Audio(audioData[trackIndex].url);
	//audio.src = audioData[trackIndex].url;
	$: console.log(trackIndex, trackTitle, audioData[trackIndex].url, audio);
	
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
			trackTimer = setInterval(updateTime, 100);
		}
	}
	
	function updateTime() {
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
	
	function loadTrackTime() {
		audio = new Audio(audioData[trackIndex].url);
		audio.onloadedmetadata = () => totalTrackTime = audio.duration;
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

	// Playlist Tracks
	const handleTrack = (e) => {
		trackIndex = Number(e.target.dataset.trackId);
		loadTrackTime();
	}
	
	onMount(() => loadTrackTime());
</script>


<main>
	<section id="player-cont">	
		<TrackHeading {trackTitle} />
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
	
	<PlayList on:click={handleTrack} />
</main>	


<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
/* 		justify-content: center; */
		padding: 20px 0 0 0;
		background-color: #ddd;
	}

	#player-cont {
		width: 250px;
		height: 165px;
		padding: .7rem 1.5rem 0;
		box-shadow: 0 0 5px black;
		background: #222;
		color: #bbb;
		border-radius: 5px 5px 0 0;
	}
</style>