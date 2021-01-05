<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link">
            <g-image src="~/assets/img/logo.svg" class="logo" alt="Nichlas W. Andersen"/>
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journal" class="nav__link">Journal</g-link>
          <g-link to="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2019</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="less" scoped>
  .header {
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    position: relative;
    height: 6rem;
    z-index: 10;
    > .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
    .nav {
      > .nav__link {
        font-size: .9rem;
        font-weight: 600;
        text-decoration: none;
        margin-top: 4px;
        margin-right: 3rem;
        padding-bottom: 4px;
        border-bottom: 1px solid;
        border-color: transparent;
        transition: border .15s;
      }
      > .active,
      > .nav__link:hover {
        border-color: inherit;
      }
    }
    .home-link {
      text-decoration: none;
    }
    .logo {
      height: 1.5rem;
    }
  }
  .footer {
    font-size: .8rem;
    padding: 6rem 0;
  }
</style>
