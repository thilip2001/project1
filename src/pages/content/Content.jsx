import './content.css'

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
                <button className="contentSubmit">Publish</button>
                <label className="urlForm">Youtube Link</label>
                <input className="urlInput" type="link" placeholder="enter your url.." />
                <button className="urlButton"  type="submit">Search</button>
            </form>
            
        </div>
    )
}
