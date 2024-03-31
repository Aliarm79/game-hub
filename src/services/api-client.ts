import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a431655d4884fd7b2be474fb303a763",
  },
});

export default Axios;
