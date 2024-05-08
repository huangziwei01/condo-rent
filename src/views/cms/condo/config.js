import { pcaTextArr } from 'element-china-area-data'

export const formItems1 = [
  {
    label: '租赁类型：',
    field: 'rentType',
    type: 'select',
    options: [
      {
        label: '整租',
        value: '1',
      },
      {
        label: '合租',
        value: '2',
      },
    ],
    placeHolder: '请选择租赁类型',
  },
  {
    label: '月租金:',
    field: 'price',
    type: 'input',
    placeHolder: '请输入月租金',
  },
  {
    label: '所在地区：',
    field: 'area',
    type: 'cascader',
    options: pcaTextArr,
    placeHolder: '请选择所在地区',
  },
  {
    label: '房子标题信息：',
    field: 'title',
    type: 'input',
    placeHolder: '请输入房子标题信息',
  },
  {
    label: '详细地址信息：',
    field: 'address',
    type: 'input',
    placeHolder: '请输入详细地址信息',
  },
]

export const formItems2 = [
  {
    label: '房产证号：',
    field: 'deedNum',
    type: 'input',
    placeHolder: '请输入房产证号',
  },
  {
    label: '面积：',
    field: 'area',
    type: 'input',
    placeHolder: '请输入面积',
  },
  {
    label: '朝向：',
    field: 'towards',
    type: 'input',
    placeHolder: '请输入朝向',
  },
  {
    label: '是否有空调：',
    field: 'isAc',
    type: 'select',
    options: [
      {
        label: '有空调',
        value: '1',
      },
      {
        label: '无空调',
        value: '2',
      },
    ],
    placeHolder: '请选择是否有空调',
  },
  {
    label: '卧室数量：',
    field: 'bedRoomNum',
    type: 'input',
    placeHolder: '请输入卧室数量',
  },
  {
    label: '客厅数量：',
    field: 'livingRoomNum',
    type: 'input',
    placeHolder: '请输入客厅数量',
  },
  {
    label: '厨房数量：',
    field: 'kitchenNum',
    type: 'input',
    placeHolder: '请输入厨房数量',
  },
  {
    label: '卫生间数量：',
    field: 'toiletNum',
    type: 'input',
    placeHolder: '请输入卫生间数量',
  },
]

export const formItems3 = [
  {
    label: '建筑年份：',
    field: 'jzYear',
    type: 'input',
    placeHolder: '请输入建筑年份',
  },
  {
    label: '所在楼层：',
    field: 'floor',
    type: 'input',
    placeHolder: '请输入所在楼层',
  },
  {
    label: '总楼层：',
    field: 'totalFloor',
    type: 'input',
    placeHolder: '请输入总楼层',
  },
  {
    label: '是否有电梯：',
    field: 'isLift',
    type: 'select',
    options: [
      {
        label: '有电梯',
        value: '1',
      },
      {
        label: '无电梯',
        value: '2',
      },
    ],
    placeHolder: '请选择是否有电梯',
  },
]

export const formItems4 = [
  {
    label: '联系人姓名：',
    field: 'contactName',
    type: 'input',
    placeHolder: '请输入联系人姓名',
  },
  {
    label: '联系人电话：',
    field: 'contactPhone',
    type: 'input',
    placeHolder: '请输入联系人电话',
  },
]

export const formItems5 = [
  {
    label: '',
    field: 'description',
    type: 'textarea',
    rows: 6,
  },
]
