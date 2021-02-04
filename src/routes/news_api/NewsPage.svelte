<script>
	import { fly } from 'svelte/transition';
	
	export let newsURL;
</script>

<section transition:fly={{ x: 1500, duration: 1000 }}>
	<div class="back-icon-cont" on:click>
		<span class="back-icon">&lt;</span>
	</div>
	
	<iframe src={newsURL} 
					title="article from hn.algolia.com/api" 
					width="100%" 
					height="100%" 
					style="border:none;"
					allowfullscreen></iframe>
</section>

<style>
	section {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: white;
	}
	
	.back-icon-cont {
		position: absolute;
		top: 10px;
		left: 10px;
		border: 1px solid black;
    padding: 0 10px 5px;
		cursor: pointer;
	}
	
	.back-icon {
		font-size: 2.3rem;
		font-weight: 100;
	}

</style>