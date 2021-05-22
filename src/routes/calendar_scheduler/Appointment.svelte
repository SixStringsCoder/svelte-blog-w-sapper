<script>
	import { scheduleStore } from './stores/schedule-store';
	
	export let apptName;
	export let time;
	export let completed;
  export let dateID;
	export let apptID;
	let trAppt;
	let tdApptName;
	let tdApptTime;
	
	const removeAppt = () => {		
		scheduleStore.update(currState => {		
			currState[dateID] = currState[dateID].filter(appt => appt.id !== apptID);	
			return currState;	
		});
	}
	
	const editApptName = (e) => {
		let newApptName = e.target.textContent;
		scheduleStore.update(currState => {
			let i = currState[dateID].findIndex(appt => appt.id == apptID)
			currState[dateID][i].eventname = newApptName;
			return currState;
		})
	}
	
	const editApptTime = (e) => {
		let newApptTime = e.target.textContent;
		scheduleStore.update(currState => {
			let i = currState[dateID].findIndex(appt => appt.id == apptID)
			currState[dateID][i].time = newApptTime;
			return currState;
		})
	}
	
	
</script>


<tr class:completed
		data-dateID={dateID}
		data-apptID={apptID}
		bind:this={trAppt}>

	<td><input type="checkbox" 
						 bind:checked={completed} />
	</td>
	<td contenteditable
			bind:this={tdApptName}
			on:blur={editApptName}>{apptName}
	</td>
	<td contenteditable
			bind:this={tdApptTime}
			on:blur={editApptTime}>{time}
	</td>
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
	
	td,
	input {
		cursor: pointer
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
	
/* 	.fa-pencil,
	.fa-trash-o {
		cursor: pointer;
	}
	.fa-pencil:active,
	.fa-trash-o:active {
		cursor: pointer;
		color: #F2480A;
	} */
</style>