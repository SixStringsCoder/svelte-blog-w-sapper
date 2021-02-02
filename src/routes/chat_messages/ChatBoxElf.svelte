<script>
	export let username;
	export let chatMsgElf;
	
</script>


<div class="chat-form-cont">
	<form on:submit|preventDefault class="form-container" id={username}>
		<img src="https://www.discordavatars.com/wp-content/uploads/2020/05/117994965803466752.jpg" alt={`${username} Avatar`} />
		<label for="msg"><b>{username}</b></label>
		<input placeholder="Type message.." 
					 		autocomplete="off"
							required 
							bind:value={chatMsgElf}
							on:focus />

		<button type="submit" class="btn">Send</button>
	</form>
</div>


<style>
	*{box-sizing: border-box;}	

	img {
		width: 10%;
	}
	/* Add styles to the form container */
	.form-container {
		max-width: 300px;
		padding: 10px;
		background-color: #ddd;
	}

	/* Full-width textarea */
	.form-container input {
		width: 100%;
		padding: 15px;
		margin: 5px 0 22px 0;
		border: none;
		background: #f1f1f1;
		resize: none;

	}

	/* When the textarea gets focus, do something */
	.form-container input:focus {
		background-color: #ddd;
		outline: none;
	}

	/* Set a style for the submit/login button */
	.form-container .btn {
		background-color: hsla(28, 100%, 40%, 1);
		color: white;
		padding: 16px 20px;
		border: none;
		cursor: pointer;
		width: 100%;
		margin-bottom:10px;
		opacity: 0.8;
	}

	/* Add some hover effects to buttons */
	.form-container {
		opacity: 1;
	}
</style>