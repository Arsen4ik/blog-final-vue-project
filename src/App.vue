<template>
  <main>
    <modal-component v-if="modalStore.isModal" />
    <new-post-form />
    <post-list />
  </main>
</template>
<script setup>
import ModalComponent from "./components/ModalComponent.vue";
import NewPostForm from "./components/NewPostForm.vue";
import PostList from "./components/PostList.vue";
import { useModalStore } from "@/stores/modal.js";
const modalStore = useModalStore();
</script>
