import { Link } from "react-router-dom";
import "./NavigationHeader.css";

function NavigationHeader() {
    return <div>
        <header className="container-flex">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </header>
        The navigation header component is working
    </div>
}

export default NavigationHeader;