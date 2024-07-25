import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
// console.log(token)
const userInfo = (): Promise<any> => {
  return axios
    .get('/api/user/userInfo', {
      params: {},
      headers: {
        Authorization: token
      }
    })
    .then(function (response) {
      // console.log(response.data)
      return response.data
    })
    .catch(function (err) {
      console.error(err)
      throw err
    })
}
export { userInfo }
