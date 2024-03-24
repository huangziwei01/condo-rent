<template>
  <div class="my-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <el-row :gutter="20">
          <template v-for="(item, index) in formItems" :key="index">
            <el-col v-bind="colLayout">
              <el-form-item
                class="custom-form-item"
                :label="item.label"
                :rules="item.rules"
                :style="itemStyle"
                v-if="!item.isHidden"
              >
                <template
                  v-if="item.type === 'input' || item.type === 'password'"
                >
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
                    <el-option
                      v-for="option in item.options"
                      :key="option.value"
                      :value="option.value"
                      :label="option.label"
                    ></el-option>
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
                <template v-else-if="item.type === 'textarea'">
                  <el-input
                    style="width: 100%"
                    v-bind="item.otherOption"
                    :modelValue="modelValue[`${item.field}`]"
                    :rows="item.rows"
                    type="textarea"
                    :placeholder="item.placeHolder"
                  />
                </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
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
    default: '',
  },
  modelValue: {
    type: Object,
    default: () => {},
  },
  labelWidth: {
    type: String,
    default: () => '100px',
  },
  formItems: {
    type: Array,
    default: () => [],
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' }),
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // ≥1920px
      lg: 8, // ≥1200px
      md: 12, // ≥992px
      sm: 24, // ≥768px
      xs: 24, // <768px
    }),
  },
})
const emit = defineEmits(['update:modelValue'])

const handleValueChange = (val, field) => {
  emit('update:modelValue', { ...props.modelValue, [field]: val })
}
</script>

<style scoped lang="scss">
.custom-form-item {
  padding: 0 !important;
}

:deep(.el-form-item) {
  display: flex;
  align-items: center;
  .el-input {
    border-radius: 6px;
    background-color: #f7f9fd;

    .el-input__wrapper {
      height: 42px;
      background-color: #f7f9fd !important;
      border-color: transparent; /* 设置获得焦点时边框颜色为透明 */
      box-shadow: none; /* 去掉默认的蓝色边框 */
      .el-input__inner {
        padding: 0 10px;
        background: #f7f9fd !important;
      }
    }

    .is-focus {
      border-color: transparent; /* 设置获得焦点时边框颜色为透明 */
      box-shadow: none; /* 去掉默认的蓝色边框 */
      background-color: #f7f9fd;
    }
  }

  .el-select {
    .el-select__wrapper {
      height: 42px;
      background-color: #f7f9fd;
      border-color: transparent; /* 设置获得焦点时边框颜色为透明 */
      box-shadow: none; /* 去掉默认的蓝色边框 */
      .el-select__placeholder {
        padding: 0 10px;
      }
    }
    .el-select__selection {
      background-color: #f7f9fd;
    }
    .is-focused {
      border-color: transparent; /* 设置获得焦点时边框颜色为透明 */
      box-shadow: none; /* 去掉默认的蓝色边框 */
      background-color: #f7f9fd;
    }
  }
}

:deep(.el-row) {
  width: 100%;
}
</style>
