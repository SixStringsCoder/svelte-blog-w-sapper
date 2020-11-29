<script>
	export let totalTrackTime;
	export let totalTimeDisplay;
	export let currTimeDisplay;
	export let progress;
</script>

<style>
	#time {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	#progress-bar-cont {
		width: 100%;
		height: 10px;
		margin: .5rem 0 1rem;
		display: flex;
		align-items: center;
		border: 1px solid #888;
		cursor: pointer;
	}

	#bar {
		width: 0%;
		height: 10px;
		background-color: goldenrod;
	}
</style>


<div id="time">
	<span id="progress-time">{!currTimeDisplay ? "0:00" : `${currTimeDisplay}`}</span>
	<span id="track-duration">{!totalTrackTime ? "0:00" : `${totalTimeDisplay}`}</span>  
</div>

<div id="progress-bar-cont">
	<span id="bar" style="width: {progress}%"></span>
</div>