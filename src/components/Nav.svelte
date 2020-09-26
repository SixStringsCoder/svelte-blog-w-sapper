<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    /* display: flex;
    align-items: center; */
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0;
    color: rgb(255, 254, 254);
  }

  code {
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    color: #fff;
    font-size: 1.3rem;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.7em;
    display: block;
  }
</style>

<nav>
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <div>
      <h1><code>&#123;6&#125;</code> SixStringsCoder</h1>
    </div>
  </a>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">blog</a>
    </li>
  </ul>
</nav>
