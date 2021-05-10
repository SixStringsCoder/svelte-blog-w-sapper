<script>

	export let apptName = "Hit the gym";
</script>


<tr class="completed">
	<td><input type="checkbox" checked /></td>
	<td>{apptName}</td>
	<td>9:00 am</td>
	<td><i class="fa fa-trash-o fa-2x"></i></td>	
</tr>


<style>

	td {
		text-align: left;
		padding: 6px;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
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
</style>