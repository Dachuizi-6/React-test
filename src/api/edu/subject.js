import request from '@utils/request'

const BASE_URL = '/admin/edu/subject'

// const MOCK_URL = `http://localhost:9999${BASE_URL}`

// 获取一级课程分类列表
// export function reqGetSubjectList(page, limit) {
//   return request({
//     url: `${MOCK_URL}/${page}/${limit}`,
//     method: 'get',
//   })
// }

export function reqGetSubjectList(page, limit) {
  return request({
    url: `${BASE_URL}/${page}/${limit}`,
    method: 'get',
  })
}
