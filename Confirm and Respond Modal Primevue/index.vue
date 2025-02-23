<script setup>
  // Delete
	const isOpenConModal = ref(false);
	const response_modal = ref({});
	const deleteId = ref(null);
	const deleteStatus = ref(null);

	const openDeleteModal = (id, status) => {
		deleteId.value = id;
		deleteStatus.value = status;
		isOpenConModal.value = true;
	};

	const del_item = async () => {
		response_modal.value = {status: null};
		try {
			const getData = await $fetchAdmin(`admin/tree-entity/delete-menu`, {
				method: 'POST',
				body: { id: deleteId.value, status: deleteStatus.value }
			});
			if (getData.status == true) {
				response_modal.value = getData;
				setTimeout(() => {
					emit('deleteMenu', deleteId.value);
				}, 2000);
			}
		} catch (e) {
			console.log('Get Message', e.message);
		} finally {
			isOpenConModal.value = false;
		}
	};
</script>

<template>
  <!-- Delete / Restore -->
  <span class="flex items-center justify-center gap-1 text-[10px] bg-white dark:bg-gray-800 dark:bg-gray-200 border dark:border-gray-300 rounded-[50%] h-[25px] w-[25px]">
    <i v-if="element.status == 1"
      class="fa fa-trash delete_btn text-red-800"
      role="button"
      @click="openDeleteModal(element.id, 0)">
    </i>
    <i v-else
      class="fa fa-undo delete_btn text-green-800"
      role="button"
      @click="openDeleteModal(element.id, 1)">
    </i>
  </span>

  <!-- Load Modal -->
  <ConfirmModal :isOpenConModal="isOpenConModal" @confirm="del_item" @update:isOpenConModal="isOpenConModal = $event" />
	<ResponseModal :response_modal="response_modal" />
</template>
