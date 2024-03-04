<template>
  <div class="container flex flex-row gap-5 shadow-md">
    <input
      class="border border-stone-500 rounded-2xl p-3 w-full outline-none text-2xl"
      type="text"
      placeholder="Новый пост..."
      v-model="newPost"
    />
    <button
      class="bg-blue text-2xl px-8 py-3 hover:bg-blue/85"
      @click="newPost && (postsStore.addPost(newPost), (newPost = ''))"
    >
      Добавить
    </button>
  </div>
</template>
<script setup>
import { usePostsStore } from "@/stores/posts.js";
const postsStore = usePostsStore();

import { ref } from "vue";
const newPost = ref("");
</script>
