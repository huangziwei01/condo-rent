export const loginFormItems = [
  {
    label: '用户名：',
    field: 'username',
    type: 'input',
  },
  {
    label: '密码：',
    field: 'password',
    type: 'password',
  },
]

export const registerFormItems = [
  {
    label: '用户名：',
    field: 'username',
    type: 'input',
  },
  {
    label: '手机号码：',
    field: 'phone',
    type: 'input',
  },
  {
    label: '密码：',
    field: 'password',
    type: 'password',
  },
  {
    label: '身份：',
    field: 'role',
    type: 'select',
    options: [
      { label: '租客', value: 1 },
      { label: '房东', value: 2 },
    ],
  },
]
