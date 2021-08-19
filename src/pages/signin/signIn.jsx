import './signin.css';
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div className="signIn">
            <span className="signInTitle">Sign In</span>
            
            
            <form className="signinForm">
                <label>Email</label>
                <input type="text" className="signinInput" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="password" className="signinInput" placeholder="Enter your password..."/>
                <button className="signinButton"><Link className="link" to="/detail">Sign In</Link></button>
                
            </form>
            
            
         </div>
    );
}
