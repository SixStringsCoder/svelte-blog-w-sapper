<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    height: 95vh;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
