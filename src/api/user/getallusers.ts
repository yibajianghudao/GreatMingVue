import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
// console.log(token)
const getalluserspage = (pageNum:number): Promise<any> => {
  return axios
    .get(`${url}/user/userpagelist`, {
      params: {
        pageNum: pageNum,
        pageSize: '20',
        company: 'WJ'
      },
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
export { getalluserspage }
