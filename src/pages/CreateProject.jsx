import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import { Link, useNavigate } from 'react-router-dom'; 
import NavButtons from '../common/NavButtons';
import './CreateProject.css';
import RichTextEditor from '../components/RichTextEditor';
import { supabase } from '../SupaBase';

const CreateProject = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
  const [formData, setFormData] = useState({
    Title: '',
    Info: '',
    HeroImage: '',
    Date: '',
    Type: '',
    Duration: '',
    Overview: '',
    Challenge: '',
    Solution: '',
    Role: '',
    Technologies: '',
    Achievements: '',
    SlugName: '',
    PageTag: '',
    MetaDescription: '',
    Gallery: '',
    Process: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (columnName, content) => {
    setFormData(prev => ({ ...prev, [columnName]: content }));
  };

  const addTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("ProjectDetails")
        .insert([{
          ...formData,
          Tags: tags.join(", "),
          KeyFeatures: {}, 
          created_at: new Date()
        }]);

      if (error) throw error;
      navigate('/PageList');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Project</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <form className="pc-container" onSubmit={handleSubmit}>
            <div className="pc-header-row">
              <div className="pc-title-group">
                <h1>Create Project</h1>
                <p>Add details for your new portfolio item</p>
              </div>
              <Link to="/PageList">
                <button type="button" className="pc-back-btn">
                  Back To Projects &gt;
                </button>
              </Link>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Tags</div>
              
              <div className="pc-form-group pc-mt-20">
                <label>Add Tag</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={newTag} 
                    onChange={(e) => setNewTag(e.target.value)} 
                    placeholder="Type a tag and press +" 
                    className="pc-input" 
                  />
                  <button type="button" className="pc-add-btn" onClick={addTag}>+</button>
                </div>
              </div>

              {tags.length > 0 && (
                <div className="pc-tags-container pc-mt-20">
                  {tags.map((tag, index) => (
                    <div key={index} className="pc-tag pc-tag-dark">
                      {tag}
                      <div className="pc-close-badge" onClick={() => removeTag(index)}>×</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Header Info</div>
              <div className="pc-form">
                <div className="pc-grid-two">
                    <div className="pc-form-group">
                      <label>Project Title</label>
                      <input type="text" name="Title" value={formData.Title} onChange={handleChange} placeholder="Enter Title" className="pc-input" required />
                    </div>
                    <div className="pc-form-group">
                      <label>Slug Name</label>
                      <input type="text" name="SlugName" value={formData.SlugName} onChange={handleChange} placeholder="project-url-slug" className="pc-input" />
                    </div>
                </div>

                <div className="pc-grid-two">
                    <div className="pc-form-group">
                        <label>Service Category (Type)</label>
                        <div className="pc-select-wrapper">
                            <select name="Type" value={formData.Type} onChange={handleChange} className="pc-input">
                                <option value="" disabled>Select Service</option>
                                <option value="UX/UI">UX/UI Design</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Content Creation">Content Creation</option>
                                <option value="3D Modeling">3D Modeling</option>
                                <option value="Motion Graphics">Motion Graphics</option>
                                <option value="Coding">Coding</option>
                                <option value="Photography">Photography</option>
                            </select>
                        </div>
                    </div>
                    <div className="pc-form-group">
                      <label>Hero Image URL</label>
                      <input type="text" name="HeroImage" value={formData.HeroImage} onChange={handleChange} placeholder="https://..." className="pc-input" />
                    </div>
                </div>

                <div className="pc-form-group">
                    <label className="pc-desc-label">Info / Short Description</label>
                    <RichTextEditor 
                        value={formData.Info} 
                        onChange={(content) => handleEditorChange('Info', content)} 
                    />
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date</label>
                    <input type="text" name="Date" value={formData.Date} onChange={handleChange} placeholder="Oct 2023" className="pc-input" />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration</label>
                    <input type="text" name="Duration" value={formData.Duration} onChange={handleChange} placeholder="2 Weeks" className="pc-input" />
                  </div>
                  <div className="pc-form-group">
                    <label>Page Tag</label>
                    <input type="text" name="PageTag" value={formData.PageTag} onChange={handleChange} placeholder="Featured" className="pc-input" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Overview & Process</div>
              <div className="pc-form-group">
                <label>Project Overview</label>
                <RichTextEditor 
                    value={formData.Overview} 
                    onChange={(content) => handleEditorChange('Overview', content)} 
                />
              </div>
              <div className="pc-form-group pc-mt-20">
                <label>Design Process</label>
                <RichTextEditor 
                    value={formData.Process} 
                    onChange={(content) => handleEditorChange('Process', content)} 
                />
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Details</div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>My Role</label>
                  <textarea name="Role" value={formData.Role} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Add Role"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Challenge</label>
                  <textarea name="Challenge" value={formData.Challenge} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Enter Challenges"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Solution</label>
                  <textarea name="Solution" value={formData.Solution} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Enter Solution"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Technologies</label>
                  <textarea name="Technologies" value={formData.Technologies} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Enter technologies"></textarea>
                </div>
              </div>

              <div className="pc-form-group">
                <label>Key Achievements</label>
                <textarea name="Achievements" value={formData.Achievements} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Enter Key Achievements"></textarea>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Gallery & Meta</div>
              <div className="pc-form-group">
                <label>Gallery URL</label>
                <input type="text" name="Gallery" value={formData.Gallery} onChange={handleChange} className="pc-input" placeholder="Image URL" />
              </div>
              <div className="pc-form-group pc-mt-20">
                <label>Meta Description</label>
                <textarea name="MetaDescription" value={formData.MetaDescription} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="SEO Description"></textarea>
              </div>
            </div>

            <div className="pc-footer-actions">
                <Link to="/PageList" className="pc-link-no-style">
                    <button type="button" className="pc-btn-cancel">Cancel</button>
                </Link>
                <div className="pc-action-group">
                    <button type="submit" className="pc-btn-submit">Publish Project</button>
                </div>
            </div>
          </form> 
        </div>
      </div>
    </>
  );
};

export default CreateProject;