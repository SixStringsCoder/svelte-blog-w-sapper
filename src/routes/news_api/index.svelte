<script>
	import { onMount } from 'svelte';
	
	import NewsPage from './NewsPage.svelte';
	
	let cors = "https://cors-anywhere.herokuapp.com/"
  let url = "http://hn.algolia.com/api/v1/search?tags=front_page";
	
	let queryTerm = "m1";
	// let url = `http://hn.algolia.com/api/v1/search?query=${queryTerm}&tags=story`;
	let dataHits = [];
	let newsURL;
	$: console.log(newsURL)
	let newsPageOpen = false;
	
	const fetchData = () => {
		fetch(`${cors}${url}`)
		.then(resp => resp.json())
		.then(data => {
			console.log(data.hits)
			return dataHits = data.hits
		})
	}
	
	const openArticle = (link) =>  {
		newsURL = link;
		newsPageOpen = true;
	}
	
	onMount(() => {
		fetchData();
	});
					
</script>

<section>
	{#each dataHits as {title, url, author, points}}
	<div class="article-info" on:click={() => openArticle(url)}>
		<h1>
			{title}
		</h1>
		<span class="link-icon">&gt;</span>
	</div>
	{/each}
</section>

{#if newsPageOpen}
	<NewsPage {newsURL} on:click={() => newsPageOpen = false} />
{/if}


<style>
	section {
		background-color: black;
		color: white;
		padding: 10px;
	}
	.article-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}
	
	.article-info:hover {
		background-color: yellow;
		color: black;
	}
	
	h1 {
		padding: 0 10px;
	}
	
	.link-icon {
		font-size: 2.3rem;
		font-weight: 100;
		padding: 0 10px;
	}
</style>