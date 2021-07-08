<template>
  <div class="w-full">
    <div
      class="group w-10 md:w-full max-w-xs flex relative ml-auto focus-within:w-full transition-all duration-200 ease-in-out"
    >
      <input
        v-model="searchQuery"
        aria-label="Open search"
        placeholder="Search Articles"
        class="leading-10 w-full h-10 mx-0 pl-10 bg-gray-200 dark:bg-dark-bg text-red-400 outline-none cursor-pointer hover:shadow-main focus:ring-1 ring-primary-base rounded-full transition-all duration-200 ease-in-out"
        title="Open search"
        type="search"
      />
      <div
        class="absolute top-0 left-3.5 flex-shrink-0 text-light-fg dark:text-dark-fg pointer-events-none"
      >
        <icon-collection
          name="search"
          class="h-3 mt-3.5 xl:h-4 xl:mt-3 group-hover:animate-wiggle"
        />
      </div>
      <div
        class="absolute right-1 hidden h-full lg:flex flex-grow-0 items-center mr-2"
      >
        <div class="mr-2">
          <kbd
            class="block rounded w-8 h-8 bg-light-bg dark:bg-gray-500 border-gray-300 border-b-2"
            ><span
              class="flex items-center justify-center w-full h-full rounded border-t border-l border-r border-white dark:border-gray-500 leading-none"
              ><span class="block mt-1"
                ><span
                  class="text-xs text-gray-600 dark:text-gray-100 tracking-tighter"
                  >Ctrl</span
                ></span
              ></span
            ></kbd
          >
        </div>
        <kbd
          class="block rounded w-8 h-8 bg-light-bg dark:bg-gray-500 border-gray-300 border-b-2"
          ><span
            class="flex items-center justify-center w-full h-full rounded border-t border-l border-r border-white dark:border-gray-500 leading-none"
            ><span class="block mt-1"
              ><span
                class="text-xs text-gray-600 dark:text-gray-100 tracking-tighter"
                >K</span
              ></span
            ></span
          ></kbd
        >
      </div>
    </div>
    <ul
      class="absolute z-20 right-0 border border-gray-300 top-20 lg:top-24 w-full"
      v-if="articles.length"
    >
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link class="block" :to="`${article.path}`">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("/", { deep: true })
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
};
</script>
