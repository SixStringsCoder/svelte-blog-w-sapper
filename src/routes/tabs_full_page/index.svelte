<script>
	// https://svelte.dev/examples#svelte-component
	// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_full_page_tabs
	import HomePage from './HomePage.svelte';
	import NewsPage from './NewsPage.svelte';
	import ContactPage from './ContactPage.svelte';
	import AboutPage from './AboutPage.svelte';
	
	const webpages = [
		{ name: "Home", component: HomePage },
		{ name: "News", component: NewsPage },
		{ name: "Contact", component: ContactPage },
		{ name: "About", component: AboutPage }
	];
	
	// Loads an object in webpages array
	let selectedPage = webpages[0];
	$: console.dir(selectedPage.component)
	
	// Have to use obj as arg. so value can be a class
	const loadPage = (webpageObj) => selectedPage = webpageObj;
</script>

<section>
	{#each webpages as webpage}
		<button class="tablink" 
						title={webpage.name}
						on:click={() => loadPage(webpage)}>{webpage.name}</button>
	{/each}
</section>

<!-- Loaded component/webpage -->
<svelte:component this={selectedPage.component} />


<style>
	* {box-sizing: border-box}

	section {
		width: 100%;
	}

	/* Style tab links */
	.tablink {
		background-color: #555;
		color: white;
		float: left;
		border: none;
		outline: none;
		border: .5px solid #444;
		border-radius: 0;
		cursor: pointer;
		padding: 14px 16px;
		font-size: 17px;
		width: 25%;
	}

	.tablink:hover {
		background-color: #777;
	}


</style>