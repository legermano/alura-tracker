<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { NotificationType } from "@/interfaces/INotifications";

const store = useStore();
const notifications = computed(() => store.state.notifications);
const context = {
  [NotificationType.SUCCESS]: "is-success",
  [NotificationType.WARNING]: "is-warning",
  [NotificationType.DANGER]: "is-danger",
};
</script>

<template>
  <div class="notifications">
    <article
      class="message"
      :class="context[notification.type]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </div>
</template>

<style scoped>
.notifications {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 1;
}
</style>
