import './signup.css';
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="signUp">
            <span className="signUpTitle">Create Account</span>
            
            
            <form className="signupForm">
                <label>Name</label>
                <input type="text" className="signupInput" placeholder="Enter your name..."/>
                <label>Phone</label>
                <input type="numbers" className="signupInput" placeholder="Enter your mobile number..."/>
                <label>Email</label>
                <input type="text" className="signupInput" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="password" className="signupInput" placeholder="Enter your password..."/>
                <button className="signupButton"><Link className="link" to="/signin">Sign Up</Link></button>
                
            </form>
            
            
         </div>
    );
}
