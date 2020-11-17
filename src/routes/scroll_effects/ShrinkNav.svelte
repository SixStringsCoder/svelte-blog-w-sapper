<script>
	let y = 0;
	$: console.log(y)
</script>

<svelte:window bind:scrollY={y} />


<div class="navbar" class:shrink={y >= 80}>
  <a href="#default" class="logo" class:shrink-text={y > 80}>The Shrink</a>
  <div id="navbar-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>



<div style="margin-top:280px; padding:15px 15px;font-size:1.2rem">
  <p><b>This example demonstrates how to shrink a navigation bar when the user starts to scroll the page using Svelte's <code>&lt;svelte:window&gt;</code> element.</b></p>	
  <blockquote>When scrollY is >= 80 then a class gets added to the navbar to lower its padding.</blockquote>
  <blockquote>A class also gets added to the "The Shrink" text to lower the font-size. <br /><strong>ScrollY: {y}</strong></blockquote>
</div>



<style>
/* Create a sticky/fixed navbar */
.navbar {
  overflow: hidden;
  background-color: #fdb975;
  padding: 90px 10px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.4s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  top: 0; /* At the top */
  z-index: 99;
}

/* Style the navbar links */
.navbar a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo */
.navbar .logo {
  font-size: 35px;
  font-weight: bold;
  transition: 0.4s;
}

/* Links on mouse-over */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link */
.navbar a.active {
  background-color: dodgerblue;
  color: white;
}

/* Display some links to the right */
#navbar-right {
  float: right;
	margin-right: 20px;
}
	
.shrink {
	padding: 30px 10px;
}	
	
.shrink-text {
	font-size: 25px !important;
}	

/* Add responsiveness - on screens less than 580px wide, display the navbar vertically instead of horizontally */
@media screen and (max-width: 580px) {
  .navbar {
    padding: 20px 10px !important; /* Use !important to make sure that JavaScript doesn't override the padding on small screens */
  }
  .navbar a {
    float: none;
    display: block;
    text-align: left;
  }
  #navbar-right {
    float: none;
  }
}
</style>