<template>
  <nav>
    <ul>
      <li v-for="link of toc" :key="link.id">
        <NuxtLink
          class="toc-link"
          :class="{ lv2: link.depth === 2, lv3: link.depth === 3 }"
          :to="`#${link.id}`"
          >{{ link.text }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    toc: { type: Array },
  },
};
</script>

<style lang="scss" scoped>
ul {
  .toc-link {
    text-decoration: none;
  }

  .lv3 {
    margin-left: 1em;
  }
}
</style>
