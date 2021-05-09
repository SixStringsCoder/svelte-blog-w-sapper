<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let dateID = "May_8_2021";
	export let schedDate = "May 8, 2021";
</script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">


<section>
	<form method="post"
				id={dateID}
				in:fly={{ y: -300 }} out:fade={{ duration: 100 }}>
		<div>
			<span on:click={() => dispatch('modalClose')} 
						class="close" 
						title="Close Modal">
				&times;
			</span>
		</div>

		<div id="myDIV" class="header">
			<h2>Schedule</h2>
			<h2>{schedDate}</h2>
			<input type="text" id="event-input" placeholder="Add an event...">
			<input type="text" id="time-input" placeholder="Begins at...">
			<span on:click={() => dispatch('addEvent')} class="addBtn">Add</span>
		</div>
	</form>

	<table id="myUL">
		<tr>
			<th>Event</th>
			<th>Time</th>
			<th>Complete</th>
		</tr>
		
		<tr class="completed">
			<td><i class="fa fa-trash-o fa-2x"></i></td>
			<td>Hit the gym</td>
			<td>9:00 am</td>
			<td><input type="checkbox" checked /></td>
		</tr>
		<tr>
			<td><i class="fa fa-trash-o fa-2x"></i></td>
			<td>Pay bills</td>
			<td>12:00 pm</td>
			<td><input type="checkbox" /></td>
		</tr>
		<tr>
			<td><i class="fa fa-trash-o fa-2x"></i></td>
			<td>Organize office</td>
			<td>2:00 pm</td>
			<td><input type="checkbox" /></td>
		</tr>
	</table>
</section>


<style>
	section { 
		box-sizing: border-box;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	/* Bordered form */
	form {
/* 		width: 80%;
		height: 80%; */

		top: 0; left: 0; bottom: 0; right: 0;
		z-index: 10;
		overflow: auto;
		margin: auto;
		background-color: white;
		box-shadow: 0 0 10px black;
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
		background-color: white;
	}

	th, td {
		text-align: left;
		padding: 16px;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}	
	
	/* Style the close button */
	.close {
		position: absolute;
		font-size: 2rem;
		color: white;
		right: 0;
		top: 0;
		padding: 8px 16px 12px 16px;
		cursor: pointer;
	}

	.close:hover {
		background-color: hsl(168, 76%, 40%);

	}

	/* Style the header */
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: hsl(33, 92%, 29%);
		padding: 30px 40px;
		color: white;
	/*   text-align: center; */
	}

	/* Clear floats after the header */
	.header:after {
		content: "";
		display: table;
		clear: both;
	}

	/* Style the input */
	input {
		margin: 10px 0;
		border: none;
		border-radius: 0;
		width: 50%;
		padding: 10px;
		float: left;
		font-size: 16px;
	}

	/* Style the "Add" button */
	.addBtn {
		padding: 10px;
		width: 25%;
		background:	hsl(168, 76%, 40%);
		color: #FFF;
		float: left;
		text-align: center;
		font-size: 16px;
		cursor: pointer;
		transition: 0.1s;
		border:	1px solid hsl(168, 76%, 40%);
		border-radius: 0;
	}

	.addBtn:hover {
		border: 1px solid white;
		background-color: hsl(168, 76%, 35%);
	}	

	.addBtn:active {
		background-color: hsl(168, 76%, 100%);
		color: hsl(168, 76%, 25%);
	}	

	input[type="checkbox"] {
		width: 55px;
		height: 25px;
	}

	input[type=checkbox]:checked {
		background-color: hsl(168, 76%, 100%);
		color: white;
	}

	.completed {
		text-decoration: line-through;
		color: #aaa;
	}	

	/* Change styles for span and cancel button on extra small screens */
	@media screen and (max-width: 300px) {

	}
</style>