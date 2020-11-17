
<script>
	let y = 0;
	$: console.log(y)
</script>


<svelte:window bind:scrollY={y} />

<div class="navbar" class:hideNav={y >= 100}>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
	<a href="#contact">Hide the Nav when ScrollY >= 100.  <strong>ScrollY is {y}</strong></a>
</div>

<h1 style="font-size: 3rem; margin-top: 15%;text-align: center; color: #0F4580">
	The Hide
</h1>


<style>
.navbar {
  background-color: #3a8ef5; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: 0px; /* Hide the navbar 50 px outside of the top view */
  width: 100%; /* Full width */
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
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
  background-color: white;
  color: black;
}
	
.hideNav {
		top: -50px;
	}	
</style>