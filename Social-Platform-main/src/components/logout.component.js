import { Redirect } from "react-router-dom";

function Logout(props) {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
}

export default Logout;