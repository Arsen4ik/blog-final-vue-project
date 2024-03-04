<template>
  <div class="container flex flex-col gap-3 shadow-md">
    <p
      class="pb-5 text-2xl border-b border-b-stone-500 bg-white truncate text-wrap"
    >
      {{ post.title }}
    </p>
    <div
      :class="`flex justify-between gap-3 ${
        areCommentsShown ? 'flex-col-reverse' : 'flex-row'
      }`"
    >
      <button
        @click="areCommentsShown = !areCommentsShown"
        :class="`bg-blue w-fit hover:bg-blue/85 ${
          areCommentsShown ? (post.comments.length ? 'mt-4' : 'mt-1') : ''
        }`"
      >
        {{ areCommentsShown ? "Спрятать" : "Комментарии" }}
      </button>

      <div class="flex flex-col gap-3" v-if="areCommentsShown">
        <div
          :class="`flex flex-row gap-3 ${
            post.comments.length ? 'mb-4' : 'mb-1'
          }`"
        >
          <input
            class="border border-stone-500 rounded-2xl p-2 w-full outline-none text-xl"
            type="text"
            placeholder="Новый пост..."
            v-model="newComment"
          />
          <button
            class="bg-blue hover:bg-blue/85"
            @click="
              newComment &&
                (postsStore.addComment(post.id, newComment), (newComment = ''))
            "
          >
            Добавить
          </button>
        </div>
        <div
          v-for="comment in post.comments"
          :key="comment.id"
          class="flex flex-row gap-3"
        >
          <p
            class="bg-stone-100 rounded-2xl p-2 w-full outline-none text-xl shadow-inner"
          >
            {{ comment.text }}
          </p>
          <button
            @click="postsStore.removeComment(post.id, comment.id)"
            class="bg-pink hover:bg-pink/85"
          >
            Удалить
          </button>
        </div>
        <p
          v-if="!post.comments.length"
          class="py-2 text-xl text-center text-slate-300"
        >
          Комментарии отсутствуют...
        </p>
      </div>

      <p class="w-full flex my-auto" v-if="!areCommentsShown">
        Колличество комментарий - {{ post.comments.length }}
      </p>
      <button
        @click="modalStore.changeModal(post.id)"
        class="bg-blue hover:bg-blue/85"
        v-if="!areCommentsShown"
      >
        Изменить
      </button>
      <button
        @click="postsStore.removePost(post.id)"
        class="bg-pink hover:bg-pink/85"
        v-if="!areCommentsShown"
      >
        Удалить
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useModalStore } from "@/stores/modal.js";
const modalStore = useModalStore();
import { usePostsStore } from "@/stores/posts.js";
const postsStore = usePostsStore();
const { post } = defineProps({
  post: Object,
});
const areCommentsShown = ref(false);
const newComment = ref("");
</script>
import { comment } from "postcss";
