<template>
  <div>
    <el-button
      type="primary"
      plain
      icon="Edit"
      @click="addMenuClick"
      style="margin: 20px 0"
      >新增权限</el-button
    >
    <my-table :propList="propList" :tableData="roleList">
      <template #handler="scoped">
        <div class="btns">
          <el-button
            type="primary"
            plain
            icon="Edit"
            @click="editBtnClick(scoped.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            plain
            icon="Delete"
            @click="handleDeleteClick(scoped.row)"
            >删除</el-button
          >
        </div>
      </template>
    </my-table>
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="500">
      <my-form
        :formItems="formItems1"
        v-model="formData"
        :colLayout="{ span: 24 }"
        :labelWidth="'140px'"
      ></my-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submit"> 保存 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyTable from '@/components/table/index.vue'
import { formItems, propList } from './config'
import MyForm from '@/components/form/index.vue'
import {
  getMenu,
  getMenuList,
  deleteMenu,
  updateMenu,
  addMenu,
} from '@/api/menu'
const formItems1 = ref([...formItems])

const dialogTitle = ref('修改角色')
const roleList = ref([])
const getList = async () => {
  const res = await getMenuList({})
  roleList.value = res.data.list
}
getList()

const formData = ref({})
formItems.forEach((item) => {
  const obj = formData.value
  obj[item.field] = ''
})
const editBtnClick = (row) => {
  formData.value = { ...row }
  dialogVisible.value = true
}
const dialogType = ref('add')
const submit = async () => {
  if (dialogType.value === 'edit') {
    const res = await updateMenu(formData.value.id, {
      ...formData.value,
    })
    if (res.code === 1) {
      dialogVisible.value = false
      getList()
    }
  } else {
    const res = await addMenu({
      ...formData.value,
    })
    if (res.code === 1) {
      dialogVisible.value = false
      getList()
    }
  }
}

const dialogVisible = ref(false)

const handleDeleteClick = async (row) => {
  await deleteMenu(row.id)
  getList()
}

const addMenuClick = () => {
  dialogTitle.value = '新增权限'
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped></style>
