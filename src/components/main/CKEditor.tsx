import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from '@ckeditor/ckeditor5-core';

// 이진송
interface CustomEditor extends Editor {
  getData: () => string;
}

interface CKEditorComponentProps {
  onChange: (data: string) => void;
  data: string;
}


// const CKEditorComponents: React.FC = () => {
//   const [editorData, setEditorData] = useState('<p>Hello from CKEditor 5!</p>');

//   const handleEditorChange = (event: any, editor: CustomEditor) => {
//     const data = editor.getData();
//     setEditorData(data);
//     console.log('Editor data:', data);
//     const jsonData = JSON.stringify({ content: data });
//     console.log('JSON encoded data:', jsonData);
//   };


const CKEditorComponents: React.FC<CKEditorComponentProps> = ({ onChange, data }) => {
  const handleEditorChange = (event: any, editor: CustomEditor) => {
    const newData = editor.getData();
    onChange(newData);
  };

  return(
  <>
    {/* <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onReady={(editor: CustomEditor) => {
        console.log('Editor is ready to use!', editor);
      }}
        onChange={handleEditorChange}
      //   onBlur={(event: any, editor: CustomEditor) => {
      //   console.log('Blur.', editor);
      // }}
        onFocus={(event: any, editor: CustomEditor) => {
        console.log('Focus.', editor);
      }}
    />
    <div>
      <h2>Output:</h2>
      <div dangerouslySetInnerHTML={{ __html: editorData }} />
    </div> */}
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={handleEditorChange}
    />



  </>
  )
}
export default CKEditorComponents;