<template>
    <div class="catalog">
      <h1>Каталог</h1>
      <table class="table" v-if="!isLoading">
        <thead>
          <tr>
            <th>Артикул</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>В корзину</th>
          </tr>
        </thead>
        <tbody>
          <Catalog-row v-for="item in catalog" :key="item.id" :item="item"></Catalog-row>
        </tbody>
      </table>
      <h1 v-else>
        Loading...
      </h1>
    </div>
  </template>
  
  <script setup>
    import CatalogRow from "./CatalogRow.vue";
    import {catalog,getData} from "../comp-store/catalog";
    import { onMounted, ref} from "vue";


    const isLoading = ref(true)
    onMounted(() => {
      isLoading.value = true;
      getData().then((data) => {
        catalog.length = 0
        isLoading.value = false;
        catalog.push(...data)
      })
    })
  </script>