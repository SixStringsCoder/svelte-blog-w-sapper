<script>
	import Form from './Form.svelte';
	import Button from './Button.svelte';
	
	let showForm = false;
	const toggleForm = () => showForm = !showForm;
	
	const handleSubmit = () => {
		alert("Form has been submitted!")
		showForm = false;
	}
	
	let emailValue;
	let pwValue
	let pwRepeatValue
	let rememberPW;
	$: console.log(emailValue, pwValue, rememberPW)
</script>


<h2>Modal Signup Form</h2>
<Button on:click={toggleForm} 
				btnType="button"
				btnText="Sign Up" />

{#if showForm}
	<Form on:close={toggleForm} 
				on:cancelClose={toggleForm}
				on:submit={handleSubmit}
				{showForm}
				bind:emailValue
				bind:pwValue
				bind:pwRepeatValue
				bind:rememberPW />
{/if}


<style>
	* {box-sizing: border-box;}	
</style>