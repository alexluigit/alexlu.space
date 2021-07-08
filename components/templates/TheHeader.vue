<template>
  <header
    class="sticky inset-0 z-30 h-16 lg:h-24 bg-light-bgAlt dark:bg-dark-bgAlt transition-colors duration-300 ease-linear"
    :class="{ shadow: !onTop, 'shadow-reverse': onTop }"
  >
    <div
      class="container relative flex items-center space-x-4 h-full px-4 mx-auto lg:py-6"
    >
      <!-- Logo -->
      <NuxtLink
        class="group z-10 flex items-center mr-auto space-x-2 text-primary-gray h-7 lg:h-10"
        to="/"
      >
        <icon-collection name="logo"
             class="transform group-hover:fill-primary-lightgreen h-8 lg:h-10 fill-current text-light-fg dark:text-dark-fg transition duration-300 ease-linear"
             :class="{ 'transform rotate-90': !onTop }"
        />
        <h1
          class="text-2xl text-primary-gray tracking-wide font-bold lg:text-3xl dark:text-dark-fg"
        >
          Alex<span class="text-primary-base">@</span>Dev
        </h1>
      </NuxtLink>
      <!-- Center Navigation -->
      <nav class="hidden mx-auto lg:flex">
        <ul class="flex text-center">
          <li
            v-for="link in $t('header.links')"
            :key="link.slug"
            class="py-2 xl:px-6 lg:py-0 lg:px-4"
          >
            <NuxtLink
              class="block font-medium uppercase hover:no-underline light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-fg dark:text-dark-fg transition-colors duration-300 ease-linear"
              :to="
                localePath({
                  name: link.slug,
                  params: { topic: 'welcome', slug: 'welcome' },
                })
              "
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Search -->
      <SearchInput />
      <DarkModeToggle />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { onTop: true };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.onTop = window.pageYOffset < 60;
    },
  },
};
</script>

<style lang="scss" scoped>
a.nuxt-link-exact-active,
a.nuxt-link-active {
  @apply text-primary-lightgreen;
}
</style>
