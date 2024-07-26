// import React, { useState } from 'react';
// import { Editor, EditorState, ContentState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// const DraftEditor = () => {
//   const [editorState, setEditorState] = useState<EditorState>(
//     EditorState.createWithContent(ContentState.createFromText(''))
//   );

//   const handleEditorChange = (state: EditorState) => {
//     setEditorState(state);
//   };

//   const handleSave = () => {
//     const contentState = editorState.getCurrentContent();
//     const plainText = contentState.getPlainText();
//     console.log('Text content:', plainText);
//   };

//   return (
//     <div>
//       <Editor editorState={editorState} onChange={handleEditorChange} />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default DraftEditor;
