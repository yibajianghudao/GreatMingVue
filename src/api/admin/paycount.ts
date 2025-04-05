import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')

const handlepaybalance = (mouthlogs :any): Promise<any> => {
    return axios
      .post(
        `${url}/Admin/payBalance`,
        {
            monthlogs: mouthlogs,
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
  export { handlepaybalance }