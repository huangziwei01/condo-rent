import { isHidden } from 'element-plus/es/components/focus-trap/index.mjs'

export const propList = [
  {
    label: '角色id',
    prop: 'id',
  },
  {
    label: '角色名',
    prop: 'roleName',
  },
  {
    label: '操作',
    minWidth: '120',
    slotName: 'handler',
  },
]

export const formItems = [
  {
    label: '角色id：',
    field: 'id',
    type: 'input',
    disabled: true,
    isHidden: false,
  },
  {
    label: '角色名称：',
    field: 'roleName',
    type: 'input',
  },
  {
    label: '对应权限：',
    field: 'menuList',
    type: 'checkbox',
    options: [],
    isHidden: false,
  },
]
