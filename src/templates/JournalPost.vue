<template>
  <layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{ post.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{ post.author }}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{ $dayjs(post.published_at).format('ll') }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ post.time }}}</span>
            </div>
          </div>
        </div>
        <div
          class="journal-content"
          v-html="post.content"
        >
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query ($id: ID!){
  strapiPost(id: $id) {
    title
    subTitle
    content
    author
    time
    published_at
  }
}
</page-query>

<script>
export default {
  name: "JournalPost",
  computed: {
    post() {
      return this.$page.strapiPost
    }
  }
}
</script>

<style scoped lang="less">
.journal-container {
  max-width: 840px;
}

.journal-header {
  padding: 2rem 0 4rem;
}

.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: .8rem;

  > div {
    margin-right: 4rem;
  }
}

.journal-author {

}
</style>
