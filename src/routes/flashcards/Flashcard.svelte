<script>
  export let clue;
	export let answer;
</script>

<div class="flip-box-front">
	<div id="image-cont">
			<img src={clue} alt={answer} />
	</div>
</div>

<div class="flip-box-back">
	<h2>{answer}</h2>
</div>

<style>
	/* Style the front side */
	.flip-box-front {
		background-color: #ddd;
		color: black;
		display: flex;
		justify-content: center;
	}

	/* Style the back side */
	.flip-box-back {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: green;
		color: white;
		transform: rotateY(180deg);
	}
	
	/* Position the front and back side */
	.flip-box-front, .flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
		box-shadow: -1px 1px 3px black;
	}
	
	#image-cont {
		background-color: #f9e685;
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	img {
		max-height: 80%;
	}
</style>