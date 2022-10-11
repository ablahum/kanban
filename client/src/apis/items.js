import axios from 'axios'
import { config } from '../config'

// export const showItems = async () => {
//   return await axios.get(`${config.api_host}/api/items`)
// }

export const createOne = async (todoId, payload) => {
  return await axios.post(`${config.api_host}/api/item/${todoId}`, payload)
}

export const updateOne = async (itemId, payload) => {
  return await axios.patch(`${config.api_host}/api/item/${itemId}`, payload)
}

export const deleteOne = async (itemId) => {
  return await axios.delete(`${config.api_host}/api/item/${itemId}`)
}

export const moveOne = async (itemId, payload) => {
  return await axios.put(`${config.api_host}/api/item/${itemId}/move`, payload)
}
