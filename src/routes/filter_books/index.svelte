<script>
	import { onMount } from 'svelte';
	
	import { bookData } from './bookData.js';
	import Book from './Book.svelte';
	import Menu from './Menu.svelte';
	import Search from './Search.svelte';
	import NoResults from './NoResults.svelte';
	
	let languages = []; // menu built from bookData
	let selectedLang = ""; // menu selection	
	
	const getLanguages = () => {
		bookData.forEach(bookObj => {
			if (!languages.includes(bookObj.language)) {
				languages = [...languages, bookObj.language]
			}
		})
		languages = languages.sort(); // alphabetize
	}	
	onMount(() => getLanguages());
	
	
	// Query results
	let filteredBooks = [];
	$: if (selectedLang) getBooksByLang();
	
	// For Select Menu
	const getBooksByLang = () => {
		searchTerm = ""; // reset search input
		
		if (selectedLang === "all") {
			return filteredBooks = [];
		}
		return filteredBooks = bookData.filter(book => book.language === selectedLang);
	}
	
	// For Search Input
	let searchTerm = "";
	// reset menu if Search is used
	$: if (searchTerm) selectedLang = ""; 
	
	const searchBooks = () => {
		return filteredBooks = bookData.filter(book => {
			let bookTitleLower = book.title.toLowerCase();
			return bookTitleLower.includes(searchTerm.toLowerCase());
		});
	}
</script>


<section id="query-section">
	<Menu {languages} bind:selectedLang />
	<Search bind:searchTerm on:input={searchBooks} />
</section>

<main id="bookshelf">
	{#if searchTerm && filteredBooks.length === 0}
			<NoResults />
	{:else if filteredBooks.length > 0}
		{#each filteredBooks as {title, image, language, ebookBundle, pdfLink, appleLink, googleLink, amazonLink}}	
			<Book {title} 
						{image} 
						{language}
						{ebookBundle}
						{pdfLink}
						{appleLink}
						{googleLink}
						{amazonLink} />

		{/each}
	{:else}
		{#each bookData as {title, image, language, ebookBundle, pdfLink, appleLink, googleLink, amazonLink}}
			<Book {title} 
						{image} 
						{language}
						{ebookBundle}
						{pdfLink}
						{appleLink}
						{googleLink}
						{amazonLink} />
		{/each}
	{/if}
</main>


<style>
	* {
		box-sizing: border-box;
	}
	
	#query-section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2% 0;
	}
	
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