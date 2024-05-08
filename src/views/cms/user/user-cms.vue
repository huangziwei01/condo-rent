<template>
  <div class="container">
    <my-table :propList="propList" :tableData="tableData">
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
      <template #status="scoped">
        <el-tag type="success" v-if="+scoped.row.status === 1">启用</el-tag>
        <el-tag type="danger" v-else>禁用</el-tag>
      </template>
    </my-table>
    <el-dialog
      :close-on-click-modal="false"
      v-model="dialogVisible"
      :title="dialogTitle"
      width="600"
      center
    >
      <div>
        <my-form
          :formItems="userInfoForm"
          v-model="formData"
          :colLayout="{ span: 23 }"
        ></my-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleDialogBtnClick" primary>修改</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyTable from '@/components/table/index.vue'
import { propList } from './config'
import { getUserList, deleteUser, updateUser, addUser } from '@/api/user'
import MyForm from '@/components/form/index.vue'
import { userInfoForm } from './config'
const dialogVisible = ref(false)
const dialogTitle = ref('编辑用户')
const tableData = ref([])
const formData = ref({})
userInfoForm.forEach((item) => {
  const obj = formData.value
  obj[item.field] = ''
})
const getList = async () => {
  const res = await getUserList({})
  tableData.value = res.data.list
}
getList()
const editBtnClick = (row) => {
  formData.value = { ...row, area: row.area.split('/') }
  console.log(formData.value)
  dialogVisible.value = true
}
const handleDialogBtnClick = async () => {
  // console.log(formData.value.area.join('/'))
  const area = formData.value.area.join('/')
  const res = await updateUser(formData.value.id, { ...formData.value, area })
  if (res.code === 1) {
    dialogVisible.value = false
    getList()
  }
}
const handleDeleteClick = async (row) => {
  await deleteUser(row.id)
  getList()
}
</script>

<style lang="scss" scoped>
.container {
  overflow: visible;
}
</style>
