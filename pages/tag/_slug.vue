<template>
  <div>
    <h1>{{ slug }}</h1>
    <nuxt-link
      v-for="article in articles"
      :key="article.slug"
      :to="`${article.path}`"
    >
      <h3>{{ article.title }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug;
    const articles = await $content("/", { deep: true })
      .where({ tags: { $contains: slug } })
      .only(["title", "slug"])
      .fetch();
    return { articles, slug };
  },
};
</script>

<style lang="scss" scoped>
</style>
