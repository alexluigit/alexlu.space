<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
    <PrevNext :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('date')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  }
}
</script>

<style lang="scss" scoped>
</style>
