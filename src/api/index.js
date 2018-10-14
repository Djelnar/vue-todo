import ky from 'ky'


const API_URL = '/api'

export const Api = ky.extend({
  prefixUrl: API_URL
})

console.log(process.env)
