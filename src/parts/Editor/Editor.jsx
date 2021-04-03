import {useState,useEffect} from 'react'
import './editor.sass'
import axios from '../../myAxiosInstance'
import firebase from '../../config/firebaseConfig'
import { Editor as Redactor } from '@tinymce/tinymce-react';
import {useSelector,useDispatch} from 'react-redux'
import { editOff } from '../../store/actions/blogAction';
import ProgressBar from '../../components/progress/ProgressBar';



function Editor(props) {

const [loading,setLoading] = useState(false);
const [data,setData] = useState({
    title: '',
    author: '',
    text:'',
    img:'',
    imgName:'',
    date:'',
    key:''
});
const [disable,setDisable] = useState({
    create: true,
    upload: true 
})
const [file,setFile] = useState(null)
const [fileUrl,setFileUrl] = useState(null)
const [progress,setProgress] = useState(0)
const [response,setResponse] = useState({
    text:'none'
})

const editToggle = useSelector((state)=>state.editToggle)
const editId = useSelector((state)=>state.editId)
const dispatch = useDispatch()



useEffect(()=>{
    if(editToggle){
        axios.get(`/blog/${editId}.json`).then((response)=>{
        setResponse(response.data)
        setData(response.data)
        setFileUrl(response.data.img)
    })
    }
    
},[editId,editToggle])

const saveInStoreImg=(e)=>{
    setFile(e.target.files[0]);
    setDisable({
        ...disable,
        upload: false
    })
}


const onFileUpload = event => {
    event.preventDefault();
    const key = new Date().getTime()
    const randomKey = Math.round(Math.random() * 90 + 1)
    const fileName = key + randomKey + file.name;
    setData({
        ...data,
        imgName: fileName
    })
    const storageRef = firebase.storage().ref('images/' + fileName);
    const uploadTask = storageRef.put(file);

  
    uploadTask.on('state_changed', (snapshot) => {
          const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL()
              .then(fileUrl => {
                setFileUrl(fileUrl);
                setTimeout(()=>{
                     setDisable({
                    ...disable,
                    create: false
                })
                },1000)
               
              })
        }
    )
  };
  

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
    let obj = {...data};
    let date = new Date().getTime()
    switch(editToggle){
        case false:
            setLoading(true);
            obj.date = date
            obj.img = fileUrl
            axios.post('/blog.json',obj)
                .finally(()=>{
                    dispatch(editOff())
                    setLoading(false);
                });
            break;
        case true:
            setLoading(true);
            obj.date = date
            obj.img = fileUrl
            console.log('true');
            axios.patch(`/blog/${editId}.json`,obj)
                .finally(()=>{
                    dispatch(editOff())
                    setLoading(false)
                })
    } 
    
    
}
    return (
        <div className="editor">
            <h2 className="editor__title">Create new post</h2>
                <form>
                    <div className="container editor__container">
                        <div className="editor__wrap">
                            <div className="editor__box">
                                <input onChange={(e)=> actionOnChange(e)} name="title" type="text" className="editor__input" placeholder={editToggle ? response.title : "Title"}/>
                            </div>
                            <div className="editor__box">
                                <input onChange={(e)=> actionOnChange(e)} name="author" type="text" className="editor__input" placeholder={editToggle ? response.author : "Author"}/>
                            </div>
                        </div>
                        <div className="editor__wrap">
                            <div className="editor__wrapper">
                                <Redactor
                                    initialValue={editToggle ? response.text : 'Enter text'}
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        // 'advlist autolink lists link image', 
                                        // 'charmap print preview anchor help',
                                        // 'searchreplace visualblocks code',
                                        // 'insertdatetime media table paste wordcount'
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
                    </form>
                    <div className="container editor__container--flex">
                        <ProgressBar progress={progress}/>
                    </div>
                    <div className="container editor__container--flex">
                        <form onSubmit={(e)=> onFileUpload(e)}>
                            <button onClick={(e)=>actionOnClick(e)} className={disable.create ? "editor__btn disable" : 'editor__btn btn--danger'} disabled={disable.create ? true : false}>Create blog</button>
                            <input onChange={(e)=> saveInStoreImg(e)} id="files" name="file" type="file" className="editor--hidden" placeholder="Author"/>
                            <label className="editor__label" htmlFor="files">Browse</label>
                            <button className={disable.upload ? "editor__btn disable" : 'editor__btn btn--sky'} disabled={disable.upload ? true : false}>Upload on Store</button>
                        </form>
                            
                    </div>
                </div>
    )
}

export default Editor
