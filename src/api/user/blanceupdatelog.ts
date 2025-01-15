import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
// console.log(token)
const userblanceupdatelog = (): Promise<any> => {
  return axios
    .get(`${url}/user/userblanceupdatelog`, {
      params: {
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
export { userblanceupdatelog }
