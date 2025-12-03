import React, { Component } from 'react';
import './RichTextEditor.css';

const RichTextEditor = () => {
    return ( 
        <>
        
        
         <div className="pc-toolbar">
                    <span>B</span>
                    <span style={{ fontStyle: 'italic' }}>I</span>
                    <span style={{ textDecoration: 'line-through' }}>S</span>
                    <span className="pc-divider">|</span>
                    <span>H<sub>1</sub></span>
                    <span>H<sub>2</sub></span>
                    <span>H<sub>3</sub></span>
                    <span className="pc-divider">|</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
        </>
     );
}
 
export default RichTextEditor;