import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from '@ckeditor/ckeditor5-core';

// 이진송
// 업데이트창, 에디터 라이브러리 가져온 것,
// 디자인 우선 하고 내부를 다듬어 둔 후, axios 추가해야함
interface CustomEditor extends Editor {
    getData: () => string;
}

const TeacherInfoDetailUpdate: React.FC = () => {
    const [editorData, setEditorData] = useState('<p>Hello from CKEditor 5!</p>');

    const handleEditorChange = (event: any, editor: CustomEditor) => {
        const data = editor.getData();
        setEditorData(data);
        console.log('Editor data:', data);
        const jsonData = JSON.stringify({ content: data });
        console.log('JSON encoded data:', jsonData);
    };

    return (
        <div className="App">
            <h2>Using CKEditor 5 in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onReady={(editor: CustomEditor) => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={handleEditorChange}
                onBlur={(event: any, editor: CustomEditor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event: any, editor: CustomEditor) => {
                    console.log('Focus.', editor);
                }}
            />
            <div>
                <h2>Output:</h2>
                <div dangerouslySetInnerHTML={{ __html: editorData }} />
            </div>
        </div>
    );
};

export default TeacherInfoDetailUpdate;