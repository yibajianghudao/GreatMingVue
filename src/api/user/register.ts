import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')

const registeruser = (name: string, ranks:string, company:string, ): Promise<any> => {
    return axios.post(
      `${url}/user/adduser`,
      {
        name:name,
        ranks:ranks,
        company:company,
      },
      {
        headers: {
          Authorization: token
        }
      }
    )
  }
export{registeruser}