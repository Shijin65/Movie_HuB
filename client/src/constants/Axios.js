import axios from 'axios'
import { BaseUrl } from "./constance";

const instance = axios.create({
    baseURL: BaseUrl
  });

  export default instance
