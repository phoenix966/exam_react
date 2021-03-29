import {useState} from 'react'
import './editor.sass'
import axios from '../../myAxiosInstance'

import { Editor as Redactor } from '@tinymce/tinymce-react'; 
// import { formatDate } from '../../utils/FormatDate';

// let empty = {
//     title: '',
//     author: '',
//     text:'',
//     img:'',
//     date:''
// }

function Editor() {

const [loading,setLoading] = useState(false);
const [data,setData] = useState({
    title: '',
    author: '',
    text:'',
    img:'',
    date:'',
    key:''
});


let handleEditorChange = (e) => {
    let value = e.target.getContent()
    setData((prev)=>{
        let obj = {...prev};
        obj.text = value;
        return obj
    })
}
let actionOnChange=(e)=>{
    let value = e.target.value;
    let input = e.target.name;
    setData((prev)=>{
        let obj = {...prev};
        obj[input] = value;
        return obj; 
    })
}

let actionOnClick=(e)=>{
    e.preventDefault();
    setLoading(true);
    let obj = {...data};
    let date = new Date().getTime()
    obj.date = date
    axios.post('/blog.json',obj)
        .finally(()=>{
            setLoading(false);
        });
}

    return (
        <div className="editor">
            <h2 className="editor__title">Create new post</h2>
                <form>
                    <div className="container editor__container">
                        <div className="editor__wrap">
                            <div className="editor__box">
                                <input onChange={(e)=> actionOnChange(e)} name="title" type="text" className="editor__input" placeholder="Your title"/>
                            </div>
                            <div className="editor__box">
                                <input onChange={(e)=> actionOnChange(e)} name="author" type="text" className="editor__input" placeholder="Author"/>
                            </div>
                        </div>
                        <div className="editor__wrap">
                            <div className="editor__wrapper">
                                <Redactor
                                    initialValue="<p>Enter text for blog</p>"
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image', 
                                        'charmap print preview anchor help',
                                        'searchreplace visualblocks code',
                                        'insertdatetime media table paste wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic | \
                                        alignleft aligncenter alignright | \
                                        bullist numlist outdent indent | help'
                                    }}
                                    onChange={(e)=> handleEditorChange(e)}
                                    apiKey="iuklm3m9uwu2cyhbse1qxcx2l1j9rg7a7kzht1gldgjcrk1d"
                                    init={{ /* your other settings */ }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container editor__container--flex">
                        <input id="files" name="file" type="file" className="editor--hidden" placeholder="Author"/>
                        <button onClick={(e)=>actionOnClick(e)} className="editor__btn">Create blog</button>
                        <label className="editor__label" htmlFor="files">Upload picture</label>
                    </div>
                </form>
            </div>
    )
}

export default Editor
