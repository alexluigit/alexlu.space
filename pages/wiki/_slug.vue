<template>
  <article>
    <ArticleInfo
      :title="article.title"
      :createdAt="article.createdAt"
      :tags="article.tags"
    />
    <Toc :toc="article.toc" />
    <nuxt-content :document="article" />
    <PrevNext :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("wiki", params.slug).fetch();
    const [prev, next] = await $content("wiki")
      .only(["title", "slug"])
      .sortBy("date")
      .surround(params.slug)
      .fetch();
    return { article, prev, next };
  },
};
</script>

<style lang="scss">
</style>
