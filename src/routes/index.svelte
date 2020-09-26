<style>
  h1,
  figure {
    text-align: center;
    margin: 0 auto;
  }

  #headings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0;
    color: rgba(255, 62, 0, 1);
  }

  h2 {
    margin-bottom: 1rem;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
    border-radius: 3%;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 1em auto;
    color: #000;
    width: 20%;
  }

  figcaption {
    color: rgba(255, 62, 0, 1);
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>SixStringsCoder Svelte Blog</title>
</svelte:head>

<div id="headings">
  <h1>How-To Svelte</h1>
  <h2 title="https://svelte.dev/">The Blog for Practicing Svelte</h2>
</div>

<figure>
  <!-- <figcaption>Web Dev that's easy peasy...and kinda cheezy!!</figcaption> -->
  <img alt="Rocket Science made easy" src="giphy.gif" />
</figure>

<section>
  <p>
    <strong>This blog contains all the How-To Code snippets for HTML, CSS and
      JavaScript located at <a
        href="https://www.w3schools.com/howto/default.asp">w3schools</a>.</strong>
  </p>
  <p>
    Thanks to w3schools, these useful How-To's can be used to learn new
    front-end libraries. This blog will focus on learning Svelte by creating the
    same useful, ubiquitous <code>code snippets</code>.
  </p>
</section>
