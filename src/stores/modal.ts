import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    const activeModal = ref("")

    function openMoal(modalName:string){
        activeModal.value = modalName
    }

    function closeModal(){
        activeModal.value = ""
    }
    return {
        activeModal,
        openMoal,
        closeModal
    }
})