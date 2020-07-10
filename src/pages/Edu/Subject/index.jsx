import React, { Component } from 'react'

import { Button, Table } from 'antd'
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons'

// 导入异步请求课程列表的的异步action---react-redux
import { connect } from 'react-redux'
import { getSubjectList } from './redux/actions'

import './index.less'

// import { reqGetSubjectList } from '@api/edu/subject'

const columns = [
  { title: '分类名称', dataIndex: 'title', key: 'name' },
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

// const data = [
//   {
//     key: 1,
//     name: 'Html',
//     description: '页面仔',
//   },
//   {
//     key: 2,
//     name: 'Css',
//     description: '美化',
//   },
//   {
//     key: 3,
//     name: 'Vue',
//     description: 'Vue真香',
//   },
//   {
//     key: 4,
//     name: 'React',
//     description: '学好React，成就高薪就业',
//   },
// ]

// 容器组件跟展示组件一起写
@connect((state) => ({ subjectList: state.subjectList }), { getSubjectList })
class Subject extends Component {
  currentPage = 1
  // state = {
  //   subject: {},
  // }
  async componentDidMount() {
    // const result = await reqGetSubjectList(1, 10)
    // console.log(result)
    // this.setState({
    //   subject: result,
    // })
    // this.getSubjectList(1, 3)

    // 调用异步请求api
    this.props.getSubjectList(1, 3)
  }

  // getSubjectList = async (page, limit) => {
  //   const result = await reqGetSubjectList(page, limit)
  //   console.log(result)
  //   this.setState({
  //     subject: result,
  //   })
  // }

  handlePageChange = (page, limit) => {
    // this.getSubjectList(page, limit)
    this.props.getSubjectList(page, limit)

    this.currentPage = page
  }

  handleSizeChange = (current, size) => {
    // this.getSubjectList(current, size)
    this.props.getSubjectList(current, size)

    this.currentPage = current
  }
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
          // dataSource={data}
          dataSource={this.props.subjectList.items}
          rowKey="_id"
          pagination={{
            total: this.props.subjectList.total, //total表示数据总数
            showQuickJumper: true, //是否显示快速跳转
            showSizeChanger: true, // 是否显示修改每页显示数据数量
            pageSizeOptions: ['3', '6', '9', '12'], //设置每天显示数据数量的配置项
            defaultPageSize: 3, //每页默认显示数据条数 默认是10,
            onChange: this.handlePageChange,
            onShowSizeChange: this.handleSizeChange,
            current: this.currentPage,
          }}
        />
        ,
      </div>
    )
  }
}
export default Subject
