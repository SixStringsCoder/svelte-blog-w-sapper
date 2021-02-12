<script>
	export let title;
  export let image;
	export let language;
</script>


<section class="book">
	<section class="book-top-info">
		<figure class="bkcont">
			<img src={image} alt={title} class="bkcover">
			<div class="language">({language})</div>
			<figcaption>{title}</figcaption>
		</figure>
	</section> 
</section>


<style>
	.book { 
			width: 280px;
			border: 4px solid #BA5626; 
			border-radius: 3px;
			box-shadow: 1px 1px 0 black;
			margin: 10px;
			background-color: #e4ddcf;
		}

		.book-top-info {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			border-bottom: 3px solid #BA5626;
		}

		/* Book Layout */
		.bkcont {
			width: 100%;
			text-align: center;
		}

		.bkcover {
			width: 100px;
			height: 150px;
			margin-bottom: 5px;
			box-shadow: 0 0 3px gray;
		}
	
		div.language {
			font-size: .8em;
			margin: 5px 0;
		}
	
		figcaption {
			text-align: center;
			width: 100%;
			padding: 0 10px;
			height: 36px;
			font-weight: bold;
		}
</style>