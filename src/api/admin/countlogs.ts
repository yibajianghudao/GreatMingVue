import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')

const submitcountmonth = (year: string, month: string): Promise<any> => {
    return axios
      .get(`${url}/Admin/countMouthLogs`, {
        params: {
            year:year,
            month:month,
        },
        headers: {
          'Content-Type': 'application/json',
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
  export { submitcountmonth }