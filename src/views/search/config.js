export const formItems = [
  {
    label: '所属城市：',
    field: 'city',
    type: 'select',
    options: [
      {
        label: '北京',
        value: 1
      }
    ]
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
        value: 1
      },
      {
        label: '合租',
        value: 2
      }
    ]
  },
  {
    label: '有无电梯：',
    field: 'isLift',
    type: 'select',
    options: [
      {
        label: '有',
        value: 1
      },
      {
        label: '无',
        value: 2
      }
    ]
  },
  {
    label: '有无空调：',
    field: 'isAC',
    type: 'select',
    options: [
      {
        label: '有',
        value: 1
      },
      {
        label: '无',
        value: 2
      }
    ]
  }
]
