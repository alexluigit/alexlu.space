<template>
  <button
    class="focus:outline-none relative group overflow-hidden px-4 flex items-center bg-gray-200 dark:bg-dark-bg text-light-fg dark:text-dark-fg rounded-full h-10 min-w-min outline-none text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
    @click="setCurrentTheme"
  >
    <span
      class="relative overflow-hidden h-5 w-5 flex items-center justify-center"
    >
      <icon-collection
        name="moon"
        class="w-4 h-4 absolute"
        :class="currentTheme === 'dark' ? 'show group-hover:animate-bounce' : 'hide'"
        />
      <icon-collection
        name="sun"
        class="w-4 h-4 absolute"
        :class="currentTheme === 'light' ? 'show group-hover:animate-spin-slow' : 'hide'"
        />
    </span>
  </button>
</template>

<script>
export default {
  mounted() {
    this.getCurrentTheme();
  },
  props: [],
  data() {
    return {
      currentTheme: "light",
    };
  },
  methods: {
    getCurrentTheme() {
      const systemPreferDark =
        !("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (localStorage.theme === "dark" || systemPreferDark) {
        document.querySelector("html").classList.add("dark");
        this.currentTheme = "dark";
      } else {
        document.querySelector("html").classList.remove("dark");
        this.currentTheme = "light";
      }
    },
    setCurrentTheme() {
      this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", this.currentTheme);
      document.querySelector("html").classList.toggle("dark");
    },
  },
};
</script>

<style lang="scss" scoped>
.show {
  animation: show-icon 300ms forwards;
}

.hide {
  animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleY(1);
  }
  to {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
