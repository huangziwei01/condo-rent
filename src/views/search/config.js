export const formItems = [
  {
    label: '查找地区：',
    field: 'area',
    type: 'input'
  },
  {
    label: '最高价格：',
    field: 'highestPrice',
    type: 'input'
  },
  {
    label: '最低价格：',
    field: 'lowestPrice',
    type: 'input'
  },
  {
    label: '租赁类型：',
    field: 'rentType',
    type: 'select',
    options: [
      {
        label: '整租',
        value: '1'
      },
      {
        label: '合租',
        value: '2'
      }
    ]
  }
]
