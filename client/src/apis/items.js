import axios from 'axios'
import { config } from '../config'

// export const showItems = async () => {
//   return await axios.get(`${config.api_host}/api/items`)
// }

export const addItem = async (todoId, payload) => {
  return await axios.post(`${config.api_host}/api/${todoId}`, payload)
}

export const updateItem = async (itemId, payload) => {
  return await axios.patch(`${config.api_host}/api/${itemId}`, payload)
}

export const removeItem = async (itemId) => {
  return await axios.patch(`${config.api_host}/api/${itemId}`)
}
