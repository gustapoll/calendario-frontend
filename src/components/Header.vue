<template>
  <header class="banner" :class="headerClass">
    <div class="container">
      <h1>
        <router-link to="/">
          Calendário Dissidente<span v-html="headerSubtitle"></span>
        </router-link>
      </h1>

      <button id="btn-toggle-menu" aria_label="abrir e fechar menu" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.16 19.37"><path fill="#fff" d="M0 0h22.16v3.78H0zM0 7.79h22.16v3.78H0zM0 15.58h22.16v3.78H0z"/></svg>
      </button>

      <nav class="main-nav" :class="{ 'is-open': open }">
        <ul class="menu">
          <li class="has-submenu">
            <a href="#" @click="toggleSubMenu">Calendários</a>
            <ul class="submenu" :class="{ 'is-open': openSubmenu }">
              <li>
                <router-link class="cultura" to="/">Cultura visual</router-link>
              </li>
              <li>
                <router-link class="pantone" to="/pantone">Pantone político</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="aboutLink">Sobre | About</router-link>
          </li>
          <li class="contact">
            <a :href="'mailto:' + email" title="envie seu comentário por email">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['headerClass', 'headerSubtitle', 'aboutLink'],
  data () {
    return {
      open: false,
      openSubmenu: false,
      email: 'didianaprata@usp.br'
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
    },
    toggleSubMenu () {
      this.openSubmenu = !this.openSubmenu
    }
  }
}
</script>

<style lang="scss">
  .banner {
    background-color: $black;
    color: $white;
    padding: 3rem 0 0 0;
    margin-bottom: 1.875rem;

    .container {
      height: inherit;
    }

    h1 {
      text-transform: uppercase;
      font-size: $font-34;
      font-weight: 900;
      letter-spacing: $letter-spacing-50;
      margin: 0;

      a {
        color: $white;
        text-decoration: none;
      }

      span {
        font-size: $font-28;
        display: block;
        font-weight: 500;
        letter-spacing: $letter-spacing-20;
      }

      br {
        display: none;
      }
    }
  }

  .banner.cultura h1 span {
    color: $yellow;
  }

  .banner.pantone h1 span {
    color: $purple;
  }

  .main-nav {
    margin-top: 0.25rem;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .menu,
  .submenu {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
  }

  .has-submenu {
    position: relative;
  }

  .menu li {
    font-size: $font-14;
  }

  .menu a {
    font-weight: 500;
    font-size: inherit;
    color: $black;
    background-color: $white;
    text-align: center;
    padding: 0.25rem 0.25rem 0 0.25rem;
    text-transform: uppercase;
    margin-left: 0.5rem;

    &:hover,
    &:focus {
      color: $black;
      text-decoration: none;
    }
  }

  .contact {
    position: absolute;
    right: 0;
    top: -30px;

    a {
      background: transparent;
      color: $white;
      font-size: $font-12;

      &:hover,
      &:focus {
        color: $white;
      }
    }
  }

  .submenu {
    display: none;
    position: absolute;
    left: 0.5rem;
    top: 01.25rem;
    z-index: 9;
    background: $white;
    min-width: 140px;
    padding-top: 0.25rem;

    &.is-open {
      display: block;
    }
  }

  .submenu li {
    display: block;
    font-size: $font-12;
    margin-bottom: 0.25rem;
    margin-left: 0.1875rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .submenu a {
    background: $black;
    text-align: left;
    font-size: inherit;
    margin-left: 0;
    display: inline-block;
    padding: 0.125rem 0.125rem 0 0.125rem;
  }

  .submenu a.cultura {
    color: $yellow;
  }

  .submenu a.pantone {
    color: $purple;
  }

  #btn-toggle-menu {
    display: none;
  }

  @media screen and (max-width: 68.75rem) {
    .banner {
      padding: 2rem 0 0 0;
    }
  }

  @media screen and (max-width: 48rem) {
    .banner {
      padding: 0;
      position: relative;
      height: $header-mobile-height;
      display: flex;
      align-items: center;

      .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      h1 {
        font-size: $font-22;
        letter-spacing: 0;

        span {
          font-size: $font-18;
          letter-spacing: 0;
        }

        br {
          display: block;
        }
      }
    }

    .main-nav {
      display: none;
      position: absolute;
      top: $header-mobile-height;
      left: 0;
      z-index: 9;
      margin-top: 0;
      background: $black;
      padding: 0.25rem 15px;
      width: 100%;

      &.is-open {
        display: block;
      }
    }

    .menu {
      display: block;
    }

    .menu a {
      text-align: left;
      display: block;
      margin-left: 0;
      margin-bottom: 0.5rem;
    }

    .contact {
      position: static;

      a {
        background: $white;
        color: $black;
        font-size: $font-14;

        &:hover,
        &:focus {
          color: $black;
        }
      }
    }

    .submenu {
      position: static;
      background: transparent;
      padding-top: 0;
    }

    .submenu li {
      margin-left: 0;
      font-size: $font-14;
      margin-bottom: 0.5rem;
    }

    #btn-toggle-menu {
      display: block;
      background: transparent;
      padding: 0;
      width: 22px;
      border: 0;

      &:focus {
        outline: 0;
      }
    }
  }

  @media screen and (max-width: 21.25rem) {
    .banner {
      h1 {
        font-size: $font-18;

        span {
          font-size: $font-14;
        }
      }
    }
  }
</style>
