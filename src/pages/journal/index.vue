<template>
  <layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>
    <g-link to="/journal/123/" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">
          Gridsome with Forestry CMS
        </h2>
        <p class="journal-excerpt">
          Get up and running with Forestry CMS, a git-backed headless CMS with a slick editing interface.
        </p>
      </div>
    </g-link>
  </layout>
</template>

<script>
export default {
  name: "Journal"
}
</script>

<style scoped lang="less">
  .journal-hero {
    padding: 4rem 0;
    text-align: center;
    color: var(--color-base-1);
  }
  .journal-header {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
  .journal-post {
    display: block;
    padding: 2rem 0;
    text-decoration: none;
    transition: background .5s ease;
    &:hover {
      background-color: var(--color-base-1);
      > .journal {
        transform: translateX(4rem);
      }
    }
  }
  .container.journal {
    max-width: 720px;
  }
  .journal-post > .journal {
    transition: transform .5s ease;
  }
  .journal-post h1,
  .journal-post h2 {
    margin: 0;
    padding: 0;
  }
  .journal-title {
    font-size: 2rem;
    color: var(--color-contrast);
  }

  @media (min-width: 560px) {
    .journal-post{
      padding: 3rem 0;
    }
  }

  @media (min-width: 860px) {
    .journal-post {
      padding: 5rem 0;
    }
  }
</style>
