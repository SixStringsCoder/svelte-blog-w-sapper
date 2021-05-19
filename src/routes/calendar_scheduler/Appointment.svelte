<script>
	import { tick } from 'svelte'
	import scheduleStore from './schedule-store.js';
	
	export let apptName;
	export let time;
	export let completed;
  export let dateID;
	export let apptID;
	let apptRow;
	
	const removeAppt = () => {		
		scheduleStore.update(currState => {		
			currState[dateID] = currState[dateID].filter(appt => appt.id !== apptID);	
			return currState;	
		});
	}
</script>


<tr class:completed
		data-dateID
		data-apptID
		bind:this={apptRow}>
	<td><input type="checkbox" bind:checked={completed} /></td>
	<td>{apptName}</td>
	<td>{time}</td>
	<td>
		<i class="fa fa-trash-o fa-2x"
			 on:click={removeAppt}></i>
	</td>	
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
	
	.fa-trash-o {
		cursor: pointer;
	}
	.fa-trash-o:active {
		cursor: pointer;
		color: red;
	}
</style>