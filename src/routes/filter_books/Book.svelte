<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	export let title;
  export let image;
	export let language;
	export let ebookBundle;
	export let pdfLink;
	export let appleLink;
	export let googleLink;
	export let amazonLink;
</script>


<section class="book"
				 transition:scale={{duration: 500, easing: expoInOut}}>
	
	<section class="book-top-info">
		<figure class="bkcont">
			<img src={image} alt={title} class="bkcover">
			<div class="language">({language})</div>
			<figcaption>{title}</figcaption>
		</figure>
	</section> 
	
	<section class="book-bottom-links">
		<section class="from-pariyatti available-at">
			<header>
				<h5>From Pariyatti</h5>
			</header>
			<div class="buy-options-cont">
				<a href={ebookBundle}><button class="p-book-btn multi-btn">ePub, Mobi, PDF</button></a>
			</div>
			<div class="buy-options-cont">
				<a href={pdfLink}><button class="p-book-btn pdf-btn">Free PDF Download</button></a>
			</div>
		</section>
		<section class="other-vendors available-at">
			<header>
				<h5>Also Available At</h5>
			</header>
			<div class="buy-options-cont">
				<a href={appleLink}><img class="itunes vender-logo" src="https://store.pariyatti.org/assets/images/IBooks_logo.png" alt="itunes logo" /></a>
			</div>
			<div class="buy-options-cont">
				<a href={googleLink}><img class="googleplay vender-logo" src="https://store.pariyatti.org/assets/images/google_play_logo.png" alt="google logo" /></a>
			</div>
			<div class="buy-options-cont">
				<a href={amazonLink}><img class="amazon vender-logo" src="https://store.pariyatti.org/assets/images/Amazon_Kindle_logo.png" alt="amazon logo" /></a>
			</div>
		</section>
	</section>
	
</section>


<style>
	.book { 
			width: 280px;
			border: 4px solid #BA5626; 
			border-radius: 3px;
			box-shadow: 1px 1px 0 black;
			margin: 5px;
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
			width: 90%;
			padding: 0 10px;
			height: 36px;
			font-weight: bold;
		}
	

	/* Book Links Layout */
	.book-bottom-links {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: center;  
	}
	
	.available-at {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center; 
	/*   background-color: #fff; */
	}

	.available-at header { 
		text-align: center;
	}
	.available-at header h5 { 
		font-size: .95rem;
		margin: 15px 0;
		padding: 0 .2rem;
	}

	.from-pariyatti {
		height: 200px;
	}

	.other-vendors {
		border-left: 3px solid #BA5626;
		height: 200px;
	}

	.buy-options-cont {
		text-align: center;
		padding: 0 10px 10px;

	}

	.vender-logo {
		width: 100px;
		margin: 10px 0 0 0;
	}

	.p-book-btn {
		border: none;
		width: 100px;
		background: #BA5626;
		font-weight: 400;
		font-size: 12px;
		color: #f3f1ea;
		text-transform: uppercase;
		line-height: 130%;
		cursor: pointer;
		margin-top: .8em;
		padding: 9px 14px;
		box-shadow: 1px 1px 1px black;
		transition: .3s all;
	}

	.p-book-btn:hover {
		background-color: #D0A45A;
		color: #000;
	}

	.p-book-btn:active {
		box-shadow: inset 0 0 1px black;
	}
</style>