<script>
	import { vocab } from  './vocabData.js';
	import Flashcard from './Flashcard.svelte';
	
	
	let flashcardIndex = 0;
	$: console.log(flashcardIndex, vocab[flashcardIndex])
	$: clue = vocab[flashcardIndex].image;	
	$: answer = vocab[flashcardIndex].word;
	
	let backShowing = false	
	const toggleShowAnswer = () => backShowing = !backShowing;
	
	const nextClue = () => {
		backShowing = false;
		if (flashcardIndex === vocab.length-1) {
			flashcardIndex = 0;
		} else {
			flashcardIndex += 1;
		}
	}
	
	// ACTIVITY IDEAS
	// Flashcards
	// Match image to 1 of 3 choices of words
	// Match word to 1 of 3 choices of images
	// more advanced: input the spell of the word matching the image
</script>

<main>
	<!-- FLASHCARD -->
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={backShowing}>
			<Flashcard {clue} {answer} />
		</div>
	</div> 

	<!-- BUTTONS -->
	<div id="btn-cont">
		<button on:click={toggleShowAnswer}>
			{backShowing ? "Hide Answer" : "Show Answer"}
		</button>
		
		<button on:click={nextClue}>Next</button>
	</div>
	
</main>

<hr />
	<div>
		<a href="https://svelte.dev/repl/ea858bdd8748479dbbbb52e209218701?version=3.31.0" target="_blank">View Svelte Code</a>
	</div>
	

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15%;
		height: 100vh;
	}
	
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the   flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 300px;
		height: 200px;
/* 		border: 1px solid #ddd; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when show answer button is clicked */	
	.flip-it {
		transform: rotateY(180deg);
	}

	#btn-cont {
		width: 300px;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
	}

	button {
		padding: 5px;
		font-size: 1.1rem;
		cursor: pointer;
	}
</style>