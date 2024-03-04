/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    const isModal = ref(null)

    const changeModal = (id) => isModal.value = id

    return {
        isModal,
        changeModal
    }
})
