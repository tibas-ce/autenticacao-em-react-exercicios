import axios from "axios";
import { baseURL } from "../constants/baseURL";

const login = (body) => {
    const url = `${baseURL}/user/login`;

    axios.post(url, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            alert(res.data.message)
        })
        .catch((err) => {console.log(err);});
}

export default login;