<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">Hi there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun.</h2>
      </div>
      <div class="projects">
        <div class="project">
          <g-link to="/projects/chelsea-landmark/" class="project-link">
            <g-image width="2560" src="/mike-dorner.jpg" alt="" class="thumbnail" />
            <h3 class="project-title">Banana</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">pink</span>
            </div>
          </g-link>
        </div>
        <div class="project">
          <g-link to="/projects/sunk/" class="project-link">
            <g-image width="2560" src="/cody-davis.jpg" alt="" class="thumbnail" fit="contain" />
            <h3 class="project-title">Pineapple</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">blue</span>
            </div>
          </g-link>
        </div>
        <div class="project">
          <g-link to="/projects/3d-graff/" class="project-link">
            <g-image width="2560" src="/ian-dooley.jpg" alt="" class="thumbnail" style="width: 100%"/>
            <h3 class="project-title">Ice Cream</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">yellow</span>
            </div>
          </g-link>
        </div>
        <div class="project">
          <g-link to="/projects/ios-concept/" class="project-link">
            <g-image width="2560" src="/markus-spiske.jpg" alt="" class="thumbnail" style="width: 100%"/>
            <h3 class="project-title">Porta400</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">yellow</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link class="journal">
            <h3 class="journal-title">
              Gridsome with Forestry CMS
            </h3>
          </g-link>
          <g-link class="journal">
            <h3 class="journal-title">
              VueJS for your next project
            </h3>
          </g-link>
          <g-link class="journal">
            <h3 class="journal-title">
              macOS development environment
            </h3>
          </g-link>
          <g-link class="journal">
            <h3 class="journal-title">
              About Typography
            </h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style scoped lang="less">

.home-links a {
  margin-right: 1rem;
}

.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: .6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background .25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}
.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}

.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem;
  }
  .hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    opacity: .6;
  }
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  .project-link {
    text-decoration: none;
  }
  .thumbnail {
    height: 560px;
    -o-object-fit: cover;
    object-fit: cover;
    transition: all .15s ease;
    box-shadow: 0 0 40px -20px rgba(0,0,0,.25);
  }
  .project-title {
    font-size: 1rem;
    color: var(--color-contrast);
    margin: 2rem 0 1rem;
  }
  .categories {
    font-size: .8rem;
    color: var(--color-contrast-1);
    .category {
      margin-right: .8rem;
    }
  }
}
.project {
  grid-column: auto/span 2;
  text-align: center;
  &:hover .thumbnail {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -20px rgba(0,0,0,.25);
  }
}

@media (min-width: 920px) {
  .project {
    grid-column: auto/span 1;
  }
  .project:nth-child(3n+1) {
    grid-column: auto/span 2;
  }
}

@media (min-width: 580px) {
  .journal:first-child,
  .journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }
  .journal:first-child {
    border-right: 1px solid var(--color-base-1);
  }
  .journal {
    flex: 0 0 50%;
  }
}

@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
  .journal:first-child,
  .journal:nth-child(2),
  .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
}
</style>
