<script>
  export let segment;
</script>

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
    font-size: 1.7em;
    font-weight: 700;
    margin: 0.3rem 0 0;
    color: rgba(255, 62, 0, 1);
  }

  h2 {
    font-size: 1.4em;
    margin-bottom: 1rem;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 300px;
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
    /* margin: 1em auto; */
    width: 70%;
    padding: 0 1rem;
    color: #000;
    text-align: justify;
  }

  #exercise-list {
    text-align: left;
  }

  ul {
    margin: 0 0 0 -30px;
    list-style: none;
    font-size: 1.3rem;
  }

  li {
    line-height: 170%;
  }


  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    p {
      width: 40%;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    p {
      width: 30%;
    }
  }
</style>

<svelte:head>
  <title>SixStringsCoder Svelte Blog</title>
</svelte:head>

<div id="headings">
  <h1>How-To-Svelte</h1>
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

<section id="exercise-list">
  <h1>Exercises</h1>
  <ul>
    <li><a
      aria-current={segment === 'slideshow_gallery' ? 'page' : undefined}
      href="slideshow_gallery">Slideshow Gallery</a></li>
    <li><a
      aria-current={segment === 'lightbox' ? 'page' : undefined}
      href="lightbox">Lightbox</a></li>
    <li><a
      aria-current={segment === 'scroll_effects' ? 'page' : undefined}
      href="scroll_effects">Scroll Effects</a></li>
    <li><a
      aria-current={segment === 'typewriter' ? 'page' : undefined}
      href="typewriter">Typewriter Effect</a></li>
    <li><a
      aria-current={segment === 'progress_bar' ? 'page' : undefined}
      href="progress_bar">Progress Bar</a></li>
    <li><a
      aria-current={segment === 'tree_view' ? 'page' : undefined}
      href="tree_view">Tree View</a></li>
    <li><a
      aria-current={segment === 'accordion' ? 'page' : undefined}
      href="accordion">Accordion</a></li>
    <li><a
      aria-current={segment === 'autocomplete' ? 'page' : undefined}
      href="autocomplete">Autocomplete</a></li>
    <li><a
      aria-current={segment === 'audioplayer' ? 'page' : undefined}
      href="audioplayer">Audio Player</a></li>
    <li><a
      aria-current={segment === 'portfolio_gallery' ? 'page' : undefined}
      href="portfolio_gallery">Portfolio Gallery with Filtering</a></li>
    <li><a
      aria-current={segment === 'flashcards' ? 'page' : undefined}
      href="flashcards">Flashcards with Flip Effect</a></li>
  </ul>
</section>
