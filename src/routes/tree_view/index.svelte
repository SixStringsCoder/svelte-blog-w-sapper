<script>
  import VideoRepl from '../../components/VideoRepl.svelte';

	let bevsShowing = false;
	let teaShowing = false;
	let greenTeasShowing = false;
</script>


<style>		
	@import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');
	
	main {
		width: 100vw;
		height: 100vh;
		background: tan url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/dw24-tiger-ning-03-bamboo.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=1a5d88f85e28d569ce385a320bcb39c2) center center no-repeat;
		background-size: cover;
		padding: 5%;
		font-family: 'Yeon Sung', cursive;

	}	
	
	/* Remove default bullets */
	ul, #myUL {
		list-style-type: none;
		font-size: 1.5rem;
	}

	/* Remove margins and padding from the parent ul */
	#myUL {
		margin: 0 0 0 40%;
		padding: 0;
	}

	/* Style the caret/arrow */
	.caret {
		color: black;
		cursor: pointer;
		user-select: none; /* Prevent text selection */
	}

	/* Create the caret/arrow with a unicode, and style it */
	.caret::before {
		content: "\25B6";
		color: black;
		display: inline-block;
		margin-right: 6px;
		text-shadow: 1px 1px 3px #999;
		transition: .3s;
	}	

	/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
	.caret-down::before {
		transform: rotate(90deg);
		color: #3f6113;
	}	

	/* Hide the nested list */
	.nested {
		display: none;
	}	

	.nested li {
		color: #bf492c;
		line-height: 150%;
	}	

	/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
	.active {
		display: block;
	}	
	
	#img-credit {
		position: absolute;
		bottom: 5px;
		right: 10px;
		font-size: .8rem;
	}	
</style>


<main>
	<ul id="myUL">
		<li><span class="caret" 
							class:caret-down={bevsShowing} 
							on:click={() => bevsShowing = !bevsShowing}>
				Beverages
				</span>
			<ul class="nested" class:active={bevsShowing}>
				<li>Water</li>
				<li>Coffee</li>
				<li><span class="caret" 
									class:caret-down={teaShowing} 
									on:click={() => teaShowing = !teaShowing}>
						Tea
						</span>
					<ul class="nested" class:active={teaShowing}>
						<li>Black Tea</li>
						<li>White Tea</li>
						<li><span class="caret" 
											class:caret-down={greenTeasShowing}
											on:click={() => greenTeasShowing = !greenTeasShowing}
											>
								Green Tea
								</span>
							<ul class="nested" class:active={greenTeasShowing}>
								<li>Sencha</li>
								<li>Gyokuro</li>
								<li>Matcha</li>
								<li>Pi Lo Chun</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
	<p id="img-credit">
		<a href="https://www.rawpixel.com/image/599628/bamboo-tree-background?referral=23826" target="_blank">BG image from rawpixel</a>
	</p>
</main>

<VideoRepl iframeURL="https://www.youtube.com/embed/8ZU_wOn9BWA"
 					 title="Tree View Effect Svelte Tutorial"
 					 replURL="https://svelte.dev/repl/ba287091495e417886ec27df41185165?version=3.29.7" />
