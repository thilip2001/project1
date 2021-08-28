import './content.css';
import { Link } from "react-router-dom";

export default function Content() {
    return (
        <div className="content">
            <img className="contentImage" src="content.jpg" alt=" " />
            <form className="contentForm">
                <div className="contentFormGroup">
                    <label htmlFor="fileInput">
                         <i  className=" contentIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="contentInput" autoFocus={true}  />
                </div>
                <div className="contentFormGroup">
                    <textarea placeholder="Write your Content..." type="text" className="contentInput contentText">

                    </textarea>
                </div>
                <button className="contentSubmit"><Link className="link" to="/youtube">Publish</Link></button>
            </form>
            
        </div>
    )
}
