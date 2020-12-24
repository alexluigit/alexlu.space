<template>
  <nav class="w-48 sticky top-24">
    <ul class="overflow-hidden" id="toc">
      <li v-for="link of toc" :key="link.id" class="whitespace-nowrap">
        <NuxtLink
          class="toc-link"
          :class="{ 'ml-4': link.depth === 3 }"
          :to="`#${link.id}`"
          >{{ link.text }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollHighlight(entries, observer) {
      entries.forEach((entry) => {
        const path = window.location.pathname;
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          document
            .querySelector(`.toc-link[href="${path}#${id}"]`)
            .parentElement.classList.add("active");
        } else {
          document
            .querySelector(`.toc-link[href="${path}#${id}"]`)
            .parentElement.classList.remove("active");
        }
      });
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.scrollHighlight);
    document.querySelectorAll("h1[id], h2[id], h3[id]").forEach((heading) => {
      this.observer.observe(heading);
    });
  },
  props: {
    toc: { type: Array },
  },
};
</script>

<style lang="scss" scoped>
/* .toc-container { */
/*   border: 2px solid yellow; */
/*   width: 14em; */
/*   margin-right: 2em; */
/*   display: inline-flex; */
/*   z-index: 1; */
/*   position: sticky; */
/*   top: 0; */
/*   ul { */
/*     overflow: hidden; */
/*     li { */
/*       .toc-link { */
/*         white-space: nowrap; */
/*       } */
/*       .lv3 { */
/*         margin-left: 1em; */
/*       } */
/*     } */
/*     li.active > a { */
/*       color: #333; */
/*       font-weight: 600; */
/*     } */
/*   } */
/* } */

/* @media only screen and (max-width: 1000px) { */
/* .toc-container { */
/*   display: none; */
/* } */
/* } */
</style>
