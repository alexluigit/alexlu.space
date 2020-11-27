<template>
  <div>
    <nuxt-link
      v-for="blog in blogs"
      :key="blog.slug"
      :to="`/blog/${blog.slug}`"
    >
      <h3>{{ blog.title }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content("blog").only(["title", "slug"]).fetch();
    return { blogs };
  },
};
</script>

<style lang="scss" scoped>
</style>
