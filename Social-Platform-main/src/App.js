import { Route, Switch } from "react-router-dom";
import Login from "./components/login.component";
import Navbar from "./components/navbar.component";
import Signup from "./components/sign-up.component";
import Home from "./components/home.component";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import Logout from "./components/logout.component";

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/sign-up" component={Signup}/>
                <PrivateRoute path="/log-out" component={Logout}/>
                <PrivateRoute path="/" component={Home}/>
            </Switch>
        </>
    );
}

export default App;
