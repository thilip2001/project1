import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <h2 className="logo">e-Education</h2>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem"> <Link className="link" to="/signin">Sign In</Link></li>
                    <li className="topListItem"> <Link className="link" to="/signup">Sign up</Link></li>
                </ul>
            </div>
        </div>
    )
}
    