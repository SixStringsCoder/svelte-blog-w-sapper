<script>
	// https://www.w3schools.com/howto/howto_css_search_button.asp
	export let searchTerm;
</script>


<div class="form-popup" id="myForm">
  <form class="form-container" on:submit|preventDefault>
			<input type="text" 
						 placeholder="Enter event name or month" 
						 name="term" 
						 autocomplete="off"
						 bind:value={searchTerm}>		
    <button type="submit" class="btn">🔍&nbsp;&nbsp;Search</button>
  </form>
</div>


<style>
	* {box-sizing: border-box;}

	/* Add styles to the form container */
	.form-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		padding: 10px;
	}

	
	/* Full-width input fields */
	.form-container input[type=text] {
		width: 100%;
		height: 45px;
		padding: 10px;
		margin: 9px 0;
		border-top: 1px solid #777;
		border-left: 1px solid #777;
		border-bottom: 1px solid #777;
		background: #f1f1f1;
	}

	/* When the inputs get focus, do something */
	.form-container input[type=text]:focus {
		background-color: #ddd;
		outline: none;
	}

	/* Set a style for the submit/login button */
	.form-container .btn {
		background-color: #aaa;
		color: white;
		font-size: 1.1rem;
		width: 20%;
		height: 45px;
		padding: 5px;
		border-top: 1px solid #777;
		border-right: 1px solid #777;
		border-bottom: 1px solid #777;
		cursor: pointer;
		opacity: 1;
	}


	/* Add some hover effects to buttons */
	.form-container .btn:hover {
		background-color: #444;
	}


</style>