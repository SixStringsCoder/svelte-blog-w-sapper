<script>
	import { tweened } from 'svelte/motion';
	import { backInOut } from 'svelte/easing';
	
	export let skill;
	export let percent;
	export let color;
	export let delTime;
	
	const progress = tweened(30, {
		delay: delTime,
		duration: 2000,
		easing: backInOut
	});
	
	progress.set(percent)
</script>


<div class="container">
	<span>{skill}</span>
  <div class="skills" 
			 style="width: {$progress}%; background-color: {color}">
		{percent}%
	</div>
</div>


<style>	
	.container {
		width: 100%;
		background-color: #ddd;
		margin-bottom: 15px;
		position: relative;
	}
	
	span {
		position: absolute;
		top: 26%;
		left: 5px;
		font-weight: bold;
		color: white;
	}
	
	.skills {
		text-align: right;
		padding: 10px 10px 10px 0;
		font-weight: bold;
		color: white;
		transition: .5s ease-out;
	}
</style>