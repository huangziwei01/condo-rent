import { isHidden } from 'element-plus/es/components/focus-trap/index.mjs'

export const propList = [
  {
    label: '权限id',
    prop: 'id',
  },
  {
    label: '权限名',
    prop: 'name',
  },
  {
    label: '操作',
    minWidth: '120',
    slotName: 'handler',
  },
]

export const formItems = [
  // {
  //   label: '角色id：',
  //   field: 'id',
  //   type: 'input',
  //   disabled: true,
  //   isHidden: false,
  // },
  {
    label: '权限名称：',
    field: 'name',
    type: 'input',
  },
  {
    label: '权限路径：',
    field: 'url',
    type: 'input',
  },
]
