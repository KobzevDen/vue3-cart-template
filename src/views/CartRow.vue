<template>
    <tr>
      <td>{{ props.item.id }}</td>
      <td>{{ catalogItem.title }}</td>
      <td>{{ catalogItem.price }}</td>
      <td>
        <input type="number" v-model="count" @blur="setCount"/>
      </td>
      <td>{{ sum }}</td>
      <td>
        <button class="btn btn-danger" @click="storeSetCount(props.item.id,0)">
          Удалить
        </button>
      </td>
    </tr>
  </template>
  
  <script setup>
    import {computed,ref} from "vue";
    import {findById} from "../comp-store/catalog";
    import {setCount as storeSetCount} from "../comp-store/cart";

    const props = defineProps(['item'])
    const count = ref(props.item.count)
    const catalogItem = findById (props.item.id)
    const sum = computed(() => props.item.count * catalogItem.price)

    function setCount () {
      storeSetCount(props.item.id,count.value)
    }

  </script>