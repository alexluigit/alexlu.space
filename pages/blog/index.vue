<template>
  <div>
    <nuxt-link v-for="blog in blogs" :to="`/blog/${blog.slug}`">
      <h3>{{blog.title}}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blog').only(['title', 'slug']).fetch()
    console.log(blogs)
    return {blogs}
  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
