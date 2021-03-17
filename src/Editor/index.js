import React, { useState, useEffect } from "react";
import { Editor as DraftEditor, EditorState, RichUtils, convertToRaw } from "draft-js";
import { stateToMarkdown } from "draft-js-export-markdown";
import { draftToMarkdown } from 'markdown-draft-js';
import draftjsToMarkdown from 'draftjs-to-markdown';
import d2m from "../utils/d2m";

import Toolbar from "./Toolbar";

import "./index.scss";


const slackConfig = {
    blockTypesMapping: {
        'code-block': '``` ```'
    }
}

const Editor = ({ onChange }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onStateChange = (editorState) => setEditorState(editorState);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onStateChange(newState);
      return true;
    }
    return false;
  };

  const handleToggle = (style, type) => {
    console.log("TOGGLE", style, type);
    onStateChange(
      type === "block"
        ? RichUtils.toggleBlockType(editorState, style)
        : RichUtils.toggleInlineStyle(editorState, style)
    );
  };

  useEffect(() => {
      const content = editorState.getCurrentContent();
      const djem = stateToMarkdown(content);
      const raw = convertToRaw(content);
      const mdj = draftToMarkdown(raw);
      const dtm = draftjsToMarkdown(raw);
      const customDTM = d2m(raw);

    onChange(djem, raw, mdj, dtm, customDTM);
  }, [editorState]);

  return (
    <div className="editor">
      <DraftEditor
        {...{ editorState, handleKeyCommand }}
        onChange={setEditorState}
        
      />

      <Toolbar onToggle={handleToggle} />
    </div>
  );
};
export default Editor;
