<script>
	import { images } from './imageData.js';
	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';
	
	/* IMAGE TO SHOW */
	let imageShowingIndex = 0;
	$: console.log(imageShowingIndex);
	$: image = images[imageShowingIndex];
	
	const nextSlide = () => {
		if (imageShowingIndex === images.length-1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	}
	
	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length-1;
		} else {
			imageShowingIndex -= 1;
		}
	}
	
	const goToSlide = (number) => imageShowingIndex = number;
</script>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap');
	
* {
  box-sizing: border-box;
	font-family: 'Josefin Sans', sans-serif;
}
	

main {
	width: 70vw;
	display: flex;
	flex-direction: column;
	margin: 10% auto;
	background-color: #222;
	box-shadow: 0 0 10px black;
}	
	
/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
}

.thumbnails-row {
	width: 100%;
	display: flex;
	align-self: flex-end;
}	

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    main {
			width: 40vw;
      margin: 1% auto;
    }
  }
</style>

<main>
	
	<!-- image gallery -->
	<div class="container">
		  <Slide image={image.imgurl} 
						 altTag={image.name} 
						 attr={image.attribution} 
						 slideNo={image.id+1} 
						 totalSlides={images.length} 
						 />
	</div>




	<!-- Image text -->
	<Caption caption={images[imageShowingIndex].name}
					 on:prevClick={prevSlide}
					 on:nextClick={nextSlide}/>

	<!-- Thumbnail images -->
	<div class="thumbnails-row">
			{#each images as {id, imgurl, name, attribution}}
				<Thumbnail thumbImg={imgurl} 
									 altTag={name} 
									 titleLink={attribution}
									 {id} 
									 selected={imageShowingIndex === id}
									 on:click={() => goToSlide(id)} />
			{/each}
	</div>

</main>

<footer>
	<a href="https://svelte.dev/repl/7c0339d9aeb64b8c9b4bf402c71d791e?version=3.29.7" target="_blank">View Svelte Code</a>
</footer>