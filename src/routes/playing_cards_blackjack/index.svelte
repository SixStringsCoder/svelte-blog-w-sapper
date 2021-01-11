<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	
	import { cardsData } from './cardData.js';
	import Card from './Card.svelte';
	
	let deckOfCards = [];
	let dealtCards = []; 
	$: console.log(deckOfCards, dealtCards)
	let tablePosX = 10;
	
	let handTotal = 0;
	
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
			for (let i = 0; i < suit.labels.length; i++) {
				let card = {
					shape: suit.shape, 
					color: suit.color, 
					label: suit.labels[i],
					value: suit.values[i]
				}
				deckOfCards = [...deckOfCards, card]
			}
		}
		shuffleDeck(deckOfCards)
	}
	
	const dealCard = () => {
		let card = deckOfCards.pop();
		dealtCards = [...dealtCards, card];
	}
	
		
	onMount(() => {
		makeDeck()
	});
</script>


<main id="card-table">
	
	<section id="dealt-cards-cont">
		{#each dealtCards as dealtCard, i (dealtCard)}
			<div class="card-dealt" 
					 style="left: {tablePosX+80 * i}px"
					 transition:fly={{y: 100, duration: 250, easing: quintOut}}>
				<Card suit={dealtCard.shape}
								cardColor={dealtCard.color}
								cardValue={dealtCard.value}
								label={dealtCard.label}
								showingCard="true"
								/> 
			</div>	
		{/each}	
	</section>
	
	<section id="deck-of-cards-cont">
		{#each deckOfCards as card}
			<Card suit={card.shape}
						cardColor={card.color}
						cardValue={card.value}
						label={card.label}
						on:click={dealCard} /> 
		{/each}	
	</section>	
	
</main>


<style>
	main#card-table {
		width: 100vw;
		height: 100vh;
/* 		overflow: scroll; */
		display: flex;
		flex-direction: column;
		background-color: #256d40;
		padding: 10px;
	}
	
	section#dealt-cards-cont {
/* 		border: 1px solid black; */
		width: 100%;
		height: 320px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 5px;
		overflow: scroll;
	}
	
	div.card-dealt {
		margin: 0 10px;
		position: absolute;
	}
	
	section#deck-of-cards-cont {
/* 		border: 1px solid black; */
		width: 100%;
		height: 320px;
		padding: 5px;
	}
</style>

