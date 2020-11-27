<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="filter tags"
    />
    <ul>
      <li v-for="tag of tags" :key="tag">
        <nuxtLink :to="`/tag/${tag}`">
          {{ tag }}
        </nuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const fetchTags = await $content("/", { deep: true })
      .only(["tags"])
      .fetch();
    const tags = await [...new Set(fetchTags.flatMap((v) => v.tags))].sort();
    const allTags = tags;
    return { tags, allTags };
  },

  data() {
    return {
      searchQuery: "",
    };
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.tags = this.allTags;
        return;
      }
      this.tags = await this.tags.filter((v) => v.includes(searchQuery));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
