<script>
  export let btnText;
	export let btnType;
</script>

<button type={btnType} on:click style="width:auto;">{btnText}</button>


<style>
	/* Set a style for all buttons */
	button {
		background-color: #4CAF50;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		cursor: pointer;
		width: 100%;
		opacity: 0.9;
	}

	button:hover {
		opacity:1;
	}
</style>