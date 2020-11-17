
<script>
	export let y = 0;
	$: console.log(y)
</script>


<svelte:window bind:scrollY={y} />

<div class="navbar" class:slideDown={y >= 80}>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
	<a href="#contact">Show the Nav ---> ScrollY: {y}</a>
</div>

<h1 style="font-size: 3rem; text-align: center; color: #FF8F00">
	The Slide
</h1>
<h2>
	When scrollY is >= 80 the navbar slides down.
</h2>

<style>
.navbar {
  background-color: #333; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: -50px; /* navbar hidden */
/* 	left: -800px; */
  width: 100%; /* Full width */
  transition: all 0.3s; /* Transition effect when sliding down (and up) */
}

/* Style the navbar links */
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
	
.slideDown {
		top: 0px;
/* 		left: 0px; */
	}	
</style>