<template>
  <section
    class="absolute bg-blue/50 backdrop-blur-sm w-full h-full z-10 left-0 top-0 flex items-center justify-center"
  >
    <div class="container flex flex-col gap-3">
      <textarea
        class="border border-stone-500 rounded-2xl p-3 w-full outline-none"
        rows="5"
        placeholder="Измененный пост..."
        v-model="newPost"
      ></textarea>
      <div class="flex flex-row justify-end gap-3">
        <button
          class="bg-blue w-fit hover:bg-blue/85"
          @click="
            newPost &&
              (postsStore.changePost(modalStore.isModal, newPost),
              modalStore.changeModal(null))
          "
        >
          Подтвердить
        </button>
        <button
          class="bg-pink w-fit hover:bg-pink/85"
          @click="modalStore.changeModal(null)"
        >
          Закрыть
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { usePostsStore } from "@/stores/posts.js";
const postsStore = usePostsStore();
import { useModalStore } from "@/stores/modal.js";
const modalStore = useModalStore();
import { ref } from "vue";
const newPost = ref("");
</script>
