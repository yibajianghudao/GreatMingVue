import axios from 'axios'
import router from '@/router'
const url = import.meta.env.VITE_BASE_URL
// console.log(url)

// 直接调用login
const userlogin = (name: string, passwd: string): Promise<any> => {
  return axios
    .post(`${url}/login?name=${name}&passwd=${passwd}`)
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (err) {
      console.error(err)
      throw err
    })
}
export { userlogin }
