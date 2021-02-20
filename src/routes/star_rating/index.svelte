<script>
	import User from './User.svelte';
	import Review from './Review.svelte';
	
	let numStars = 4;
	
	const giveStars = (e) => numStars = e.target.dataset.number
</script>

<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<main>
	<User />

	<div>
		{#each Array(5) as _, i}
			<span class="fa fa-star" 
						class:checked={i+1 <= numStars}
						data-number={i+1}
						on:click={giveStars}>
			</span>
		{/each}
	</div>

	<Review />
</main>


<style>
	main {
		width: 500px;
		margin: 20px;
	}

	span {
		font-size: 1.2em;
		cursor: pointer;
	}
	
	.checked {
		color: orange;
	}
	
</style>