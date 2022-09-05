<script setup lang="ts">
import { ref, computed } from "vue";

const emit = defineEmits(["onChangeMode"]);
const darkMode = ref<boolean>(false);
const changeMode = () => {
  darkMode.value = !darkMode.value;
  emit("onChangeMode", darkMode.value);
};
const darkThemeButtonText = computed<string>(() =>
  darkMode.value ? "Disable dark mode" : "Enable dark mode"
);
</script>

<template>
  <header>
    <h1>
      <img src="@/assets/logo.png" alt="Alura Tracker" />
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="changeMode">
        {{ darkThemeButtonText }}
      </button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <RouterLink class="link" to="/">
            <i class="fas fa-tasks"></i>
            Tasks
          </RouterLink>
        </li>
        <li>
          <RouterLink class="link" to="/projects">
            <i class="fas fa-project-diagram"></i>
            Projects
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  padding: 2rem;
}

h1 {
  text-align: center;
}

strong {
  color: #f95738;
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
