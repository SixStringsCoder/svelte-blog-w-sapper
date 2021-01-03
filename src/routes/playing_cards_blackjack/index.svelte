<script>
	import { onMount } from 'svelte';
	
	import { cardsData } from './cardData.js';
	import Card from './Card.svelte';
	
	let deckOfCards = [];
	$: console.log(deckOfCards)
	let dealtCards = []; // click a card, pop and push it to this array; render this array above the deck of cards
	
	// Using Fisher-Yates method
	const shuffleDeck = (arrOfCards) => {
		var i = 0, j = 0, temp = null
			for (i = arrOfCards.length - 1; i > 0; i -= 1) {
				j = Math.floor(Math.random() * (i + 1))
				temp = arrOfCards[i]
				arrOfCards[i] = arrOfCards[j]
				arrOfCards[j] = temp
			}
	}
	
	const makeDeck = () => {
		for (let suit of cardsData) {
			for (let value of suit.values) {
				let card = {shape: suit.shape, color: suit.color, value }
				deckOfCards = [...deckOfCards, card]
			}
		}
		shuffleDeck(deckOfCards)
	}
	
		
	onMount(() => {
		makeDeck()
	});
</script>


<main id="card-table">
	<section id="dealt-cards-cont">
		
	</section>
	{#each deckOfCards as card}
			<Card suit={card.shape}
						cardColor={card.color}
						name={card.value} /> 
	{/each}	
</main>


<style>
/* 	#card-table {
		width: 100vw;
		height: 100vh;
		overflow: scroll;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		background-color: #256d40;
		padding: 20px;
	} */
	
	#card-table {
		width: 100vw;
		height: 100vh;
		overflow: scroll;
		background-color: #256d40;
	}
</style>

