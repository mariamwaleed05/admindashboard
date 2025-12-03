import React, { Component } from 'react';
import './RichTextEditor.css';
import { 
  Bold, Italic, Strikethrough, 
  Heading1, Heading2, Heading3, 
  Highlighter, Code, Link as LinkIcon, 
  MessageSquare, ImagePlus 
} from 'lucide-react';

const RichTextEditor = () => {
    return ( 
        <>
        
        
   
      <div className="seo-toolbar">
        <button title="Bold"><Bold size={18} /></button>
        <button title="Italic"><Italic size={18} /></button>
        <button title="Strikethrough"><Strikethrough size={18} /></button>
        <div className="divider"></div>
        <button title="H1"><Heading1 size={18} /></button>
        <button title="H2"><Heading2 size={18} /></button>
        <button title="H3"><Heading3 size={18} /></button>
        <div className="divider"></div>
        <button title="Highlight"><Highlighter size={18} /></button>
        <button title="Code"><Code size={18} /></button>
        <button title="Link"><LinkIcon size={18} /></button>
        <button title="Comment"><MessageSquare size={18} /></button>
        <button title="Add Image"><ImagePlus size={18} /></button>
      </div>


        </>
     );
}
 
export default RichTextEditor;