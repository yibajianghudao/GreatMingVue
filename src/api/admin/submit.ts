import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')

const submitGameLog = (date: string, language: string, data: string): Promise<any> => {
    return axios
      .post(
        `${url}/Admin/uploadGameLog`,
        {
            date: date,
            Language: language,
            data: data
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

  const submitHandleGameLog = (date: string, data: string): Promise<any> => {
    return axios
      .post(
        `${url}/Admin/uploadHandleGameLog`,
        {
            date: date,
            data: data
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
  export { submitGameLog, submitHandleGameLog }