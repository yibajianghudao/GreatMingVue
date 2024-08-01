import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const token = localStorage.getItem('token')
// console.log(token)
const getallproducts = (): Promise<any> => {
  return axios
    .get(`${url}/getallproducts`, {
      params: {},
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

const buyproduct = (id: number, quantity: number): Promise<any> => {
  return axios.post(
    `${url}/order/buy`,
    {
      productId: id,
      quantity: quantity
    },
    {
      headers: {
        Authorization: token
      }
    }
  )
}

export { getallproducts, buyproduct }
