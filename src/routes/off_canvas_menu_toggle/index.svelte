<script>
	import VideoRepl from '../../components/VideoRepl.svelte';

// 	let navWidth = 0;
	let navOpen = false;
	
	function handleNav(e) {
		navOpen = !navOpen;
// 		navWidth === 0 ? navWidth = 40 : navWidth = 0;
	}
	
function handleNavWithKey(e) {
	console.log(e.code);
	if (e.code === "F1") {
		navOpen = !navOpen;
	}
}	
	
// 	const openNav = () => {
// 		navOpen = !navOpen;
// 		navWidth = 40;
// 	}
	
// 	const closeNav = () => {
// 		navOpen = !navOpen;
// 		navWidth = 0;
// 	}	
</script>

<div id="mySidenav" class="sidenav" class:open={navOpen}>
  <a href="#a" class="closebtn" on:click={handleNav}>&times;</a>
  <a href="#b">About</a>
  <a href="#c">Services</a>
  <a href="#d">Clients</a>
  <a href="#e">Contact</a>
</div>

 <!-- Use to open the sidenav -->
 <!-- 	<span on:click={handleNav}>open</span> -->
	
	<!-- Use Menu Icon to open the sidenav -->
	<div class="container" class:change={navOpen} on:click={handleNav}>
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
	</div>

	<!-- Add some margin-left to this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page) -->
	<div id="main" class:pushMainToRight={navOpen}>
		<h2>Sidenav Push Example</h2>
    <p>This content will slide to the left if you add the class pushMain when navOpen evaluates to true in the parent DIV.</p>
	</div>

<!-- Use keyboard to handle the sidenav -->
<svelte:window on:keydown={handleNavWithKey} />

<style>
/* Hamburger Menu icon */	
.container {
	position: absolute;
	right: 10%;
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
	
/* span {
	position: absolute;
	right: 20%;
	display: inline-block;
	cursor: pointer;
}	 */
	
/* The side navigation menu */
.sidenav {
  height: 100%; 
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px;
  transition: 0.5s;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}
	
.pushMainToRight {
	margin-left: 40%
}	
	
.open {
	width: 40%;
}	

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

<VideoRepl iframeURL="https://www.youtube.com/embed/q4jZrQg_K8o"
 					 title="Slideshow Svelte Tutorial"
 					 replURL="https://svelte.dev/repl/e9c4ff0b0ff94059a6c85a09c556284a?version=3.31.0" />
