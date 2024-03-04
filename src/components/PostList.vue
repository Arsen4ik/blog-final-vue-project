<template>
  <div class="mt-12 flex flex-col gap-8" v-if="postsStore.posts.length">
    <!-- <pre>{{ postsStore.posts }}</pre> -->
    <post-item v-for="post in postsStore.posts" :key="post.id" :post="post" />
  </div>
  <p v-else class="py-24 text-4xl text-center text-slate-300">
    Посты отсутствуют...
  </p>
</template>
<script setup>
import { usePostsStore } from "@/stores/posts.js";
const postsStore = usePostsStore();
import PostItem from "./PostItem.vue";
</script>
, usePostsStore
