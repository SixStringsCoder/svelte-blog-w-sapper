<script>
	import { fly } from 'svelte/transition';
	export let skill;
	export let percent;
	export let color;
</script>



<p>{skill}</p>
<div class="container">
  <div class="skills" 
			 style="width: {percent}; background-color: {color}">
		{percent}
	</div>
</div>



<style>
	.container {
		width: 100%;
		background-color: #ddd;
	}

	.skills {
		text-align: right;
		padding: 10px 10px 10px 0;
		font-weight: bold;
		color: white;
		transition: 1s;
	}
	
	.skills:hover {
		transform: translateX(200px)
	}
</style>