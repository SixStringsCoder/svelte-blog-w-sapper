<script>
  export let iframeURL;
  export let title;
  export let replURL;
</script>


<footer class="iframe-repl">
	<div>	
		<iframe width="560" height="315" {title} src={iframeURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
	<div>
		<a href={replURL} target="_blank">View Svelte Code</a>
	</div>
</footer>

<style>
  footer.iframe-repl {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    padding: 20px 0;
    border-top: 1px solid rgb(165, 161, 161);
  }

</style>