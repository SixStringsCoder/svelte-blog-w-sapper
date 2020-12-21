<script>
  export let quoteIndex;
	export let counter
	export let attribution;
</script>

<span class="dot" 
			class:active={quoteIndex === counter} 
			title={`quote by ${attribution}`}
			on:click></span>


<style>
	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 15px;
		width: 15px;
		margin: 0 5px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.3s ease;
	}

	/* Add a background color to the active dot/circle */
	.active, .dot:hover {
		background-color: #000;
	}
</style>