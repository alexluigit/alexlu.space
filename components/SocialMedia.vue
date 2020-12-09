<template>
  <div class="social-media">
    <ul class="buttons">
      <li class="buttons__button">
        <a href="#" class="buttons__icon">
          <svg>
            <use xlink:href="~assets/svg/social-media.svg#twitter"></use>
          </svg>
          <span class="buttons__icontext">Twitter</span>
        </a>
      </li>
      <li class="buttons__button">
        <a href="#" class="buttons__icon">
          <svg>
            <use xlink:href="~assets/svg/social-media.svg#youtube"></use>
          </svg>
          <span class="buttons__icontext">Youtube</span>
        </a>
      </li>
      <li class="buttons__button">
        <a href="#" class="buttons__icon">
          <svg>
            <use xlink:href="~assets/svg/social-media.svg#github"></use>
          </svg>
          <span class="buttons__icontext">Github</span>
        </a>
      </li>
      <li class="buttons__button">
        <a href="#" class="buttons__icon">
          <svg>
            <use xlink:href="~assets/svg/social-media.svg#weibo"></use>
          </svg>
          <span class="buttons__icontext">Weibo</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.social-media {
  --size: calc(var(--logo-height) / 2);
  --icon-size: calc(var(--size) / 2);
  position: absolute;
  top: calc(var(--size) / 2);
  right: 3rem;
  .buttons {
    list-style: none;
    &__button {
      display: inline-flex;
    }
    &__icon {
      display: flex;
      max-width: var(--size);
      height: var(--size);
      line-height: var(--size);
      border-radius: calc(var(--size) / 2);
      background: #fff;
      overflow: hidden;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      text-decoration: none;
      svg {
        min-width: var(--icon-size);
        margin: calc((var(--size) - var(--icon-size)) / 2);
      }
      &:hover {
        max-width: 6em;
      }
      transition: all 0.4s ease-in-out;
    }
    &__icontext {
      font-size: 1rem;
      padding-right: 0.5em;
      font-weight: 600;
    }
  }
}
</style>
