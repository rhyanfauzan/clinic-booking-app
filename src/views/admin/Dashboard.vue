<template>
    <div class="container md:min-h-[50vh] lg:min-h-[55vh] mx-auto px-5 md:px-10">
        <div class="my-5">
            <Breadcrum :nameRoute="nameRoute" />
        </div>
        <!-- <div class="col text-center">
        <fwb-pagination v-model="currentPage" :total-pages="10" show-icons></fwb-pagination>
      </div> -->
        <!-- else  -->

        <div v-if="showLogin" class="card flex flex-wrap justify-center mx-auto my-5">
            <div>
                <img src="../../assets/images/login.png" alt="" style="width: 300px; object-fit: cover" />
            </div>
            <div class="p-5 w-full text-center">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    You not have access for history
                </h5>
                <p class="font-normal mb-5 text-gray-700 dark:text-gray-400">
                    Please login first
                </p>

                <fwb-button class="px-10" href="/login" color="light" size="md" pill>Login</fwb-button>
            </div>
        </div>

        <div v-else>
            <div class="flex justify-between mb-3">
                <h5 class="font-medium text-lg my-3">Content Management</h5>
                <div>
                    <fwb-button @click="showModalCreateContent" color="dark" size="sm" class="py-2 px-4">
                        Create Content
                    </fwb-button>
                </div>
            </div>
            <fwb-table>
                <fwb-table-head class="text-center">
                    <fwb-table-head-cell>ID</fwb-table-head-cell>
                    <fwb-table-head-cell>Title</fwb-table-head-cell>
                    <fwb-table-head-cell>Image</fwb-table-head-cell>
                    <fwb-table-head-cell>Description</fwb-table-head-cell>
                    <fwb-table-head-cell>Action</fwb-table-head-cell>
                </fwb-table-head>
                <fwb-table-body>
                    <fwb-table-row v-for="content in contents" :key="content.id">
                        <fwb-table-cell class="text-center">{{ content.id }}</fwb-table-cell>
                        <fwb-table-cell>
                            <h5 class="font-medium">{{ content.title }}</h5>
                        </fwb-table-cell>
                        <fwb-table-cell>
                            <img :src='content.image' alt="" srcset="">
                        </fwb-table-cell>
                        <fwb-table-cell>{{ content.description }}</fwb-table-cell>
                        <fwb-table-cell>
                            <fwb-table-row>
                                <fwb-table-cell>
                                    <fwb-button color="yellow" @click="showModalUpdateContent(content.id)"> Edit
                                    </fwb-button>
                                </fwb-table-cell>
                                <fwb-table-cell>
                                    <fwb-button color="red" @click="showModalDeleteContent(content.id)"> Delete
                                    </fwb-button>
                                </fwb-table-cell>
                            </fwb-table-row>
                        </fwb-table-cell>
                    </fwb-table-row>
                </fwb-table-body>
            </fwb-table>
            <!-- modal create content  -->
            <fwb-modal v-if="isShowModalContentCreate" @close="closeModalContentCreate">
                <template #header>
                    <div class="flex items-center text-lg">
                        Create Content
                    </div>
                </template>
                <template #body>
                    <fwb-input v-model="title" class="mb-2" placeholder="Enter title here.." label="Title" />
                    <fwb-input v-model="description" class="mb-2" placeholder="Enter description here.."
                        label="Description" />
                    <fwb-file-input v-model="file" class="mb-2" label="Image">
                        <p class="!mt-1 text-sm text-gray-500 dark:text-gray-300">
                            SVG, PNG, JPG or GIF (Square. 800x800px).
                        </p>
                    </fwb-file-input>
                </template>
                <template #footer>
                    <div class="flex justify-end">
                        <FwbToast v-if="showWarning" type="warning" class="mx-0 px-0 py-0 my-0">
                            Semua data harus diisi.
                        </FwbToast>
                        <!-- Show Success  -->
                        <FwbToast v-if="showSuccess" type="success" class="mx-0 px-0 py-0 my-0">
                            Berhasil Membuat Kontent Card!
                        </FwbToast>
                        <fwb-button @click="closeModalContentCreate" color="light" class="px-10 me-5">
                            Cancel
                        </fwb-button>
                        <fwb-button @click="createContent" color="green" class="px-10">
                            Create
                        </fwb-button>
                    </div>
                </template>
            </fwb-modal>
            <!-- modal update content  -->
            <fwb-modal v-if="isShowModalContentUpdate" @close="closeModalContentUpdate">
                <template #header>
                    <div class="flex items-center text-lg">
                        Update Content
                    </div>
                </template>
                <template #body>
                    <fwb-input v-model="title" class="mb-2" placeholder="Enter title here.." label="Title" />
                    <fwb-input v-model="description" class="mb-2" placeholder="Enter description here.."
                        label="Description" />
                </template>
                <template #footer>
                    <div class="flex justify-end">
                        <FwbToast v-if="showWarning" type="warning" class="mx-0 px-0 py-0 my-0">
                            Semua data harus diisi.
                        </FwbToast>
                        <!-- Show Success  -->
                        <FwbToast v-if="showSuccess" type="success" class="mx-0 px-0 py-0 my-0">
                            Berhasil Mengubah Kontent Card!
                        </FwbToast>
                        <fwb-button @click="closeModalContentUpdate" color="light" class="px-10 me-5">
                            Cancel
                        </fwb-button>
                        <fwb-button @click="updateContent" color="green" class="px-10">
                            Update
                        </fwb-button>
                    </div>
                </template>
            </fwb-modal>
            <!-- modal delete content  -->
            <fwb-modal v-if="isShowModalContentDelete" @close="closeModalContentDelete">
                <template #header>
                    <div class="flex items-center text-lg">
                        Delete Content
                    </div>
                </template>
                <template #body>
                    <div class="flex flex-col items-start">
                        <h5 class="font-regular text-md ">Apakah kamu yakin untuk menghapus ini?</h5>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end">
                        <fwb-button @click="closeModalContentDelete" color="light" class="px-10 me-5">
                            Cancel
                        </fwb-button>
                        <fwb-button @click="deleteContent" color="red" class="px-10">
                            Delete
                        </fwb-button>
                    </div>
                </template>
            </fwb-modal>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import {
    FwbTable,
    FwbTableBody,
    FwbTableCell,
    FwbTableHead,
    FwbTableHeadCell,
    FwbTableRow,
    FwbButton, FwbModal,
    FwbInput,
    FwbFileInput,
    FwbToast
} from 'flowbite-vue';
import { ref, onMounted, computed } from 'vue';
import Breadcrum from '../../components/layouts/Breadcrum.vue';
import { useVariableStore } from '../../store/index';
import { useRouter } from 'vue-router';

const store = useVariableStore();
const BASE_URL = computed(() => store.BASEURL);
const token = ref('');
const router = useRouter();
const nameRoute = "Admin | Dashboard";
const showLogin = ref(false);
const contents = ref([]);
const isShowModalContentCreate = ref(false);
const isShowModalContentUpdate = ref(false);
const isShowModalContentDelete = ref(false);
const tempID = ref('');
const title = ref('');
const description = ref('');
const file = ref(null);
const showWarning = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

const showModalDeleteContent = (idContent) => {
    isShowModalContentDelete.value = true;
    console.log(idContent)
    tempID.value = idContent;
}

const closeModalContentDelete = () => {
    isShowModalContentDelete.value = false;
}

const showModalCreateContent = () => {
    isShowModalContentCreate.value = true;
}

const closeModalContentCreate = () => {
    isShowModalContentCreate.value = false;
}

const showModalUpdateContent = (idContent) => {
    isShowModalContentUpdate.value = true;
    console.log(idContent)
    tempID.value = idContent;
}

const closeModalContentUpdate = () => {
    isShowModalContentUpdate.value = false;
}

const createContent = async () => {
    console.log("title: ", title.value);
    console.log("description: ", description.value);
    console.log("file: ", file.value);

    if (
        title.value != "" &&
        description.value != "" &&
        file.value != null
    ) {
        showWarning.value = false;
        const fileBlob = new Blob([file.value], { type: file.value.type });

        const formData = new FormData();
        formData.append("title", title.value);
        formData.append("description", description.value);
        formData.append("image", fileBlob, file.value.name); // Append the file directly

        axios.post(`${BASE_URL.value}/content`, formData, {
            headers: {
                'Authorization': token.value,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log(response.data)
                if (response.data.status == true) {
                    showError.value = false;
                    showSuccess.value = true;
                    setTimeout(() => {
                        closeModalContentCreate();
                        location.reload()
                    }, 500);
                }
            })
            .catch(error => {
                console.error(error)
                showSuccess.value = false;
                showError.value = true;
            });
        console.log(formData.values);
    } else {
        showWarning.value = true;
    }
};

const updateContent = async () => {
    console.log("title: ", title.value);
    console.log("description: ", description.value);

    if (
        title.value != "" &&
        description.value != ""
    ) {
        showWarning.value = false;

        const formData = new FormData();
        formData.append("title", title.value);
        formData.append("description", description.value);

        axios.put(`${BASE_URL.value}/content/${tempID.value}`, formData, {
            headers: {
                'Authorization': token.value,
                'Content-Type': "application/json",
            },
        })
            .then(response => {
                console.log(tempID.value)
                console.log(response.data)
                if (response.data.status == true) {
                    showError.value = false;
                    showSuccess.value = true;
                    setTimeout(() => {
                        closeModalContentUpdate();
                        location.reload()
                    }, 500);
                }
            })
            .catch(error => {
                console.error(error)
                showSuccess.value = false;
                showError.value = true;
            });
        console.log(formData.values);
    } else {
        showWarning.value = true;
    }
};

const deleteContent = () => {
    axios.delete(`${BASE_URL.value}/content/${tempID.value}`, {
        headers: {
            Authorization: token.value
        }
    })
        .then(response => {
            const result = response.data;
            console.log(result)
            if (result.status === true) {

            } else {
            }
            location.reload();
        })
        .catch(error => {
            console.error(error)
        });
    isShowModalContentDelete.value = false;
}

const getAllContent = () => {
    axios.get(`${BASE_URL.value}/content`)
        .then(response => {
            const result = response.data;
            if (result.status === true) {
                result.result.forEach(element => {
                    contents.value.push({ "id": element.id, "title": element.title, "description": element.description, "image": `${BASE_URL.value}/uploads/${element.image}` });
                });
            } else {
            }
        })
        .catch(error => {
            console.error(error)
        });
}

onMounted(() => {
    const userid = localStorage.getItem('userid');
    token.value = localStorage.getItem('token');
    if (userid != null && userid != '') {
        showLogin.value = false;
    } else {
        showLogin.value = true;
    }

    getAllContent();

});


</script>