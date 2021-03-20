<script>
	export let searchDate;
	export let searchTerm;
</script>

<div class="form-popup" id="myForm">
  <form class="form-container" on:submit|preventDefault>

		<div>
			<label for="date"><b>Search by Date </b></label>
			<input type="number" 
					 placeholder="Enter event month" 
					 name="date"
					 bind:value={searchDate}>
		</div>
    
			
		<div>
			<label for="term"><b>Search by Term</b></label>
			<input type="text" 
						 placeholder="Enter event name" 
						 name="term" 
						 autocomplete="off"
						 bind:value={searchTerm}>
		</div>	
			
    <button type="submit" class="btn">=&nbsp;&nbsp;Search</button>
  </form>
</div>

<style>
	* {box-sizing: border-box;}

	/* Add styles to the form container */
	.form-container {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		width: 100%;
		padding: 10px;
	}

	.form-container div {
		width: 30%;
	
	}
	
	/* Full-width input fields */
	.form-container input[type=text], .form-container input[type=number] {
		width: 100%;
		padding: 10px;
		margin: 5px 0;
		border: none;
		background: #f1f1f1;
	}

	/* When the inputs get focus, do something */
	.form-container input[type=text]:focus, .form-container input[type=number]:focus {
		background-color: #ddd;
		outline: none;
	}

	/* Set a style for the submit/login button */
	.form-container .btn {
		background-color: #aaa;
		color: white;
		font-size: 1.1rem;
		width: 115px;
		height: 45px;
		padding: 5px;
		border: 1px solid black;
		cursor: pointer;
		opacity: 1;
	}


	/* Add some hover effects to buttons */
	.form-container .btn:hover {
		background-color: #444;
	}


</style>