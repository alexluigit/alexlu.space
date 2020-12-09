<template>
  <header class="nav-container">
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item logo">
          <nuxt-link to="/" class="nav-link logo-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text logo-link-text">Alex@Dev</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Home</span></nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/blog">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Blog</span></nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/wiki">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Wiki</span></nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/tag">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Topics</span></nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">About</span></nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/settings">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">settings</span></nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.nav-container {
  position: fixed;
  z-index: 2;
  top: 0;
  height: 4rem;
  transition: background var(--transition-speed) ease-in-out,
    height 0.3s 0.3s ease-in-out;
  .navbar {
    display: flex;
    height: 100%;
    overflow: hidden;
    .navbar-nav {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      .nav-item {
        transition: all var(--transition-speed) ease-in-out;
        width: var(--logo-width);
        display: grid;
        transform: translateX(-20em);
        .nav-link {
          height: 8em;
          display: grid;
          align-items: center;
          grid-template-columns: 2em auto;
          color: var(--text-primary);
          text-decoration: none;
          filter: grayscale(100%) opacity(0.7);
          transition: var(--transition-speed);
          .svg-inline--fa {
            width: 2em;
            margin: 1em;
            margin-left: 4em;
            transform: rotate(0deg);
            transition: var(--transition-speed);
          }
          &:hover {
            filter: grayscale(0%) opacity(1);
            background: var(--bg-secondary);
            color: var(--text-secondary);
          }
          .link-text {
            display: flex;
            font-size: 1.2rem;
            justify-content: center;
            font-weight: 600;
            margin-left: 0.5em;
          }
          .fa-primary {
            color: #ff7eee;
            transition: var(--transition-speed);
          }
          .fa-secondary {
            color: #df49a6;
            transition: var(--transition-speed);
          }
        }
      }
      .logo {
        background: var(--bg-secondary);
        transform: translateX(0);
        &:hover {
          .logo-link {
            .logo-link-text {
              left: 1em;
            }
            .svg-inline--fa {
              margin-left: 11em;
              transform: rotate(-180deg);
            }
          }
        }
        .logo-link {
          height: 4rem;
          .svg-inline--fa {
            margin-left: 1.6em;
          }
          .logo-link-text {
            font-size: 1.6rem;
            position: absolute;
            font-weight: 600;
            left: 3em;
            transition: var(--transition-speed);
          }
        }
      }
    }
  }
}

/* small screens */
@media only screen and (max-width: 700px) {
  .nav-container {
    &:hover {
      height: 100vh;
      background: var(--bg-primary);
      & + .main-content:last-child {
        margin-left: var(--logo-width);
      }
      .navbar {
        overflow-y: auto;
        height: 100vh;
        .navbar-nav {
          .nav-item {
            transform: translateX(0);
            &:last-child {
              margin-top: auto;
            }
          }
        }
      }
    }
  }
}

/* large screens */
@media only screen and (min-width: 700px) {
  .nav-container {
    /* border: 2px solid red; */
    display: flex;
    height: 4rem;
    .navbar {
      /* border: 2px solid blue; */
      height: 4rem;
      display: flex;
      background: var(--bg-primary);
      overflow: hidden;
      transition: all var(--transition-speed) ease-in-out;
      .navbar-nav {
        width: 80vw;
        /* border: 2px solid red; */
        flex-direction: row;
        .nav-item {
          transform: unset;
          height: 100%;
          /* border: 2px solid red; */
          width: 10vw;
          .nav-link {
            /* border: 2px solid red; */
            height: 4rem;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            .link-text {
              /* border: 2px solid red; */
              grid-column: 2 / 3;
              margin-left: unset;
            }
            .svg-inline--fa {
              display: none;
            }
          }
          &:last-child {
            margin-left: auto;
            width: unset;
            .nav-link {
              padding: 0 1em;
              grid-template-columns: unset;
              .link-text {
                display: none;
              }
              .svg-inline--fa {
                margin: auto;
                display: inline-block;
              }
            }
          }
        }
        .logo {
          width: var(--logo-width);
          .logo-link {
            display: flex;
            .logo-link-text {
              left: 3em;
            }
            .svg-inline--fa {
              display: flex;
              margin-left: 1.6em;
            }
          }
        }
      }
    }
  }
}
</style>
