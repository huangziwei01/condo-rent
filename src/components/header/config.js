import { pcaTextArr } from 'element-china-area-data'

export const loginFormItems = [
  {
    label: '用户名：',
    field: 'userName',
    type: 'input',
    placeHolder: '请输入用户名',
  },
  {
    label: '密码：',
    field: 'password',
    type: 'password',
    placeHolder: '请输入密码',
  },
]

export const registerFormItems = [
  {
    label: '用户名：',
    field: 'userName',
    type: 'input',
    placeHolder: '请输入用户名',
  },
  {
    label: '真实姓名：',
    field: 'realName',
    type: 'input',
    placeHolder: '请输入真实姓名',
  },
  {
    label: '手机号码：',
    field: 'phone',
    type: 'input',
    placeHolder: '请输入手机号码',
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
    placeHolder: '请输入详细地址',
  },

  {
    label: '密码：',
    field: 'password',
    type: 'password',
    placeHolder: '请输入密码',
  },
  {
    label: '身份：',
    field: 'roleId',
    type: 'select',
    placeHolder: '请选择身份',

    options: [
      { label: '管理员', value: '1' },
      { label: '租客', value: '2' },
      { label: '房东', value: '3' },
    ],
  },
]
