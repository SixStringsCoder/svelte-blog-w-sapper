<script>
  export let displayedMsg;
	export let time;
</script>


<div class="container darker">
  <img src="https://www.discordavatars.com/wp-content/uploads/2020/05/117994965803466752.jpg" alt="Elf Avatar" class="right">
  <p>{displayedMsg}</p>
  <span class="time-left">{time}</span>
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
	
	p {
		text-align: right;
	}

	/* Darker chat container */
	.darker {
		border-color: #ccc;
		background-color: #ddd;
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

	/* Style the right image */
	.container img.right {
		float: right;
		margin-left: 20px;
		margin-right:0;
	}
	
	/* Style time text */
	.time-left {
		float: left;
		color: #999;
	}
</style>