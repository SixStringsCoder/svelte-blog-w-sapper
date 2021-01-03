<script>
	export let name;
	export let suit;
	export let cardColor;
	
	let showingCard = false;
</script>


<div class="flip-card"	
		 class:deal-card={showingCard}
		 on:click={() => showingCard = !showingCard}>
	<div class="outer-container" class:flip-over={showingCard}>

		<section class="card front" id={name-suit}>
			<div id="card-left-side" style="color: {cardColor}">
				<span class="value">{name}</span>
				<span class="suit">{@html suit}</span>    
			</div>
			<div id="card-center" style="color: {cardColor}">
				<span class="suit">{@html suit}</span>
			</div>
			<div id="card-right-side" style="color: {cardColor}">
				<span class="value">{name}</span>
				<span class="suit">{@html suit}</span> 
			</div>
		</section>

		<section class="card back" id="back-A-hearts">
			<div class="card-wording">
				<p>You're such a card!</p>
			</div>
		</section>

	</div> 
</div> 


<style>
	@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');	
	
	* { font-family: 'Fredericka the Great', cursive;}
	
	.flip-card {
		position: absolute;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		bottom: 20px;
		background-color: transparent;
		width: 240px;
		height: 320px;
		perspective: 1000px;
		cursor: grab;
		transition: all .5s;
	}
	
	.deal-card {
		transform: translate(-110%, -110%);
	}
	
	.outer-container {
		position: relative;
		width: 100%;
		height: 100%;
		/*   text-align: center; */
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}
	
	.flip-over {
		transform: rotateX(180deg);
	}
	
	.card {
		width: 240px;
		height: 320px;
		border: 1px solid black;
		border-radius: 5%;
		display: flex;  
		justify-content: space-between;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 1);
		margin: 5px;
	}

	.front {
		position: absolute;
		backface-visibility: hidden;
		transform: rotateX(180deg);
	}

	#card-left-side,
	#card-right-side,
	#card-center {
		width: 35%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 3rem;
		backface-visibility: hidden;
	}

	#card-center {
		align-self: center;
		justify-content: center;
		font-size: 7em;
		padding: 0 20px;
	}

	#card-right-side {
		transform: rotate(180deg);
	}

	.back {
		position: absolute;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		background: #191915;
		backface-visibility: hidden;
	}

	.card-wording {
		align-self: center;
		position: absolute;
		z-index: 1;
		width: 230px;
		display: flex;
		justify-content: center;
	}
	
	p { 
		width: 70px;
		text-align: center;
		font-size: 1.2rem;
		color: #FFF;
		background: 	hsla(0, 100%, 65%, 1);
		padding: 20px;
		border-radius: 50%;
		line-height: 150%;
	}
</style>