<template>
  <div class="my-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              class="form-item"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeHolder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOption"
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeHolder"
                  style="width: 100%"
                  v-bind="item.otherOption"
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option v-for="option in item.options" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOption"
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Object,
    default: () => {}
  },
  labelWidth: {
    type: String,
    default: () => '80px'
  },
  formItems: {
    type: Array,
    default: () => []
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // ≥1920px
      lg: 8, // ≥1200px
      md: 12, // ≥992px
      sm: 24, // ≥768px
      xs: 24 // <768px
    })
  }
})
const emit = defineEmits(['update:modelValue'])

const handleValueChange = (val, field) => {
  emit('update:modelValue', { ...props.modelValue, [field]: val })
}
</script>

<style scoped lang="scss">
.my-form {
}
</style>
