<template>
  <div>
    <nuxt-link v-if="prev" :to="toLink(prev.slug)"
      >prev: {{ prev.title }}</nuxt-link
    >
    <nuxt-link v-if="next" :to="toLink(next.slug)"
      >next: {{ next.title }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    prev: { type: Object },
    next: { type: Object },
  },

  methods: {
    toLink(slug) {
      return { params: { slug } };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
