<script>
  import VideoRepl from '../../components/VideoRepl.svelte';
	let phrase = ""; // text to be typed
	let typedChar = ""; // SECTION displaying typed text
	let index = 0; 
	// $: console.log(index);
	let typewriter; // for setInterval/clearInterval
	
	// If Input is empty, clear out SECTION displaying typed text
	$: if (!phrase) {
		typedChar = "";
		index = typedChar.length;
	}
	
	// Disable START button; prevent clicking twice 
	let isTyping = false;
	
	// AUDIO SFX 
	const typingSFX = [
		"https://assets.codepen.io/504854/type_1.mp3",
		"https://assets.codepen.io/504854/type_2.mp3",
		"https://assets.codepen.io/504854/type_3.mp3"
	];
	
	const playSFX = () => {
		let random = Math.floor(Math.random() * typingSFX.length);
		let url = typingSFX[random];
		let keySFX = new Audio(url);
		
		keySFX.play();
		keySFX.volume = Math.random();
	}
	
	const typeChar = () => {
		if (index < phrase.length) {
			isTyping = true;
			typedChar += phrase[index];
			playSFX();
			index += 1;
		} else {
			stopTyping();
			return;
		}
	}
	
	const typing = () => typewriter = setInterval(typeChar, 100);
	
	const stopTyping = () => {
		clearInterval(typewriter);
		isTyping = false;
	}
	
</script>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
	
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: hsl(44, 11%, 61%);
	}
	
	section {
		display: flex;
		flex-direction: column;
		width: 80%;
		height: 800px;
		margin: 2% 0 1%;
		padding: 10px;
		background: #eee url(https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80);
		box-shadow: 0 -8px 10px -6px #000000, 8px 0 10px -6px #000000;
		overflow: scroll;
	}
	
	p {
    width: 100%;
		font-size: 1.2rem;
		line-height: 150%;
		font-family: 'Special Elite', cursive;
	}
	
	form {
		width: 90%;
		display: flex;
		flex-direction: column;			
	}
	
	input[type=text] {
		padding: 10px;
		box-shadow: inset 0 1px 3px black;
	}
	
	button {
		font-size: 1.3rem;
		color: white;
		box-shadow: 0 1px 3px black;
		cursor: pointer;
	}
	
	button:active {
		box-shadow: inset 1px 0 3px black;
	}
	
	button#startBtn {
		background: hsla(72, 29%, 43%, 1);
	}
	
	button#stopBtn {
		background: hsla(0, 90%, 29%, 1);
	}
	
	button#startBtn:disabled {
		background: #ddd;
		cursor: auto;
		box-shadow: none;
	}

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    section {
      width: 40%;
      height: 400px;
    }

    form {
		  width: 41%;
      height: 150px;
      justify-content: space-around;
      margin-bottom: 1%;
    }

    button {
      padding: 5px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

  }
	
</style>


<main>
	<section>
		<p>{typedChar}</p>
	</section>
	
	<form on:submit|preventDefault={typing}>
		<input type="text" 
					 bind:value={phrase}  
					 placeholder="Paste your text here. Click start."/>	
		<button id="startBtn"  disabled={isTyping}>Start</button>
		<button id="stopBtn" on:click|stopPropagation|preventDefault={() => stopTyping()}>Stop</button>
	</form>	
		
</main>


<VideoRepl iframeURL="https://www.youtube.com/embed/ol--Sk8hnjQ"
 					 title="Typewriter Effect Svelte Tutorial"
 					 replURL="https://svelte.dev/repl/feb73de2a74544d2afa8e8fffc2ed29c?version=3.29.7" />
