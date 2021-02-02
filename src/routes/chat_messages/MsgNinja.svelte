<script>
	export let displayedMsg;
	export let time;
</script>

<div class="container">
  <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-128.png" alt="Ninja Avatar">
  <p>{displayedMsg}</p>
  <span class="time-right">{time}</span>
</div>


<style>
/* Chat containers */
	.container {
		border: 2px solid #dedede;
		background-color: #f1f1f1;
		border-radius: 5px;
		width: 90%;
		padding: 10px;
		margin: 10px 0;
	}

	/* Clear floats */
	.container::after {
		content: "";
		clear: both;
		display: table;
	}

	/* Style images */
	.container img {
		float: left;
		max-width: 60px;
		width: 100%;
		margin-right: 20px;
		border-radius: 50%;
	}


	/* Style time text */
	.time-right {
		float: right;
		color: #aaa;
	}
</style>