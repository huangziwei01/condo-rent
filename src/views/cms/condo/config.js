export const formItems1 = [
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
    label: '月租金',
    field: 'price',
    type: 'input'
  },
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
    label: '房子标题信息：',
    field: 'title',
    type: 'input'
  },
  {
    label: '房子详细地址信息：',
    field: 'address',
    type: 'input'
  }
]

export const formItems2 = [
  {
    label: '房产证号：',
    field: 'fcz',
    type: 'input'
  },
  {
    label: '面积：',
    field: 'mj',
    type: 'input'
  },
  {
    label: '朝向：',
    field: 'cx',
    type: 'input'
  },
  {
    label: '是否有空调：',
    field: 'ac',
    type: 'select',
    options: [
      {
        label: '有空调',
        value: 1
      },
      {
        label: '无空调',
        value: 2
      }
    ]
  },
  {
    label: '卧室数量：',
    field: 'ws',
    type: 'input'
  },
  {
    label: '客厅数量：',
    field: 'kt',
    type: 'input'
  },
  {
    label: '厨房数量：',
    field: 'kt1',
    type: 'input'
  },
  {
    label: '卫生间数量：',
    field: 'kt2',
    type: 'input'
  }
]

export const formItems3 = [
  {
    label: '建筑年份：',
    field: 'nf',
    type: 'input'
  },
  {
    label: '所在楼层：',
    field: 'lc',
    type: 'input'
  },
  {
    label: '总楼层：',
    field: 'zlc',
    type: 'input'
  },
  {
    label: '是否有电梯：',
    field: 'ac',
    type: 'select',
    options: [
      {
        label: '有电梯',
        value: 1
      },
      {
        label: '无电梯',
        value: 2
      }
    ]
  }
]

export const formItems4 = [
  {
    label: '联系人姓名：',
    field: 'lxr',
    type: 'input'
  },
  {
    label: '联系人电话：',
    field: 'lxrdh',
    type: 'input'
  }
]

export const formItems5 = [
  {
    label: '',
    field: 'description',
    type: 'textarea',
    rows: 6
  }
]
