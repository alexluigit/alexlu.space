<template>
  <div>
    <nuxt-link
      v-for="wiki in wikis"
      :key="wiki.slug"
      :to="`/wiki/${wiki.slug}`"
    >
      <h3>{{ wiki.title }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const wikis = await $content("wiki").only(["title", "slug"]).fetch();
    console.log(wikis);
    return { wikis };
  },
};
</script>

<style lang="scss" scoped>
</style>
