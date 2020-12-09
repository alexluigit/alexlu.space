<template>
  <div class="search-post">
    <input
      v-model="searchQuery"
      type="search"
      class="search-post__input"
      autocomplete="off"
      placeholder="Search Articles"
      aria-label="search"
    />
    <button class="search-post__submit" aria-label="submit search">
      <svg>
        <use xlink:href="~assets/svg/button.svg#search"></use>
      </svg>
    </button>
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("/", { deep: true })
        .limit(6)
        .search(searchQuery)
        .fetch();
      this.$emit("SearchResult", this.articles);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-post {
  --size: calc(var(--logo-height) / 2);
  --space: 0.5em;
  height: var(--size);
  width: var(--size);
  display: flex;
  border-radius: calc(var(--size) / 2);
  position: relative;
  transition: width 300ms cubic-bezier(0.18, 0.89, 0.32, 1.14);
  margin-top: calc(var(--size) / 2 - var(--offset));
  margin-left: auto;
  margin-right: var(--space);
  overflow: hidden;
  &__input {
    flex-grow: 1;
    font-size: 0.9rem;
    padding: 0 var(--space);
    position: absolute;
    border: 0;
    top: 0;
    bottom: 0;
    line-height: calc(var(--size) - var(--offset));
    opacity: 0;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
  &__submit {
    height: calc(var(--size));
    width: calc(var(--size));
    svg {
      width: calc(var(--size) - var(--offset) - var(--space));
      height: calc(var(--size) - var(--offset) - var(--space));
      position: absolute;
      top: calc(var(--offset) / 2);
      left: calc(var(--offset) / 2);
    }
    cursor: pointer;
    border: 0;
    border-radius: calc(var(--size) / 2);
    background: red;
    margin: auto;
    transition: background 300ms ease-in-out;
  }
  &:focus-within {
    background: white;
    width: var(--search-bar);
    .search-post__input {
      opacity: 1;
      cursor: initial;
      width: calc(var(--search-size) - var(--size));
    }
    .search-post__submit {
      height: calc(var(--size) - var(--offset));
      width: calc(var(--size) - var(--offset));
      color: white;
      position: absolute;
      top: calc((var(--offset) - var(--space)) / 2);
      right: calc((var(--offset) - var(--space)) / 2);
      border-radius: calc(var(--size) / 2);
      svg {
        width: calc(100% - var(--offset));
        height: calc(100% - var(--offset));
      }
      &:hover {
        outline: 0;
        box-shadow: 0 0 var(--offset) rgba(0, 0, 0, 0.35);
      }
    }
  }
}
</style>
