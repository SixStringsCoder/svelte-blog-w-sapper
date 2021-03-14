<script>
	export let searchTerm;
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<section>
	<form class="example" on:submit|preventDefault>
		<input type="text" 
					 name="search" 
					 placeholder="Search for a holiday."
					 autocomplete="off"
					 bind:value={searchTerm}>
		<button type="submit">
			<i class="fa fa-search"></i>
		</button>
	</form>	
</section>


<style>
	* {
		box-sizing: border-box;
	}
	
	section {
		position: fixed;
		z-index: 10;
		width: 35%;
	}
	
	/* Style the search field */
	form.example input[type=text] {
		padding: 10px;
		font-size: 17px;
		border: 1px solid grey;
		float: left;
		width: 80%;
		background: #f1f1f1;
	}

	/* Style the submit button */
	form.example button {
		float: left;
		width: 20%;
		padding: 10px;
		background: #323742;
		color: white;
		font-size: 17px;
		border: 1px solid grey;
		border-left: none; /* Prevent double borders */
		cursor: pointer;
	}

	form.example button:hover {
		background: #808DA8;
	}
	
		form.example button:active {
		background: #4F5769;
	}

	/* Clear floats */
	form.example::after {
		content: "";
		clear: both;
		display: table;
	}
</style>