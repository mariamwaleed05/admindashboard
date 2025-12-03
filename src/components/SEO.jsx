import React, { Component } from 'react';

const SEO = () => {
    return ( 
        <>
        
               
  <div className="seo-container">
      <h2 className="seo-title">{t.home.seoTitle}</h2>

      <div className="seo-row">
        <div className="seo-field-group">
          <label>{t.home.slugName}</label>
          <input type="text" placeholder={t.home.enterSlug} />
        </div>
        <div className="seo-field-group">
          <label>{t.home.pageTag}</label>
          <input type="text" placeholder={t.home.enterTag} />
        </div>
      </div>

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

      <div className="seo-field-group">
        <label>{t.home.metaDescription}</label>
        <textarea placeholder={t.home.enterMetaDesc} rows={6}></textarea>
      </div>
    </div>
    
        </>
     );
}
 
export default SEO;