<template>
  <nav class="mx-auto">
    <ul class="flex">
      <li
        v-for="link in $t('footer.social.links')"
        :key="link.href"
        class="w-12"
      >
        <a
          class="my-4 flex flex-col text-primary-gray dark:text-dark-fg hover:no-underline transition-colors duration-300 ease-linear"
          :href="link.href"
        >
          <icon-collection :name="link.icon"
            class="transform hover:scale-125 h-5 lg:h-6 fill-current mb-1 transition"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>
