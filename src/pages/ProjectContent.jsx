import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './ProjectContent.css';
import RichTextEditor from '../components/RichTextEditor';
import { supabase } from '../SupaBase';
import { useLanguage } from '../language/LanguageContext';

const ProjectContent = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const { idToEdit } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    Title: { en: '', ar: '' },
    ServiceCategory: { en: '', ar: '' },
    Description: { en: '', ar: '' },
    ShortDescription: { en: '', ar: '' },
    Date: { en: '', ar: '' },
    Type: { en: '', ar: '' },
    Duration: { en: '', ar: '' },
    Overview: { en: '', ar: '' },
    Role: { en: '', ar: '' },
    Challenges: { en: '', ar: '' },
    Technologies: { en: '', ar: '' },
    Solution: { en: '', ar: '' },
    Achievements: { en: '', ar: '' },
    Tags: [], 
    KeyFeatures: [],
    Process: [],
    HeroImage: '',
    Gallery: [] 
  });

  const [tagInput, setTagInput] = useState({ en: '', ar: '' });
  const [galleryInput, setGalleryInput] = useState('');

  useEffect(() => {
    if (idToEdit) {
      fetchProjectData(idToEdit);
    }
  }, [idToEdit]);

  const parseJSON = (input, fallback) => {
    if (input === null || input === undefined) return fallback;
    if (typeof input === 'object') return input;
    try {
      return JSON.parse(input) || fallback;
    } catch (e) {
      return fallback;
    }
  };

  const fetchProjectData = async (id) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('ProjectDetails')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        const parseDualLang = (field) => {
            const parsed = parseJSON(field, null);
            if (parsed && (parsed.en !== undefined || parsed.ar !== undefined)) {
                return { en: parsed.en || '', ar: parsed.ar || '' };
            }
            return { en: field || '', ar: '' };
        };

        let parsedTags = [];
        if (typeof data.Tags === 'string' && data.Tags.includes(',')) {
            parsedTags = data.Tags.split(',').map(t => ({ en: t.trim(), ar: '' }));
        } else {
            const rawTags = parseJSON(data.Tags, []);
            parsedTags = Array.isArray(rawTags) 
                ? rawTags.map(t => typeof t === 'string' ? {en: t, ar: ''} : t) 
                : [];
        }

        let parsedFeatures = [];
        const rawFeatures = typeof data.KeyFeatures === 'string' ? parseJSON(data.KeyFeatures, []) : data.KeyFeatures;
        if (Array.isArray(rawFeatures)) {
            parsedFeatures = rawFeatures.map(f => ({
                title: typeof f.title === 'object' ? f.title : { en: f.title || '', ar: '' },
                desc: typeof f.description === 'object' ? f.description : { en: f.description || '', ar: '' }
            }));
        }

        let parsedProcess = [];
        if (typeof data.Process === 'string' && data.Process.includes('->')) {
            parsedProcess = data.Process.split('->').map(p => ({
                title: { en: p.trim(), ar: '' },
                content: { en: '', ar: '' }
            }));
        } else {
            const rawProcess = parseJSON(data.Process, []);
            if (Array.isArray(rawProcess)) {
                parsedProcess = rawProcess.map(p => ({
                    title: typeof p.title === 'object' ? p.title : { en: p.title || '', ar: '' },
                    content: typeof p.content === 'object' ? p.content : { en: p.content || '', ar: '' }
                }));
            }
        }

        let parsedGallery = [];
        if (typeof data.Gallery === 'string' && data.Gallery.startsWith('http')) {
             parsedGallery = [data.Gallery]; 
        } else {
             parsedGallery = parseJSON(data.Gallery, []);
        }

        setFormData({
            Title: parseDualLang(data.Title),
            ServiceCategory: parseDualLang(data.ServiceCategory || data.Type), 
            Description: parseDualLang(data.Info), 
            ShortDescription: parseDualLang(data.Overview), 
            Date: parseDualLang(data.Date),
            Type: parseDualLang(data.Type),
            Duration: parseDualLang(data.Duration),
            Overview: parseDualLang(data.Overview),
            Role: parseDualLang(data.Role),
            Challenges: parseDualLang(data.Challenge),
            Technologies: parseDualLang(data.Technologies),
            Solution: parseDualLang(data.Solution),
            Achievements: parseDualLang(data.Achievements),
            Tags: parsedTags,
            KeyFeatures: parsedFeatures,
            Process: parsedProcess,
            Gallery: parsedGallery,
            HeroImage: data.HeroImage || ''
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, lang, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: {
        ...(prev[field] || { en: '', ar: '' }),
        [lang]: value
      }
    }));
  };

  const handleRichTextChange = (field, lang, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: { ...(prev[field] || { en: '', ar: '' }), [lang]: value }
    }));
  };

  const handleAddTag = () => {
    if (tagInput.en || tagInput.ar) {
      setFormData(prev => ({
        ...prev,
        Tags: [...prev.Tags, { ...tagInput }]
      }));
      setTagInput({ en: '', ar: '' });
    }
  };

  const removeTag = (index) => {
    setFormData(prev => ({
      ...prev,
      Tags: prev.Tags.filter((_, i) => i !== index)
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      KeyFeatures: [...prev.KeyFeatures, { title: { en: '', ar: '' }, desc: { en: '', ar: '' } }]
    }));
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      KeyFeatures: prev.KeyFeatures.filter((_, i) => i !== index)
    }));
  };

  const updateFeature = (index, part, lang, value) => {
    const updated = [...formData.KeyFeatures];
    if (!updated[index]) updated[index] = { title: { en: '', ar: '' }, desc: { en: '', ar: '' } };
    if (!updated[index][part]) updated[index][part] = { en: '', ar: '' };
    updated[index][part][lang] = value;
    setFormData(prev => ({ ...prev, KeyFeatures: updated }));
  };

  const addProcess = () => {
    setFormData(prev => ({
      ...prev,
      Process: [...prev.Process, { title: { en: '', ar: '' }, content: { en: '', ar: '' } }]
    }));
  };

  const removeProcess = (index) => {
    setFormData(prev => ({
      ...prev,
      Process: prev.Process.filter((_, i) => i !== index)
    }));
  };

  const updateProcess = (index, part, lang, value) => {
    const updated = [...formData.Process];
    if (!updated[index]) updated[index] = { title: { en: '', ar: '' }, content: { en: '', ar: '' } };
    if (!updated[index][part]) updated[index][part] = { en: '', ar: '' };
    updated[index][part][lang] = value;
    setFormData(prev => ({ ...prev, Process: updated }));
  };

  const addGalleryImage = () => {
    if (galleryInput.trim()) {
      setFormData(prev => ({
        ...prev,
        Gallery: [...prev.Gallery, galleryInput.trim()]
      }));
      setGalleryInput('');
    }
  };

  const removeGalleryImage = (index) => {
    setFormData(prev => ({
      ...prev,
      Gallery: prev.Gallery.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
        const payload = {
            Title: formData.Title,
            Type: formData.Type, 
            Date: formData.Date,
            Duration: formData.Duration,
            Info: formData.Description, 
            Overview: formData.Overview,
            Role: formData.Role,
            Challenge: formData.Challenges,
            Solution: formData.Solution,
            Technologies: formData.Technologies,
            Achievements: formData.Achievements,
            Tags: formData.Tags, 
            KeyFeatures: formData.KeyFeatures, 
            Process: formData.Process, 
            HeroImage: formData.HeroImage,
            ServiceCategory: formData.ServiceCategory,
            Gallery: formData.Gallery 
        };

        let error;
        if (idToEdit) {
            const res = await supabase.from('ProjectDetails').update(payload).eq('id', idToEdit);
            error = res.error;
        } else {
            const res = await supabase.from('ProjectDetails').insert([payload]);
            error = res.error;
        }
        if (error) throw error;
        navigate('/PageList');
    } catch (error) {
        console.error(error);
        alert('Error saving project: ' + error.message);
    } finally {
        setSaving(false);
    }
  };

  if (loading) return <div className="loading-center">Loading Data...</div>;

  return (
    <>
      <Helmet>
        <title>{idToEdit ? 'Edit Project' : 'Create Project'}</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <div className="pc-container">
            <div className="pc-status-bar">
                {formData.HeroImage && <img src={formData.HeroImage} alt="Project Hero" className="pc-status-img" />}
                <div>
                    <span className="pc-status-label">Current Workspace: </span>
                    <span className="pc-status-value">{idToEdit ? (formData.Title.en || 'Untitled Project') : 'Creating New Project'}</span>
                </div>
            </div>

            <div className="pc-header-row">
              <div className="pc-title-group">
                <h1>{idToEdit ? 'Edit Project' : 'New Project'}</h1>
              </div>
              <Link to="/PageList"><button className="pc-back-btn">Back To Projects &gt;</button></Link> 
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Tags</div>
              <div className="pc-tags-container">
                {formData.Tags && formData.Tags.length > 0 ? (
                    formData.Tags.map((tag, idx) => (
                        <div key={idx} className="pc-tag pc-tag-dark">
                            {tag.en} / {tag.ar}
                            <div className="pc-close-badge" onClick={() => removeTag(idx)}>×</div>
                        </div>
                    ))
                ) : (
                    <p style={{color:'#666', fontSize:'14px'}}>No tags added yet.</p>
                )}
              </div>
              <div className="pc-grid-two pc-mt-20">
                 <div className="pc-form-group">
                    <label>Add Tag <span className="lang-badge">EN</span></label>
                    <input 
                        type="text" 
                        placeholder="New Tag" 
                        className="pc-input" 
                        dir="ltr"
                        value={tagInput.en}
                        onChange={(e) => setTagInput(prev => ({...prev, en: e.target.value}))}
                    />
                 </div>
                 <div className="pc-form-group">
                    <label>Add Tag <span className="lang-badge">AR</span></label>
                    <div style={{display:'flex', gap:'10px'}}>
                        <input 
                            type="text" 
                            placeholder="وسم جديد" 
                            className="pc-input" 
                            dir="rtl"
                            value={tagInput.ar}
                            onChange={(e) => setTagInput(prev => ({...prev, ar: e.target.value}))}
                        />
                        <button className="pc-add-btn" onClick={handleAddTag} type="button" style={{height:'46px', width:'46px'}}>+</button>
                    </div>
                 </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Header Info</div>
              <div className="pc-form">
                <div className="pc-grid-two">
                    <div className="pc-form-group">
                        <label>Project Title <span className="lang-badge">EN</span></label>
                        <input type="text" className="pc-input" dir="ltr" value={formData.Title?.en || ''} onChange={(e) => handleChange('Title', 'en', e.target.value)} />
                    </div>
                    <div className="pc-form-group">
                        <label>Project Title <span className="lang-badge">AR</span></label>
                        <input type="text" className="pc-input" dir="rtl" value={formData.Title?.ar || ''} onChange={(e) => handleChange('Title', 'ar', e.target.value)} />
                    </div>
                </div>

                <div className="pc-grid-two">
                    <div className="pc-form-group">
                        <label>Service Category <span className="lang-badge">EN</span></label>
                        <div className="pc-select-wrapper">
                            <select className="pc-input" dir="ltr" value={formData.ServiceCategory?.en || ''} onChange={(e) => handleChange('ServiceCategory', 'en', e.target.value)}>
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
                        <label>Service Category <span className="lang-badge">AR</span></label>
                        <div className="pc-select-wrapper">
                            <select className="pc-input" dir="rtl" value={formData.ServiceCategory?.ar || ''} onChange={(e) => handleChange('ServiceCategory', 'ar', e.target.value)}>
                                <option value="" disabled>اختر الخدمة</option>
                                <option value="تصميم تجربة وواجهة المستخدم">تصميم تجربة وواجهة المستخدم</option>
                                <option value="التصميم الجرافيكي">التصميم الجرافيكي</option>
                                <option value="صناعة المحتوى">صناعة المحتوى</option>
                                <option value="النمذجة ثلاثية الأبعاد">النمذجة ثلاثية الأبعاد</option>
                                <option value="موشن جرافيك">موشن جرافيك</option>
                                <option value="البرمجة">البرمجة</option>
                                <option value="التصوير الفوتوغرافي">التصوير الفوتوغرافي</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pc-form-group">
                    <label className="pc-desc-label">Description <span className="lang-badge">EN</span></label>
                    <div dir="ltr" className="pc-mb-20">
                        <RichTextEditor value={formData.Description?.en || ''} onChange={(val) => handleRichTextChange('Description', 'en', val)} />
                    </div>
                    <label className="pc-desc-label">Description <span className="lang-badge">AR</span></label>
                    <div dir="rtl">
                        <RichTextEditor value={formData.Description?.ar || ''} onChange={(val) => handleRichTextChange('Description', 'ar', val)} />
                    </div>
                </div>

                <div className="pc-grid-two pc-mt-20">
                     <div className="pc-form-group">
                        <label>Short Description <span className="lang-badge">EN</span></label>
                        <textarea className="pc-input pc-textarea-small" rows="4" dir="ltr" value={formData.ShortDescription?.en || ''} onChange={(e) => handleChange('ShortDescription', 'en', e.target.value)} />
                     </div>
                     <div className="pc-form-group">
                        <label>Short Description <span className="lang-badge">AR</span></label>
                        <textarea className="pc-input pc-textarea-small" rows="4" dir="rtl" value={formData.ShortDescription?.ar || ''} onChange={(e) => handleChange('ShortDescription', 'ar', e.target.value)} />
                     </div>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date <span className="lang-badge">EN</span></label>
                    <input type="text" className="pc-input" dir="ltr" value={formData.Date?.en || ''} onChange={(e) => handleChange('Date', 'en', e.target.value)} />
                  </div>
                  <div className="pc-form-group">
                    <label>Type <span className="lang-badge">EN</span></label>
                    <input type="text" className="pc-input" dir="ltr" value={formData.Type?.en || ''} onChange={(e) => handleChange('Type', 'en', e.target.value)} />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration <span className="lang-badge">EN</span></label>
                    <input type="text" className="pc-input" dir="ltr" value={formData.Duration?.en || ''} onChange={(e) => handleChange('Duration', 'en', e.target.value)} />
                  </div>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date <span className="lang-badge">AR</span></label>
                    <input type="text" className="pc-input" dir="rtl" value={formData.Date?.ar || ''} onChange={(e) => handleChange('Date', 'ar', e.target.value)} />
                  </div>
                  <div className="pc-form-group">
                    <label>Type <span className="lang-badge">AR</span></label>
                    <input type="text" className="pc-input" dir="rtl" value={formData.Type?.ar || ''} onChange={(e) => handleChange('Type', 'ar', e.target.value)} />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration <span className="lang-badge">AR</span></label>
                    <input type="text" className="pc-input" dir="rtl" value={formData.Duration?.ar || ''} onChange={(e) => handleChange('Duration', 'ar', e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Overview & Details</div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Project Overview <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="ltr" value={formData.Overview?.en || ''} onChange={(e) => handleChange('Overview', 'en', e.target.value)} />
                </div>
                <div className="pc-form-group">
                  <label>Project Overview <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="rtl" value={formData.Overview?.ar || ''} onChange={(e) => handleChange('Overview', 'ar', e.target.value)} />
                </div>
              </div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>My Role <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="ltr" value={formData.Role?.en || ''} onChange={(e) => handleChange('Role', 'en', e.target.value)} />
                </div>
                <div className="pc-form-group">
                  <label>My Role <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="rtl" value={formData.Role?.ar || ''} onChange={(e) => handleChange('Role', 'ar', e.target.value)} />
                </div>
              </div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Challenges <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="ltr" value={formData.Challenges?.en || ''} onChange={(e) => handleChange('Challenges', 'en', e.target.value)} />
                </div>
                <div className="pc-form-group">
                  <label>Challenges <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="rtl" value={formData.Challenges?.ar || ''} onChange={(e) => handleChange('Challenges', 'ar', e.target.value)} />
                </div>
              </div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Technologies <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="ltr" value={formData.Technologies?.en || ''} onChange={(e) => handleChange('Technologies', 'en', e.target.value)} />
                </div>
                <div className="pc-form-group">
                  <label>Technologies <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="rtl" value={formData.Technologies?.ar || ''} onChange={(e) => handleChange('Technologies', 'ar', e.target.value)} />
                </div>
              </div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Solution <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="ltr" value={formData.Solution?.en || ''} onChange={(e) => handleChange('Solution', 'en', e.target.value)} />
                </div>
                <div className="pc-form-group">
                  <label>Solution <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="rtl" value={formData.Solution?.ar || ''} onChange={(e) => handleChange('Solution', 'ar', e.target.value)} />
                </div>
              </div>
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Key Achievements <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="ltr" value={formData.Achievements?.en || ''} onChange={(e) => handleChange('Achievements', 'en', e.target.value)} />
                </div>
                <div className="pc-form-group">
                  <label>Key Achievements <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" dir="rtl" value={formData.Achievements?.ar || ''} onChange={(e) => handleChange('Achievements', 'ar', e.target.value)} />
                </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Features & Process</div>
              <div className="pc-subheader-row">
                <h3>Key Features</h3>
                <button className="pc-action-btn" onClick={addFeature} type="button">Add Feature +</button>
              </div>
              <div className="pc-grid-two">
                {formData.KeyFeatures.map((feature, idx) => (
                    <div key={idx} className="pc-feature-block">
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '8px'}}>
                            <label className="pc-sub-label" style={{marginBottom:0}}>Feature {idx+1} <span className="lang-badge">EN</span></label>
                            <button type="button" onClick={() => removeFeature(idx)} style={{color:'#ff6b6b', background:'none', border:'none', cursor:'pointer', fontSize:'0.9rem', fontWeight:'600'}}>Remove ×</button>
                        </div>
                        <input type="text" className="pc-input pc-mb-10" placeholder="Title EN" dir="ltr" value={feature.title?.en || ''} onChange={(e) => updateFeature(idx, 'title', 'en', e.target.value)} />
                        <textarea className="pc-input pc-textarea-small" placeholder="Description EN" dir="ltr" value={feature.desc?.en || ''} onChange={(e) => updateFeature(idx, 'desc', 'en', e.target.value)} />
                        <div className="pc-mt-20"></div>
                        <label className="pc-sub-label">Feature {idx+1} <span className="lang-badge">AR</span></label>
                        <input type="text" className="pc-input pc-mb-10" placeholder="العنوان بالعربية" dir="rtl" value={feature.title?.ar || ''} onChange={(e) => updateFeature(idx, 'title', 'ar', e.target.value)} />
                        <textarea className="pc-input pc-textarea-small" placeholder="الوصف بالعربية" dir="rtl" value={feature.desc?.ar || ''} onChange={(e) => updateFeature(idx, 'desc', 'ar', e.target.value)} />
                    </div>
                ))}
              </div>
              <div className="pc-subheader-row pc-mt-40">
                <h3>Design Process</h3>
                <button className="pc-action-btn" onClick={addProcess} type="button">Add Process +</button>
              </div>
              <div className="pc-process-container">
                {formData.Process.map((proc, idx) => (
                    <div key={idx} className="pc-process-item">
                        <div style={{display:'flex', justifyContent:'flex-end', marginBottom:'10px'}}>
                             <button type="button" onClick={() => removeProcess(idx)} style={{color:'#ff6b6b', background:'none', border:'none', cursor:'pointer', fontSize:'0.9rem', fontWeight:'600'}}>Remove Process ×</button>
                        </div>
                        <div className="pc-grid-two">
                            <div>
                                <label className="pc-sub-label">Process {idx+1} <span className="lang-badge">EN</span></label>
                                <input type="text" className="pc-input pc-mb-10" placeholder="Title EN" dir="ltr" value={proc.title?.en || ''} onChange={(e) => updateProcess(idx, 'title', 'en', e.target.value)} />
                                <div dir="ltr"><RichTextEditor value={proc.content?.en || ''} onChange={(val) => updateProcess(idx, 'content', 'en', val)} /></div>
                            </div>
                            <div>
                                <label className="pc-sub-label">Process {idx+1} <span className="lang-badge">AR</span></label>
                                <input type="text" className="pc-input pc-mb-10" placeholder="العنوان بالعربية" dir="rtl" value={proc.title?.ar || ''} onChange={(e) => updateProcess(idx, 'title', 'ar', e.target.value)} />
                                <div dir="rtl"><RichTextEditor value={proc.content?.ar || ''} onChange={(val) => updateProcess(idx, 'content', 'ar', val)} /></div>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Gallery & Hero</div>
              <div className="pc-form-group">
                  <label>Main Image URL (Hero)</label>
                  <input type="text" className="pc-input" placeholder="https://..." dir="ltr" value={formData.HeroImage} onChange={(e) => setFormData(prev => ({...prev, HeroImage: e.target.value}))} />
              </div>
              <div className="pc-subheader-row pc-mt-40"><h3>Gallery Images</h3></div>
              {formData.Gallery.map((imgUrl, idx) => (
                <div key={idx} className="pc-gallery-item">
                   <input type="text" className="pc-input" value={imgUrl} readOnly />
                   <button className="pc-remove-gallery-btn" onClick={() => removeGalleryImage(idx)}>Remove</button>
                </div>
              ))}
              <div className="pc-gallery-add-row">
                 <input type="text" className="pc-input" placeholder="Add new image URL..." value={galleryInput} onChange={(e) => setGalleryInput(e.target.value)} />
                 <button className="pc-action-btn" onClick={addGalleryImage} type="button">Add Image</button>
              </div>
            </div>

            <div className="seo-container">
              <h2 className="seo-title pc-pink-header">{t.home?.seoTitle}</h2>
              <div className="seo-row">
                <div className="seo-field-group">
                  <label>{t.home?.slugName} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.home?.enterSlug} dir="ltr" />
                </div>
                <div className="seo-field-group">
                  <label>{t.home?.slugName} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="رابط-الصفحة" dir="rtl" />
                </div>
              </div>
              <div className="seo-row">
                <div className="seo-field-group">
                  <label>{t.home?.pageTag} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.home?.enterTag} dir="ltr" />
                </div>
                <div className="seo-field-group">
                  <label>{t.home?.pageTag} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="وسم الصفحة" dir="rtl" />
                </div>
              </div>
              <div className="editor-section-wrapper">
                <div className="editor-group mb-4">
                  <label className="editor-label">Content Body <span className="lang-badge">EN</span></label>
                  <div dir="ltr"><RichTextEditor /></div>
                </div>
                <div className="editor-group mb-4">
                  <label className="editor-label">Content Body <span className="lang-badge">AR</span></label>
                  <div dir="rtl"><RichTextEditor /></div>
                </div>
              </div>
              <div className="seo-row">
                <div className="seo-field-group">
                  <label>{t.home?.metaDescription} <span className="lang-badge">EN</span></label>
                  <textarea placeholder={t.home?.enterMetaDesc} rows={6} dir="ltr"></textarea>
                </div>
                <div className="seo-field-group">
                  <label>{t.home?.metaDescription} <span className="lang-badge">AR</span></label>
                  <textarea placeholder="أدخل وصف الميتا بالعربية" rows={6} dir="rtl"></textarea>
                </div>
              </div>
            </div>

            <div className="pc-footer-actions">
                <Link to="/PageList" className="pc-link-no-style">
                    <button type="button" className="pc-btn-cancel">Cancel</button>
                </Link>
                <div className="pc-action-group">
                    <button type="button" className="pc-btn-save-draft" disabled={saving}>Save as Draft</button>
                    <button type="submit" className="pc-btn-submit" onClick={handleSubmit} disabled={saving}>
                        {saving ? 'Saving...' : 'Publish Project'}
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;