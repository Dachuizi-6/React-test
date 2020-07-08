import React, { Component } from 'react'

import { Button, Table } from 'antd'
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons'

import './index.less'

const columns = [
  { title: '分类名称', dataIndex: 'name', key: 'name' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    width: 200,
    render: () => (
      <>
        <Button type="primary" className="action-btn">
          <FormOutlined />
        </Button>
        <Button type="danger">
          <DeleteOutlined />
        </Button>
      </>
    ),
  },
]

const data = [
  {
    key: 1,
    name: 'Html',
    description: '页面仔',
  },
  {
    key: 2,
    name: 'Css',
    description: '美化',
  },
  {
    key: 3,
    name: 'Vue',
    description: 'Vue真香',
  },
  {
    key: 4,
    name: 'React',
    description: '学好React，成就高薪就业',
  },
]
export default class Subject extends Component {
  render() {
    return (
      <div className="subject">
        <Button type="primary" className="subject-btn">
          <PlusOutlined />
          新建
        </Button>
        <Table
          // 设置列
          columns={columns}
          // 设置是否可展开
          expandable={{
            // 展开的内容
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            // 判断是否可展开
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          // 表格数据
          dataSource={data}
        />
        ,
      </div>
    )
  }
}
