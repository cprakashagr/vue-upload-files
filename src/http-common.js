import axios from "axios";

export default axios.create({
  baseURL: "http://api-dev.connectco.me:8000",
  headers: {
    "Content-type": "application/json"
  }
});
