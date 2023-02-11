<template>
    <tr>
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.title }}</td>
      <td>{{ props.item.price }}</td>
      <td>
        <input type="number" v-model.number="count" />
        {{ countInCart }} в корзине
      </td>
      <td>{{sum}}</td>
      <td>
        <button class="btn btn-primary" @click="addToCart">
          В корзину
        </button>
      </td>
    </tr>
  </template>
  
  <script setup>
    import { computed, ref} from "vue";
    import {addToCart as storeAddToCart,findById} from "../comp-store/cart";

    const props = defineProps(['item'])
    const count = ref(0)
    const countInCart = computed(() => findById(props.item.id)?.count ?? 0)
    const sum = computed(() => count.value * props.item.price)

    function addToCart() {
      storeAddToCart(props.item.id,count.value)
      count.value = 0
    }
  </script>