import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://roomiesapi-production-4fe7.up.railway.app/api',
  timeout: 3000,
})
