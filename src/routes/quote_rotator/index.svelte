<script>
	
	import { quotes } from './quoteData.js';
	import Quote from './Quote.svelte';
	import Dot from './Dot.svelte';
	import AutoPlayBtn from './AutoPlayBtn.svelte';
	
	/* ADVANCE QUOTE */
	let quoteIndex = 0;
	$: quote = quotes[quoteIndex].quote;
	$: author = quotes[quoteIndex].author;
	$: console.log(quoteIndex)
	
	const nextQuote = () => {
		if (quoteIndex === quotes.length-1) {
			quoteIndex = 0;
		} else {
			quoteIndex += 1;
		}		
	}
	
	const prevQuote = () => {
		if (quoteIndex === 0) {
			quoteIndex = quotes.length-1;
		} else {
			quoteIndex -= 1;
		}	
	}
	
	/* AUTO PLAY */
	let switchOn = false;
	$: console.log(autoAdvance);
	let autoAdvance;
	
	const handleAutoAdv = () => {
		if (switchOn) {
			autoAdvance = setInterval(nextQuote, 5000)
		} else {
			clearInterval(autoAdvance)
		}
	}	
</script>

<main>
	<div class="slideshow-container">

		<!-- THE QUOTE -->
		<Quote {quote} {author} />
		
		<!-- Next/prev buttons -->
		<span class="prev" title="previous quote" on:click={prevQuote}>&#10094;</span>
		<span href="#next" class="next" title="next quote" on:click={nextQuote}>&#10095;</span>
	</div>

	<!-- Dots/bullets/indicators -->
	<div class="dot-container">
		{#each quotes as quote, i}
			<Dot counter={i} 
					 {quoteIndex}
					 attribution={quote.author}
					 on:click={() => quoteIndex = i}/>
		{/each}
		
		<AutoPlayBtn bind:switchOn on:change={handleAutoAdv} />
	</div>
</main>	

<style>
	@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');	
	
	main {
		width: 55%;
		height: auto;
		background-color: black;	
		margin: 20px auto 0;
	}
	
	/* Slideshow container */
	.slideshow-container {
		position: relative;
		background: #f1f1f1f1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 300px;
	}

	/* The dot/bullet/indicator container */
	.dot-container {
		text-align: center;
		padding: 20px;
		background: #666;
		position: relative;
		bottom: 0;
	}
	

	/* Next & previous buttons */
	.prev, .next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -30px;
		padding: 16px;
		color: #888;
		font-weight: bold;
		font-size: 20px;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}
	
	.prev {
		left: 0;
	}

	/* Position the "next button" to the right */
	.next {
		position: absolute;
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover, .next:hover {
		background-color: rgba(0,0,0,0.8);
		color: white;
		text-decoration: none;
	}	
</style>