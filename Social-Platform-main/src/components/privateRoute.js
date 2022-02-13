import { Redirect, Route } from "react-router-dom";
import getCurrentUser from "../service/authService";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render = {props => {
            if(getCurrentUser()) {
                return (
                    <Component {...props}/>
                )
            } else {
                return (
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }} />
                )
            }
        }} />
    )
}

export default PrivateRoute;