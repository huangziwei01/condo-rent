<template>
  <div>
    <el-button
      type="primary"
      plain
      icon="Edit"
      @click="addRoleClick"
      style="margin: 20px 0; margin-right: 20px"
      >新增角色</el-button
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
  getRoleList,
  addRole,
  updateRole,
  deleteRole,
  getRole,
} from '@/api/role'
import {
  getRoleMenuList,
  getRoleMenu,
  addRoleMenu,
  deleteRoleMenu,
} from '@/api/role_menu'
import { getMenu, getMenuList } from '@/api/menu'
const formItems1 = ref([...formItems])
const dialogType = ref('add')
const getAllMenu = async () => {
  const res = await getMenuList({})
  const checkbox = formItems.find((item) => item.field === 'menuList')
  checkbox.options = []
  res.data.list.map((item) => {
    checkbox.options.push({
      label: item.name,
      value: item.id,
    })
  })
}
getAllMenu()
const dialogTitle = ref('修改角色')
const roleList = ref([])
const getList = async () => {
  const res = await getRoleList({})
  roleList.value = res.data.list
}
getList()
const checkList = ref([])

const formData = ref({})
formItems.forEach((item) => {
  const obj = formData.value
  obj[item.field] = item.field === 'menuList' ? [] : ''
  console.log(formData.value)
})
// 原先的权限id
const menuList = ref([])
const dialogVisible = ref(false)
const editBtnClick = async (row) => {
  formItems1.value[0].isHidden = false
  formItems1.value[2].isHidden = false
  dialogType.value = 'edit'
  const res = await getRoleMenuList({ roleId: row.id })
  const menuList = res.data.list.map((item) => item.menuId)
  menuList.value = menuList
  dialogVisible.value = true
  formData.value = { ...row, menuList }
}

const handleDeleteClick = async (row) => {
  await deleteRole(row.id)
  getList()
}
const submit = async () => {
  if (dialogType.value === 'edit') {
    // 先删除所有权限
    const res = await deleteRoleMenu(formData.value.id)
    // 再添加权限
    formData.value.menuList.forEach(async (item) => {
      await addRoleMenu({
        roleId: formData.value.id,
        menuId: item,
      })
    })
    if (res.code === 1) {
      const res1 = await updateRole(formData.value.id, {
        roleName: formData.value.roleName,
      })
      if (res1.code === 1) {
        getList()
        dialogVisible.value = false
      }
    }
  } else if (dialogType.value === 'edit') {
    const res = await addRole({
      roleName: formData.value.roleName,
    })
    if (res.code === 1) {
      getList()
      dialogVisible.value = false
    }
  }
}
const addRoleClick = () => {
  formItems1.value[0].isHidden = true
  formItems1.value[2].isHidden = true
  dialogType.value = 'add'
  dialogTitle.value = '新增角色'
  dialogVisible.value = true
}
// const addMenuClick = () => {
//   formItems1.value = [
//     {
//       label: '权限名称：',
//       field: 'name',
//       type: 'input',
//     },
//     {
//       label: '权限路径：',
//       field: 'url',
//       type: 'input',
//     },
//   ]
//   dialogTitle.value = '新增权限'
//   dialogVisible.value = true

// }
</script>

<style lang="scss" scoped></style>
