<script>
	export let showFloat;
	
	let videoCont;
	let videoPlayer;
	
	// handle clicking X to remove floating player
	const hideSmallPlayer = () => {
		videoCont.classList.remove('float')
		videoPlayer.classList.remove('sm-player')
		// showFloat becomes false when scrolling up to < 450px
	}
</script>


<div id="video-cont" 
		 class="video-cont" 
		 class:float={showFloat} 
		 bind:this={videoCont}>	
	{#if showFloat}
		<div id="close-icon" on:click={hideSmallPlayer}>X</div>
	{/if}
	
	<video class="vid-player" controls class:sm-player={showFloat} bind:this={videoPlayer}>		
		<track kind="captions" />
		<source src="https://media.istockphoto.com/videos/time-lapse-sunrise-over-mountain-with-mist-and-fog-cloud-video-id1125217870" type="video/webm">
		<source src="https://media.istockphoto.com/videos/time-lapse-sunrise-over-mountain-with-mist-and-fog-cloud-video-id1125217870" type="video/mp4"> 
			Sorry, your browser doesn't support embedded videos.
	</video>	
</div>


<style>
	.video-cont {
		width: 100%;
/* 		height: 100%; */
/* 		background-color: #aaa; */
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 10;
	}

	.vid-player {
		width: 100%;
/* 		height: 100%; */
	}

	#close-icon {
		display: block;
		position: absolute;
		font-size: 1rem;
		color: white;
		font-weight: 800;
		top: 1%;
		right: 3%;
		cursor: pointer;
	}

	#close-icon:active {
		color: red;
	}
	
	/* small video player when scrolling */
	@keyframes fade {
		100% { opacity: 1 }
	}

	@keyframes enterR {
		0% { right: -40% }
	}

	.sm-player {
		width: 270px;
		height: 160px;
/* 		opacity: 1; */
	}

	.float {
		animation: enterR .2s ease-in-out;
		width: 290px;
		height: 200px;
		box-shadow: 0 0 7px darkgray;
		background-color: #000;
		position: fixed;
		bottom: 1%;
		right: 1%;
	}

</style>