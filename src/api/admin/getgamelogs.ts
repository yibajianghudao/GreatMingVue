import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')

const getGameLogs = (name: string, date: string, id: string): Promise<any> => {
    return axios
      .get(`${url}/Admin/getGameLogs`, {
        params: {
            date:date,
            name:name,
            id:id,
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
  export { getGameLogs }