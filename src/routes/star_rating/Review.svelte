

	<div class="review">
			<p>You can click on any star to set the star-rating for this product.  The stars are created by using the Array object and a Svelte each loop.  The stars change their color by adding a CSS class to the HTML element when clicked on.  But that's not the whole story.  Each star has a data-number from 0 to 4. When a star is clicked on, the data-number is "captured" and stored in a variable.  The each loop then re-renders the stars and adds the special CSS class to color the stars orange only if a star's data-number is less than or equal to the star clicked on. </p>
	</div>


<style>
	p {
			font-size: .8em;
			text-align: justify;
		}
	
	.review {
		
	}
</style>