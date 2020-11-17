<script>
	import { fade, fly, scale, blur, slide } from 'svelte/transition';
	import { circIn } from 'svelte/easing';
	let y;
	$: console.log(y)
	
	let modalOpen = true;
</script>


<svelte:window bind:scrollY={y} />

<div class="navbar" class:slideDown={y >= 80}>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
	<a href="#contact" style="color: #FFD405"><strong>ScrollY: {y}</strong></a>
</div>

<section id="dynamic">
	{#if y >= 0}
	<h1>
		The Dynamic
	</h1>
	<h2>
		Transition HTML elements using the <code>bind:</code> directive, <code>scrollY</code> property, a variable, and <code>&#123;&#35;if&#125;</code> blocks.
	</h2>
	<h3>
		Scroll slowly down to see them come in.
	</h3>
	{/if}

	<div class="row">
		{#if y >= 168 }
			<div class="side" transition:scale={{ opacity: 0.1}}>
				<h2>Svelte scale transition when y >= 168.</h2>
				<h5>This outer DIV shows when y >= 168.</h5>
				<div class="fakeimg" style="background: black; color: #FFD405" transition:slide={{ x: 400, delay: 100, duration: 1000, easing: circIn }}>
				<img style="border: 10px solid white" src="https://images.unsplash.com/photo-1602718515875-81bc55306cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2849&q=80" alt="by Jordan M. Lomibao" title="https://unsplash.com/@jlcruz_photography" />
				</div>
				<p>This DIV above with an image is using a Svelte <em>slide</em> transition with easing set to 'circIn'.</p>
				<h3>More Text</h3>
				<p>Lorem ipsum dolor sit ame.</p>
				<div class="fakeimg" style="height:60px;">Image</div><br>
				<div class="fakeimg" style="height:60px;">Image</div><br>
				<div class="fakeimg" style="height:60px;">Image</div>
			</div>
		{/if}

		{#if y >= 570 }
		<div class="main" transition:fly={{ x: -600, delay: 500 }}>
			<h2>Svelte fly transition when y >= 570.</h2>
			<h5>Images DIV flies in when y >= 970. It comes in from the left because of a negative x-axis value </h5>
		{#if y >= 970 }
				<div class="fakeimg" style="height:200px;" transition:fly={{ x: -500, duration: 1000, }}>
					<img transition:blur={{ amount: 5, duration: 2000, }} src="https://images.unsplash.com/photo-1602357821325-a5cb0df46158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2847&q=80" alt="People before profit" title="https://unsplash.com/@helloimnik" />
					<img transition:blur={{ amount: 5, duration: 2000, }} src="https://images.unsplash.com/photo-1602421249025-cf5b41fbde72?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Staring out the window to the ocean in Puerto Rico." title="https://unsplash.com/@taylor_melesh" />
				</div>
			{/if}
			<p>People before profit - <a href="https://unsplash.com/@helloimnik" target="_blank">https://unsplash.com/@helloimnik</a></p>
			<p>Staring out the window...in Puerto Rico. - <a href="https://unsplash.com/@helloimnik" target="_blank">https://unsplash.com/@helloimnik</a></p>
			<p>The images have transitions separate from their parent DIV.  They blur in over a 2 second period with the blur amount set to 5.</p>
			<br>
			<h2>IMPORTANT ARTICLE</h2>
			<h5>Images DIV flies in when y >= 1318. It flies in from the right because of a positive x-axis value.</h5>
			{#if y >= 1318 }
				<div class="fakeimg" style="height:200px;" transition:fly={{ x: 500, duration: 1000, }}>
					<img transition:blur={{ amount: 5, duration: 2000, }} src="https://images.unsplash.com/photo-1451676300459-cbb4954cd494?ixlib=rb-1.2.1&auto=format&fit=crop&w=2960&q=80" alt="People before profit" title="https://unsplash.com/@christinem" />
					<img transition:blur={{ amount: 5, duration: 2000, }} src="https://images.unsplash.com/photo-1602741666341-0bd77e9fe67f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80" alt="Staring out the window to the ocean in Puerto Rico." title="https://unsplash.com/@ingmarr" />
				</div>
			{/if}
			<p>Al Salt, Jordan - <a href="https://unsplash.com/@christinem" target="_blank">https://unsplash.com/@christinem</a></p>
			<p>Road and tree canopy - <a href="https://unsplash.com/@ingmarr" target="_blank">https://unsplash.com/@ingmarr</a></p>
			<p>These images are using the <em>blur</em> transition</p>
			<p>...anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
		</div>
		{/if}
	</div>

	{#if y >= 1180 }
		<div class="footer" transition:fly={{ y: 500, delay: 1000, }}>
			<h2>Footer is using the 'fly' transition on the 'y' axis.</h2>
		</div>
	{/if}
</section>


	{#if y >= 1400 }
		<!-- The Modal -->
		<div id="myModal" class="modal" class:hide={!modalOpen} on:click={() => modalOpen = false} transition:fade>

			<!-- Modal content -->
			<div class="modal-content">
				<span class="close" on:click={() => modalOpen = false}>&times;</span>
				<form action="action_page.php">
					<div class="container">
						<h2>Subscribe to our Newsletter</h2>
						<p>Lorem ipsum..</p>
					</div>

					<div class="container" style="background-color:white">
						<input type="text" placeholder="Name" name="name" required>
						<input type="text" placeholder="Email address" name="mail" required>
						<label>
							<input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter
						</label>
					</div>

					<div class="container">
						<input type="submit" value="Subscribe">
					</div>
				</form>
			</div>
			
		</div>
	{/if}

<style>
* {
  box-sizing: border-box;
}
	
section#dynamic {
  width: 100vw;
	height: 1900px;
}	

.navbar {
  background-color: #333; /* Black background color */
  position: fixed; /* Make it stick/fixed */
	z-index: 10;
  top: 0px; /* navbar hidden */
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
	
h1 {
	font-size: 3rem; 
	text-align: center; 
	color: #FF8F00; 
	margin-top: 10%;
}
		

/* Column container */
.row {  
	padding-top: 5%;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {   
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}
		

/* Fake image, just for this example */
.fakeimg {
	display: flex;
	justify-content: space-around;
  background-color: #ccc;
  width: 100%;
  padding: 20px;
}
	
img {
	width: 45%;
	box-shadow: 0 0 5px black;
}	

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
/* 	position: absolute;
	bottom: 0; */
}
	
	
/* MODAL WINDOW */	
	
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: absolute; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

	
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
	
	.hide {
		display: none;
	}	

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {

}
</style>