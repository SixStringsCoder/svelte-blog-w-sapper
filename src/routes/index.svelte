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
    <li><a
      aria-current={segment === 'biz_card_flip' ? 'page' : undefined}
      href="biz_card_flip">Biz Cards with Flip Effect</a></li>
    <li><a
      aria-current={segment === 'password_maker' ? 'page' : undefined}
      href="password_maker">Password Maker</a></li>
    <li><a
      aria-current={segment === 'off_canvas_menu_toggle' ? 'page' : undefined}
      href="off_canvas_menu_toggle">Off-Canvas Menu toggle</a></li>
    <li><a
      aria-current={segment === 'quote_rotator' ? 'page' : undefined}
      href="quote_rotator">Quote rotator</a></li>
    <li><a
      aria-current={segment === 'emoji_keyboard' ? 'page' : undefined}
      href="emoji_keyboard">Emoji Menu Keyboard</a></li>
    <li><a
      aria-current={segment === 'playing_cards_blackjack' ? 'page' : undefined}
      href="playing_cards_blackjack">Playing Cards: Blackjack</a></li>
    <li><a
      aria-current={segment === 'video_float_window' ? 'page' : undefined}
      href="video_float_window">Video Float on Scroll</a></li>
    <li><a
      aria-current={segment === 'sort_table' ? 'page' : undefined}
      href="sort_table">Sort Table by Column</a></li>
    <li><a
      aria-current={segment === 'sign_up_form' ? 'page' : undefined}
      href="sign_up_form">Sign Up Form - Modal</a></li>
    <li><a
      aria-current={segment === 'tabs_full_page' ? 'page' : undefined}
      href="tabs_full_page">Full Page - Tabs</a></li>
    <li><a
      aria-current={segment === 'chat_messages' ? 'page' : undefined}
      href="chat_messages">Chat Messages</a></li>
    <li><a
      aria-current={segment === 'news_api' ? 'page' : undefined}
      href="news_api">Hacker News API</a></li>
    <li><a
      aria-current={segment === 'filter_books' ? 'page' : undefined}
      href="filter_books">Filter Books with Menu and Search Input</a></li>
    <li><a
      aria-current={segment === 'star_rating' ? 'page' : undefined}
      href="star_rating">Star rating (adjust with click)</a></li>
    <li><a
      aria-current={segment === 'skills_bar' ? 'page' : undefined}
      href="skills_bar">Skills bars</a></li>
    <li><a
      aria-current={segment === 'scroll_indicator' ? 'page' : undefined}
      href="scroll_indicator">Scroll Indicator</a></li>
    <li><a
      aria-current={segment === 'timeline_holidays' ? 'page' : undefined}
      href="timeline_holidays">Timeline with search - Holidays</a></li>
    <li><a
      aria-current={segment === 'calendar_scheduler' ? 'page' : undefined}
      href="calendar_scheduler">calendar with scheduler</a></li>
  </ul>
</section>