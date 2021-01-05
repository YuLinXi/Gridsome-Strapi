<template>
  <layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">VueJS for your next project</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">Nichlas W. Andersen</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>4. June 2019</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
        <div
          class="journal-content"
        >
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {
  name: "journal_id"
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
