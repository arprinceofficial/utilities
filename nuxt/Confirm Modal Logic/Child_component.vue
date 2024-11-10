<template>
  <div class="fa fa-trash-alt cursor-pointer text-red-700" @click="open_confirm_modal(item.id, file_index)"></div>
  <p class="pb-1">Accepted file formats <em>(pdf, .jpg, .png)</em> <sup>*</sup></p>
  <p>Upload maximum file size <em>{{ max_file_size }} MB</em> <sup>*</sup></p>
</template>

<script setup>
const remove_req_id = ref('')
    const is_loading = ref(false)
    const remove_file = async (id, index) => {
        remove_req_id.value = id
        is_loading.value = true
        const getData = await useNuxtApp().$apiFetch(`/api/remove`,{
            method: 'POST',
            body: {
                id: id
            },
            headers: {
                'Authorization': 'Bearer ' + props.data.token,
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': props.data.token
            }                
        })

        if(getData.status) {
            files.value.splice(index, 1)
            useNuxtApp().$toast.success('File has been removed successfully', {
                hideProgressBar: true,
                position: useNuxtApp().$toast.POSITION.TOP_RIGHT
            });
        }

        remove_req_id.value = ''
        is_loading.value = false
        close_modal()
        store_id.value = ''
        store_index.value = ''
    }
    
    const open = ref(false)
    const store_id = ref('')
    const store_index = ref('')
    const open_confirm_modal = (id, index) => {
        open.value = true;
        console.log('Remove File', id, index);
        store_id.value = id
        store_index.value = index
    }
    const close_modal = () => {
        open.value = false
    }
    const confirm_delete = () => {
        remove_file(store_id.value, store_index.value)
    }
</script>
