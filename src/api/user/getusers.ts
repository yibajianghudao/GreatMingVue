import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
// console.log(token)
const getuserspage = (pageNum:number, pageSize:number, company:string): Promise<any> => {
  return axios
    .get(`${url}/user/userpagelist`, {
      params: {
        pageNum: pageNum,
        pageSize: pageSize,
        company: company
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
export { getuserspage }
