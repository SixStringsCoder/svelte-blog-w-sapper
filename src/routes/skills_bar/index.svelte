<script>	
	import Skillbar from './Skillbar.svelte';

	const skillLevels = [
		{ skill: "HTML", percent: 80, color: "red", delTime: 0 },
		{ skill: "CSS", percent: 75, color: "blue", delTime: 500 },
		{ skill: "JavaScript", percent: 90, color: "darkorange", delTime: 1000 },
		{ skill: "Python", percent: 50, color: "green", delTime: 1500 },
		{ skill: "Swift", percent: 45, color: "rebeccapurple", delTime: 2500 }
	];
</script>

<section>
	<h1>My Skills</h1>
	{#each skillLevels as {skill, percent, color, delTime}}
		<Skillbar {skill} 
							{percent}
							{color}
							{delTime}
							/>
	{/each}
</section>

<style>
	* {box-sizing: border-box}

	section {
		width: 50%;
		margin: 20px 0;
	}
</style>