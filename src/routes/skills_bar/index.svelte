<script>
	import Skillbar from './Skillbar.svelte';
	
	const skillLevels = [
		{ skill: "HTML", percent: "80%", color: "red" }
	];
</script>


<h1>My Skills</h1>

{#each skillLevels as {skill, percent, color}}
	<Skillbar {skill} {percent} {color} />
{/each}


<style>
	* {box-sizing: border-box}
</style>