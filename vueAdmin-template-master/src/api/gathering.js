import request from '@/utils/request'

export default {
  getList() {
    return request({
      url: '/gathering/gathering',
      method: 'get'
    })
  }
}
