<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ formatDate(createdAt) }}</p>
    <div class="test" v-for="tag in tags" :key="tag">
      <a href="/tags">{{ tag }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {},

  props: {
    title: { type: String },
    createdAt: { type: String },
    tags: { type: Array },
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss">
h1 {
  font-weight: bold;
  font-size: 2em;
}

.taglist {
  display: inline-block;
  text-decoration: none;
  padding: 0.6em;
}
</style>
