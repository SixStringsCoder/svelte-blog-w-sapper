<script>
const date = new Date();

const today = {
	day: date.getDate(),
	month: date.getMonth(),
	year: date.getFullYear(),
}

let currentYear = date.getFullYear();
const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
let currentMonthIndex = date.getMonth();
// let currentMonth = date.toLocaleString('en-US', { month: 'long' });	
$: currentMonth = monthNames[currentMonthIndex];		
const currentDay = date.getDate();
	
$: firstDayIndex = new Date(currentYear, currentMonthIndex, 1).getDay(); // Sunday is 0
$: numberOfDays = new Date(currentYear, currentMonthIndex+1, 0).getDate();
	
	
const goToNextMonth = () => {
	if (currentMonthIndex === 11) {
		currentYear += 1;
		return currentMonthIndex = 0;
	}
	return currentMonthIndex += 1;
}

const goToPrevMonth = () => {
	if (currentMonthIndex === 0) {
		currentYear -= 1;
		return currentMonthIndex = 11;
	}
	return currentMonthIndex -= 1;
}


const calendarCellsQty = firstDayIndex <= 4 ? 35 : 42;
	
$: console.log(`${currentMonth} ${currentDay}, ${currentYear}, No. of days: ${numberOfDays}, first day: ${firstDayIndex}`);
	
</script>


<div class="month">
	<ul>
		<li class="prev" on:click={goToPrevMonth}>&#10094;</li>
		<li class="next" on:click={goToNextMonth}>&#10095;</li>
		<li>{currentMonth}<br>
				<span style="font-size:18px">{currentYear}</span>
		</li>
	</ul>
</div>

<ul class="weekdays">
	<li>Su</li>
	<li>Mo</li>
	<li>Tu</li>
	<li>We</li>
	<li>Th</li>
	<li>Fr</li>
	<li>Sa</li>
</ul>

<ul class="days">
	{#each Array(calendarCellsQty) as _, i}
		{#if i < firstDayIndex || i >= firstDayIndex+numberOfDays}
			<li data-index={(i-firstDayIndex)+1}>&nbsp;</li>
		{:else}
			<li class:active={currentYear === today.year && currentMonthIndex === today.month && i === currentDay+(firstDayIndex-1)}
					data-index={(i-firstDayIndex)+1}>
				{(i-firstDayIndex)+1}
			</li>
		{/if}
	{/each}
</ul>


<style>
	ul {list-style-type: none;}

	/* Month header */
	.month {
		padding: 70px 25px;
		width: auto;
		background: #1abc9c;
		text-align: center;
	}

	/* Month list */
	.month ul {
		margin: 0;
		padding: 0;
	}

	.month ul li {
		color: white;
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 3px;
	}

	/* Previous button inside month header */
	.month .prev {
		float: left;
		padding-top: 10px;
		cursor: pointer;
	}

	/* Next button */
	.month .next {
		float: right;
		padding-top: 10px;
		cursor: pointer;
	}

	/* Weekdays (Mon-Sun) */
	.weekdays {
		margin: 0;
		padding: 10px 0;
		background-color:#ddd;
	}

	.weekdays li {
		display: inline-block;
		width: 13.6%;
		color: #666;
		text-align: center;
	}

	/* Days (1-31) */
	.days {
		padding: 10px 0;
		background: #eee;
		margin: 0;
	}

	.days li {
		list-style-type: none;
		display: inline-block;
		border: 1px solid black;
		padding: 9px;
		width: 11.6%;
		text-align: center;
		margin-bottom: 1px;
		font-size: 1.2rem;
		color: #777;
		cursor: pointer;
	}

	/* Highlight the "current" day */
	.active {
		padding: 5px;
		background: #1abc9c;
		color: white !important
	}
</style>