<template>
  <div class="my-table">
    <div class="header">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="headerHandler">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="false"
        type="index"
        label="index"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          v-bind="propItem"
          align="center"
          :label="propItem.label"
          show-overflow-tooltip
        >
          <template #default="scoped">
            <slot :name="propItem.slotName" :row="scoped.row">
              {{ scoped.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  tableData: {
    type: Array,
    default: () => {},
  },
  propList: {
    type: Array,
    default: () => [],
  },
  showIndexColumn: {
    type: Boolean,
    default: false,
  },
  showSelectColumn: {
    type: Boolean,
    default: false,
  },
  childrenProps: {
    type: Object,
    default: () => {},
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['selection-change'])

const handleSelectionChange = (value: any) => {
  emit('selection-change', value)
}
</script>

<style scoped lang="scss">
.my-table {
  background-color: #fff !important;
  padding: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .headerHandler {
      padding: 10px;
    }
  }

  .footer {
    padding-top: 10px;
    display: flex;
    justify-content: right;
  }
}
</style>
