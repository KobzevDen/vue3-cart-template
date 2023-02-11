<template>
    <div class="catalog">
      <h1>Корзина</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Артикул</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          <Cart-row v-for="item in cart" :key="item.id" :item="item"></Cart-row>
        </tbody>
      </table>
  
      <h1 class="text-right">Сумма {{ totalSum }}</h1>
    </div>
  </template>
  
  <script setup>
    import { cart,totalSum } from "../comp-store/cart";
    import CartRow from "./CartRow.vue"
  
  </script>