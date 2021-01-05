<template>
  <layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>
    <g-link
      v-for="post in posts"
      :key="post.id"
      :to="`/journal/${post.id}/`"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title">
          {{ post.title }}
        </h2>
        <p class="journal-excerpt">
          {{ post.subTitle }}
        </p>
      </div>
    </g-link>
  </layout>
</template>

<page-query>
query {
  posts: allStrapiPost {
    edges {
      node {
        id
        title,
        subTitle
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Journal",
  computed: {
    posts() {
      return (this.$page.posts.edges || []).map(item => item.node);
    }
  },
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
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}
</style>
