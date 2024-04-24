<script setup lang="ts">
import { ref } from "vue";
import FullLayout from "@/layouts/full/FullLayout.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";

defineOptions({
    layout: FullLayout,
});

const page = ref({ title: "Welcome Page" });

const breadcrumbs = ref([
    {
        title: page.value.title,
        disabled: true,
    },
]);
</script>

<template>
    <div>
        <div class="" style="background-color: red; color: red; height: 50px">
            .
        </div>
        <div class="d-flex flex-wrap mt-1">
            <div class="card rounded d-flex">
                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px"
                    alt=""
                />
                <div class="card-body pl-3 pb-3">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th
                                    scope="row"
                                    class="d-flex justify-content-start"
                                >
                                    Id
                                </th>
                                <td>:</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    class="d-flex justify-content-start"
                                >
                                    Location
                                </th>
                                <td>:</td>
                                <td>Lt. 12</td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    class="d-flex justify-content-start"
                                >
                                    Status
                                </th>
                                <td>:</td>
                                <td>Full</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
