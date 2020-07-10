import { reqGetSubjectList } from '@api/edu/subject'

import { GET_SUBJECT_LIST } from './constants'

const getSubjectListSync = (list) => ({
  type: GET_SUBJECT_LIST,
  data: list,
})

export const getSubjectList = ({ page, limit }) => {
  return (dispatch) => {
    return reqGetSubjectList({ page, limit }).then((response) => {
      // response-->一个对象：total--items
      dispatch(getSubjectListSync(response))
      return response.total
    })
  }
}
