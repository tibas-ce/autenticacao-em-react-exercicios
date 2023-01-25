import axios from "axios";
import { baseUrl } from "../constants/baseURL"

const signup = (body) => {
    const url = `${baseUrl}/user/signup`; 

    axios.post(url, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            alert(res.data.message)
        })
        .catch((err) => {console.log(err);});

};

export default signup;