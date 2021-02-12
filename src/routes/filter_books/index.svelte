<script>
	import { onMount } from 'svelte';
	import { bookData } from './bookData.js';	
	
	import Menu from './Menu.svelte';
	import Search from './Search.svelte';
	import Book from './Book.svelte';
	
	let languages = []; // menu built from bookData
	let selectedLang = ""; //  menu selection	
	
	const getLanguages = () => {
		for (let obj of bookData) {
			if (!languages.includes(obj.language)) {
				languages = [...languages, obj.language]
			}
		}
		languages = languages.sort();
	}
		
	onMount(() => getLanguages());
	
	
	// Query results
	let filteredBooks = [];
	
	// For Select Menu
	$: if (selectedLang) getLangBooks();
	$: console.log(filteredBooks, selectedLang);
	
	const getLangBooks = () => {
		if (selectedLang === "all") {
			return filteredBooks = [];
		} else {
			return filteredBooks = bookData.filter(book => book.title === selectedLang);
		}
	}	
	
	// For Search Input
	let searchTerm = "";
	
	const searchBooks = () => {	
		return filteredBooks = bookData.filter(book => {
			let bookTitle = book.title.toLowerCase();
			return bookTitle.includes(searchTerm.toLowerCase())
		});
	}
</script>


<section id="search-section">
	<Menu {languages} bind:selectedLang />
	<Search bind:searchTerm on:input={searchBooks} />
</section>	

<main id="bookshelf">
	{#if searchTerm && filteredBooks.length === 0}
		<h3>No results</h3>		
	{:else if filteredBooks.length > 0}
		{#each filteredBooks as {title, image, language}}
			<Book {title} {image} {language} />
		{/each}	
	{:else}
		{#each bookData as {title, image, language}}
			<Book {title} {image} {language} />
		{/each}	
	{/if}
</main>	


<style>
	* {
		box-sizing: border-box;
	}
	
	#search-section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2% 0;
	}
	
	/* General Structure */
	main#bookshelf {
		width: 100%;
		margin: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center; 
	}
</style>