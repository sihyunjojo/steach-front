import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const customStyle = `
  .ck-editor__editable_inline {
    min-height: 300px;
    max-height: 300px;
    overflow-y: auto;
  }
`;

interface CustomEditor extends ClassicEditor {
  getData: () => string;
}

interface CKEditorComponentProps {
  onChange: (data: string) => void;
  data: string;
}

const CKEditorComponents: React.FC<CKEditorComponentProps> = ({ onChange, data }) => {
  const handleEditorChange = (event: any, editor: CustomEditor) => {
    const newData = editor.getData();
    onChange(newData);
  };

  return (
    <div>
      <style>
        {customStyle}
      </style>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default CKEditorComponents;
