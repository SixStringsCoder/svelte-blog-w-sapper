<script>
	import { fade } from 'svelte/transition';
	
	let password = "Select Password length";
	let menuSel = "8";
	$: pwLength = Number(menuSel);
	
	
	
	const charGroups = [
		{ name: "lowercase", min: 97, max: 123},
		{ name: "uppercase", min: 65, max: 91},
		{ name: "numbers", min: 48, max: 58},
		{ name: "symbols", min: 33, max: 43},
	];

	const makeRandomChar = () => {
		// A number between 1 and 4 corresponds with charGroups array above
		let charType = Math.floor(Math.random() * charGroups.length);
		// charGroups in an array of lowercase, uppercase, numbers, & symbol options
		let low = charGroups[charType].min;
		let high = charGroups[charType].max
		// Select a random number between low and high
		let number = Math.floor(Math.random() * (high - low) + low);
		return number;
	}

	const makeRandomPw = (codelength) => {
		let code = "";
		for(let i = 0; i <= codelength; i++) {
			let char = String.fromCharCode(makeRandomChar());     
			code += char;
		}  
		password = code;
	}
	
	const copyCode = () => {
    let pw = document.querySelector('#code');
    pw.select();
		pw.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
  };	
		
</script>

<secton id="pw-cont" transition:fade={{ duration: 200 }}>
	 <!-- The Close Icon -->
  <span class="close" on:click>&times;</span>
	
	<!-- Password Display -->
	<input type="text" id="code" readonly bind:value={password} />
	
	<!-- Menu -->
	<select name="pw-length" 
					id="pw-length-selector" 
					bind:value={menuSel}>
		<option value="8">8 characters</option>
		<option value="12">12 characters</option>
		<option value="15">15 characters</option>
		<option value="20">20 characters</option>
		<option value="25">25 characters</option>
	</select>
	
	<!-- Buttons to Make and Copy PW -->
	<div>
		<button id="code-btn" on:click={() => makeRandomPw(pwLength)}>Make Password</button>
		<button id="copy-btn" on:click={copyCode}>Copy</button>
	</div>
</secton>

<style>
	#pw-cont {
		width: 90%;
		height: auto;
		position: absolute;
		top: 5%;
    left: 50%;
    transform: translate(-50%, 10%); /* center modal */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		background-color: #ddd;
		box-shadow: 0 0 15px 1px black;
	}

	input#code {
		width: 470px;
		height: 40px;
		margin-top: 20px;
		padding: 25px;
		font-size: 1.4rem;
		font-weight: bold;
		border: 1px solid black;
		text-align: center;
		overflow: auto;
	}

	button {
		width: 165px;
		padding: 10px;
		font-size: 1.3rem;
		background-color: #F2B705;
		color: black;
		cursor: pointer;
	}
	
	#copy-btn {
		background-color: #F24405;
		color: white;
	}

	#pw-length-selector {
		width: 340px;
		height: 45px;
		font-size: 1.3rem;
		margin: 0 0 20px 0;
		cursor: pointer;
	}
	
	/* The Close Button */
	.close {
		position: absolute;
		bottom: 10px;
		right: 15px;
		color: #000;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
	}

	.close:hover,
	.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}

</style>