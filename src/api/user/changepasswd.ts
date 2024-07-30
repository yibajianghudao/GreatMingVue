import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')

const changepasswd = (oldpasswd: string, newpasswd: string, repasswd: string): Promise<any> => {
  return axios
    .patch(
      `${url}/user/updatepasswd`,
      {
        old_passwd: oldpasswd,
        new_passwd: newpasswd,
        re_passwd: repasswd
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      }
    )
    .then(function (response) {
      // console.log(response.data)
      return response.data
    })
    .catch(function (err) {
      console.error(err)
      throw err
    })
}
export { changepasswd }
