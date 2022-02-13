import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import getCurrentUser from "../service/authService";

const Navbar = (props) => {
    
    return (
        <>
            <nav
                className="d-flex flex-wrap justify-content-between px-4 navbar navbar-light"
                style={{ backgroundColor: "#e3f2fd" }}
            >
                <div>
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                </div>
                {
                    console.log(getCurrentUser())
                }
                <div>
                    {!getCurrentUser() && (
                        <>
                            <Link className="navbar-brand" to="/login">
                                Login
                            </Link>
                            <Link className="navbar-brand" to="/sign-up">
                                Sign-Up
                            </Link>
                        </>
                    )}
                </div>
                <div>
                    {getCurrentUser() && (
                        <>
                            <p className="navbar-brand">
                                {getCurrentUser().username}
                            </p>
                            <Link className="navbar-brand" to="/log-out">Log Out</Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
