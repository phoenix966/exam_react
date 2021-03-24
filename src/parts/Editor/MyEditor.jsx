import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'; 

export default class MyEditor extends Component {
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    return (
      <Editor
        initialValue="<p>Initial content</p>"
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
        onChange={this.handleEditorChange}
        
        apiKey="iuklm3m9uwu2cyhbse1qxcx2l1j9rg7a7kzht1gldgjcrk1d"
        init={{ /* your other settings */ }}

      />
    );
  }
}
