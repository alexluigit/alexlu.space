<template>
  <nav
    class="fixed bg-light-bgAlt dark:bg-dark-bgAlt border-t inset-x-0 bottom-0 z-30 border-light-border dark:border-dark-border block lg:hidden transition-colors duration-300 ease-linear"
  >
    <div class="flex justify-between items-center h-16">
      <template v-for="link in $t('header.links')">
        <nuxt-link
          :key="link.slug"
          class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-fg dark:text-dark-fg hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-primary-gray transition-colors duration-300 ease-linear"
          :to="localePath({ name: link.slug })"
        >
          <component
            :is="link.icon + '-icon'"
            class="inline-block h-5 fill-current dark:fill-primary-lightgreen mb-1"
          />
          <span
            class="block text-xs md:text-base md:pl-3 font-medium text-light-fg dark:text-dark-fg transition-colors duration-300 ease-linear"
          >
            {{ link.name }}
          </span>
        </nuxt-link>
      </template>
    </div>
  </nav>
</template>

<script>
import BlogIcon from "~/assets/icons/blog.svg?inline";
import WikiIcon from "~/assets/icons/books.svg?inline";
import TopicsIcon from "~/assets/icons/resources.svg?inline";
import ContactIcon from "~/assets/icons/envelope-open-text.svg?inline";

export default {
  components: {
    BlogIcon,
    WikiIcon,
    TopicsIcon,
    ContactIcon,
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding-bottom: env(safe-area-inset-bottom);
}

a.nuxt-link-exact-active,
a.nuxt-link-active {
  @apply text-primary-lightgreen;
}
</style>
