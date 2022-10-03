import axios from 'axios'
import { config } from '../config'

export const showTodos = async () => {
  return await axios.get(`${config.api_host}/api/todos`)
}
