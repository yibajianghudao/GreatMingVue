import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
// console.log(token)
const updateuserapi = (id:number, name:string, tag:string, ranks:string, company:string, kills:number, attendance:number, balance:number): Promise<any> => {
  return axios
    .put(`${url}/user/update`, 
        {
        id: id,
        name: name,
        tag: tag,
        ranks: ranks,
        company: company,
        kills: kills,
        attendance: attendance,
        balance: balance,
      },{headers: {
        Authorization: token
      }}
      
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
export { updateuserapi }
