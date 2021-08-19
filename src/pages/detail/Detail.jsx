import './detail.css';
import { Link } from "react-router-dom"

export default function Detail() {
    return (
        <div className="Detail">
            <span className="detailTitle">Tell us about your self</span>
            
            <form className="detailForm">
                <label>Are you already teaching online?</label>
                <input type="text" className="detailInput" placeholder=""/>
                <label>Would you identify yourself as:</label>
                <input type="text" className="detailInput" placeholder=""/>
                <label>Which industry will you be teaching in?</label>
                <input type="text" className="detailInput" placeholder=""/>
                <button className="detailButton"><Link className="link" to="/content">Start creating courses</Link></button>
            </form>
            
            
         </div>
    );
}
