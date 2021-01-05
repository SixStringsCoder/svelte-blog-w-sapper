<script>
	// video from : https://www.istockphoto.com/video/time-lapse-sunrise-over-mountain-with-mist-and-fog-cloud-gm1125217870-295706751?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_video_noresults&referrer_url=https%253A//pixabay.com/videos/fog-mountains-road-foggy-dramatic-53358/&utm_term=
	
	import Article from './Article.svelte';
	import VideoPlayer from './VideoPlayer.svelte';
	
	let y;
	// $: console.log(y)
	$: (y > 450) ? showFloat = true : showFloat = false;
	
	let showFloat = false;
</script>


<svelte:window bind:scrollY={y} />

<header>
  <VideoPlayer {showFloat} />
</header>

<main>
	<Article />
</main>


<style>
	header {
		width: 100%;
		height: 325px;
		background-color: #000;
		display: flex;
		justify-content: center;
		padding: 1rem 2rem;
		border-bottom: 1px solid black;
	}
	
	main {
		width: 100vw;
		height: 300vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>