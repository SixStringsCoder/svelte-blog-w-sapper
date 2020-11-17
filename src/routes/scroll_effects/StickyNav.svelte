<script>
	let y = 0;
	$: console.log(y)
	
</script>

<svelte:window bind:scrollY={y} />


<div class="header">
  <h1>Scroll Effects with Svelte</h1>
  <p>using <code>&lt;svelte:window&gt;</code></p>
	<h1 style="color: #FFD405">The Stick</h1>
</div>

<div class="navbar" class:sticky={y >= 390}>
  <a href="#link1">NavBar</a>
  <a href="#link12">Sticky</a>
  <a href="#link13">When</a>
  <a href="#link14">ScrollY &gt;= 390</a>
	<a href="#link15" class="right">ScrollY: {y}</a>
</div>


<style>
/* Header/logo Title */
.header {
  width: 100vw;
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
	background: url('https://images.unsplash.com/photo-1507638136177-1e4d9d20bd31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ') center center;
	background-size: cover;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 60px;
}

/* Style the top navigation bar */
.navbar {
	position: relative;
  overflow: hidden;
  background-color: #333;
}

/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

/* Right-aligned link */
.navbar a.right {
  float: right;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
	
.sticky {
	position: fixed;
	top: 0;
	width: 100%;
}	
	
/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}	
</style>
