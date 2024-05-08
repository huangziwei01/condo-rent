import { pcaTextArr } from 'element-china-area-data'

export const propList = [
  {
    label: '用户id',
    prop: 'id',
  },
  {
    label: '角色id',
    prop: 'roleId',
  },
  {
    label: '用户名',
    prop: 'userName',
  },
  {
    label: '真实姓名',
    prop: 'realName',
  },
  {
    label: '手机号码',
    prop: 'phone',
  },
  {
    label: '所在地区',
    prop: 'area',
  },
  {
    label: '详细地址',
    prop: 'address',
  },
  {
    label: '是否启用',
    prop: 'status',
    slotName: 'status',
  },
  {
    label: '操作',
    minWidth: '200',
    slotName: 'handler',
  },
]

export const userInfoForm = [
  {
    label: '用户名：',
    field: 'userName',
    type: 'input',
  },
  {
    label: '真实姓名：',
    field: 'realName',
    type: 'input',
  },
  {
    label: '手机：',
    field: 'phone',
    type: 'input',
  },
  {
    label: '所在地区：',
    field: 'area',
    type: 'cascader',
    options: pcaTextArr,
    placeHolder: '请选择所在地区',
  },
  {
    label: '详细地址：',
    field: 'address',
    type: 'input',
  },
  {
    label: '角色id',
    field: 'roleId',
    type: 'input',
  },
  {
    label: '是否启用：',
    field: 'status',
    type: 'select',
    options: [
      {
        label: '启用',
        value: '1',
      },
      {
        label: '禁用',
        value: '0',
      },
    ],
  },
]
