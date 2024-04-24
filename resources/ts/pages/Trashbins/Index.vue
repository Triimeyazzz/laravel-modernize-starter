<script setup lang="ts">
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
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
        <div class="d-flex flex-wrap">
            <div
                class="card ml-10 rounded mb-10"
                style="background-color: darkslategray"

            >
                <div
                    class="bg-red rounded-t"
                    style="background-color: red; color: red"
                >
                    .
                </div>
                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px; height: 200px"
                    alt=""
                />
                <div class="card-body text-white pl-3 pb-3">
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

                <div class="pl-3 pb-3">
                    <a href="/trashbins/trashbins1">See the detail...</a>
                </div>
            </div>

            <div
                class="card ml-10 rounded mb-10"
                style="background-color: darkslategray"
            >
                <div
                    class="bg-red rounded-t"
                    style="background-color: red; color: red"
                >
                    .
                </div>
                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px; height: 200px"
                    alt=""
                />
                <div class="card-body text-white pl-3 pb-3">
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

            <div
                class="card ml-10 rounded mb-10"
                style="background-color: darkslategray"
            >
                <div
                    class="rounded-t"
                    style="color: #ffae1f; background-color: #ffae1f"
                >
                    .
                </div>
                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px; height: 200px"
                    alt=""
                />
                <div class="card-body text-white pl-3 pb-3">
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
                                <td>Half</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                class="card ml-10 rounded mb-10"
                style="background-color: darkslategray"
            >
                <div
                    class="rounded-t"
                    style="color: #ffae1f; background-color: #ffae1f"
                >
                    .
                </div>

                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px; height: 200px"
                    alt=""
                />
                <div class="card-body text-white pl-3 pb-3">
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
                                <td>Half</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                class="card ml-10 rounded mb-10"
                style="background-color: darkslategray"
            >
                <div
                    class="rounded-t"
                    style="color: #00f11c; background-color: #00f11c"
                >
                    .
                </div>
                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px; height: 200px"
                    alt=""
                />
                <div class="card-body text-white pl-3 pb-3">
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
                                <td>Empty</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                class="card ml-10 rounded mb-10"
                style="background-color: darkslategray"
            >
                <div
                    class="rounded-t"
                    style="color: #00f11c; background-color: #00f11c"
                >
                    .
                </div>
                <img
                    src="@/assets/images/products/s3.jpg"
                    class="card-img-top"
                    style="width: 200px; height: 200px"
                    alt=""
                />
                <div class="card-body text-white pl-3 pb-3">
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
                                <td>Empty</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
