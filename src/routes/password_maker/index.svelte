<script>
	import VideoRepl from '../../components/VideoRepl.svelte';

	import RegForm from './RegForm.svelte';
	import PasswordGen from './PasswordGen.svelte';
	
	let modalShowing = false;
	// $:console.log(password)
</script>

<style>
</style>

<RegForm on:click={() => modalShowing = true} />

{#if modalShowing}
	<PasswordGen on:click={() => modalShowing = false} />
{/if}

		
<VideoRepl iframeURL="https://www.youtube.com/embed/86q_C2u8tCY"
          title="Password Generator Svelte Tutorial"
					replURL="https://svelte.dev/repl/18c8bcd42b264a50bb5a31b829da4db4?version=3.31.0" />
					
