
<script>
	let y = 0;
	$: console.log(y)
</script>


<svelte:window bind:scrollY={y} />

<div class="navbar" class:changeBG={y >= 60}>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
	<a href="#contact">Change the Nav color when ScrollY >= 60. <strong>ScrollY is {y}</strong></a>
</div>

<h1 style="font-size: 3rem; margin-top: 18%; text-align: center; color: #FF38D4">
	The Change
</h1>


{#if y >= 200}
	<p class:marquee={y >= 200}>
		When scrollY is >= 200 this marquee appears and a class is added to move it across the screen.
	</p>
{/if}


<style>
.navbar {
  background-color: #41FF12; /* Black background color */
	border-bottom: 1px solid #41FF12;
  position: fixed; /* Make it stick/fixed */
  top: 0px; /* Hide the navbar 50 px outside of the top view */
	padding: 20px 0;
  width: 100%; /* Full width */
  transition: all .4s; /* Transition effect when sliding down (and up) */
}

/* Style the navbar links */
.navbar a {
  float: left;
	color: black;
  display: block;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}
	
	@keyframes vegas {
		0% {background-image: linear-gradient(0deg, #FF6ED4, yellow, #FF6ED4, yellow, #FF6ED4)}
		25% {background-image: linear-gradient(72deg, #FF6ED4, yellow, #FF6ED4, yellow, #FF6ED4)}
		50% {background-image: linear-gradient(150deg, #FF6ED4, yellow, #FF6ED4, yellow, #FF6ED4)}
		75% {background-image: linear-gradient(220deg, #FF6ED4, yellow, #FF6ED4, yellow, #FF6ED4)}
		100% {background-image: linear-gradient(360deg, #FF6ED4, yellow, #FF6ED4, yellow, #FF6ED4)}
	}	
	
.changeBG {
		background-color: #FF6ED4;
		border-bottom: 1px solid #FF54D4;
/* 		padding: 5px 0; */
		animation: vegas .3s infinite;
	}	
	
	@keyframes scroller {
		from { transform: translateX(135%)}
		to { transform: translateX(-200%)}
	}
	
	
	.marquee {
		animation: scroller 30s infinite;
		position: absolute;
		bottom: 1%;
		background-color: yellow;
		box-shadow: 0 0 20px black;
		padding: 5px;
	}
</style>