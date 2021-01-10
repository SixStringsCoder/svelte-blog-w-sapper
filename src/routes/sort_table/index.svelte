<script>
	// https://www.w3schools.com/howto/howto_js_sort_table.asp
	// https://mockaroo.com/
	
	import { personData } from './personData.js';
	
	const tableHeaders = Object.keys(personData[0]);
	let sortedPersonData = personData;
	let selectedHeader = "id";
	let ascendingOrder = true;
	
	// SORT by NUMBER
	const sortByNumber = (prop) => {
		sortedPersonData = personData.sort((a, b) => {
			return ascendingOrder ? Number(a[prop]) - Number(b[prop])
			: Number(b[prop]) - Number(a[prop]);
		});
		selectedHeader = prop; // highlight header clicked
		// console.log(personData)
	}
	
	// SORT by STRING
	const sortByString = (prop) => {
		sortedPersonData = personData.sort((a, b) => {
			if (a[prop].toUpperCase() < b[prop].toUpperCase()) {
				return -1;
			} else if (a[prop].toUpperCase() > b[prop].toUpperCase()) {
				return 1;
			}
			return 0; // strings are equal
		});	
		if (!ascendingOrder) {
			sortedPersonData = sortedPersonData.reverse()
		}
		selectedHeader = prop; // highlight header clicked
		// console.log(personData)
	}	
</script>

<table id="myTable">
  <tr>
		{#each tableHeaders as header}
				<th class:highlighted={header === selectedHeader}
						title="Click to sort by {header.replace("_", " ")}."
						on:click={() => {
							return (header === "id" || header === "age") ? sortByNumber(header) 
							: sortByString(header)
						}}>
					{header.replace("_", " ")}
					
					{#if header === selectedHeader}
						<span class="order-icon" on:click={() => ascendingOrder = !ascendingOrder}>
							{@html ascendingOrder ? "&#9661;" : "&#9651;"}
						</span>
					{/if}
				</th>
		{/each}
  </tr>
	
	{#each sortedPersonData as person}
		<tr>
			<td>{person.id}</td>
			<td>{person.first_name}</td>
			<td>{person.last_name}</td>
			<td>{person.age}</td>
			<td>{person.job_title}</td>
			<td>{person.country}</td>
		</tr>
	{/each}
</table>


<style>
	table {
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
	}
	
	th {
		text-transform: uppercase;
		cursor: pointer;
	}
	
	.order-icon {
		color: hsl(15, 100%, 25%);
	}
	
	.highlighted {
		color: hsl(15, 100%, 45%);
	}
	
	th, td {
		text-align: left;
		padding: 16px;
	}

	tr:nth-child(even) {
		background-color: #ccc;
	}
</style>