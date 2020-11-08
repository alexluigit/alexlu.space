<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/wiki">Wiki</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
    <SearchInput />
  </div>
</template>

<script>
export default {
  props: {
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
