<template>
  <article>
    <ArticleInfo :title="article.title" :createdAt="article.createdAt" :tags="article.tags" />
    <nuxt-content :document="article" />
    <PrevNext :prev="prev" :next="next" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('wiki', params.slug).fetch()
      const [prev, next] = await $content('wiki')
        .only(['title', 'slug'])
        .sortBy('date')
        .surround(params.slug)
        .fetch()
      return { article, prev, next }
    },
  }
</script>

<style lang="scss">
  .nuxt-content {
    h2 {
      font-weight: bold;
      font-size: 1.5em;
    }
    h3 {
      font-weight: bold;
      font-size: 1.2em;
    }
    p {
      margin-bottom: 0.8em;
    }

    .icon.icon-link {
      background-image: url('../../assets/svg/icon-heading-link.svg');
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      background-size: 0.8em 0.8em;
    }

    .nuxt-content-highlight {
      .filename {
        position: absolute;
        z-index: 1;
        right: 0.5em;
        color: darkgray;
      }
    }
  }
</style>
