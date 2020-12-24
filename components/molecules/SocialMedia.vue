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
          :href="localePath({ name: link.href })"
        >
          <component
            :is="link.icon + '-icon'"
            class="transform hover:scale-125 h-5 lg:h-6 fill-current mb-1 transition"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import TwitterIcon from "~/assets/icons/brands/twitter-brands.svg?inline";
import YoutubeIcon from "~/assets/icons/brands/youtube-brands.svg?inline";
import GithubIcon from "~/assets/icons/brands/github-brands.svg?inline";
import WeiboIcon from "~/assets/icons/brands/weibo-brands.svg?inline";

export default {
  components: {
    TwitterIcon,
    YoutubeIcon,
    GithubIcon,
    WeiboIcon,
  },
};
</script>
