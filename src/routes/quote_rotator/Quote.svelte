<script>
	// import { fade } from 'svelte/transition';
//   export let selectedQuote;
// 	export let qIndex
	export let quote;
	export let author;
</script>

<!-- Quote template -->
<div class="mySlides">
	<q>{quote}</q>
	<p class="author">&mdash;{author}</p>
</div>



<style>
	/* Slides */
	.mySlides {
		display: block;
		width: 20%;
		text-align: justify;
		font-size: 1.5rem;
		font-family: 'Sansita Swashed', cursive;
		position: fixed; /*	NOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in dom (well, for this transition at least) */
	}

	/* Add an italic font style to all quotes */
	q {	 
	}

	/* Add a blue color to the author */
	.author {
		color: cornflowerblue;
		text-align: right;
		margin: 7px 0;
	}
</style>