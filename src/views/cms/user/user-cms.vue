<template>
  <div>
    <my-table :propList="propList"></my-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyTable from '@/components/table/index.vue'
import { propList } from './config'
</script>

<style lang="scss" scoped></style>
