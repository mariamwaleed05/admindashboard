import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import RichTextEditor from '../components/RichTextEditor';
import './Messages.css';
import { supabase } from '../SupaBase';

const Icons = {
  Eye: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
  ),
  Lightning: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  ),
  Trash: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  Send: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  )
};

const Messages = () => {
  const [isComposeVisible, setIsComposeVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [newMsg, setNewMsg] = useState({ FullName: '', Email: '', Subject: '', Message: '' });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('ContactForm')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete this message?")) return;
    const { error } = await supabase.from('ContactForm').delete().eq('id', id);
    if (!error) setMessages(messages.filter(m => m.id !== id));
  };

  const handleCreate = async () => {
    const { error } = await supabase.from('ContactForm').insert([newMsg]);
    if (!error) {
      fetchMessages();
      setIsComposeVisible(false);
      setNewMsg({ FullName: '', Email: '', Subject: '', Message: '' });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredMessages = messages.filter(msg => 
    (msg.FullName && msg.FullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (msg.Email && msg.Email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (msg.Subject && msg.Subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="app-container">
      <Helmet><title>Messages</title></Helmet>
      <SideBar />
      <div className="main-content">
        <div className="top-nav-container"><NavButtons /></div>
        <div className="dashboard-wrapper">
          <header className="main-header">
            <h1 className="page-title">Messages Inbox</h1>
            <p className="page-subtitle">Manage contact form submissions</p>
          </header>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon-box red-icon"><Icons.Eye /></div>
              <div className="stat-content"><h3>Total</h3><p>{messages.length}</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-box red-icon"><Icons.User /></div>
              <div className="stat-content"><h3>Unread</h3><p>{messages.length}</p></div>
            </div>
          </div>

          <div className="inbox-panel">
            <div className="inbox-header">
              <h2>Inbox</h2>
              <button className="btn-compose" onClick={() => setIsComposeVisible(true)}>
                Compose <span className="icon-spacer"><Icons.Plus /></span>
              </button>
            </div>

            <div className="search-bar">
              <span className="search-icon"><Icons.Search /></span>
              <input 
                type="text" className="search-input" placeholder="Search..." 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="table-responsive">
              <table className="inbox-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Sender</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="6" style={{textAlign: 'center'}}>Loading...</td></tr>
                  ) : filteredMessages.map((msg) => (
                    <tr key={msg.id} className="clickable-row">
                      <td><span className="badge badge-new">New</span></td>
                      <td><b>{msg.FullName || 'Unknown'}</b></td>
                      <td className="text-muted">{msg.Email}</td>
                      <td>{msg.Subject}</td>
                      <td>{formatDate(msg.created_at)}</td>
                      <td className="text-right">
                        <button onClick={() => handleDelete(msg.id)} className="actionn-btn" style={{color: 'red', border:'none', background:'none', cursor:'pointer'}}>
                          <Icons.Trash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {isComposeVisible && (
            <div className="compose-panel">
              <div className="compose-header">
                <h2>New Message</h2>
                <button className="close-btn" onClick={() => setIsComposeVisible(false)}><Icons.Close /></button>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-input" value={newMsg.FullName} onChange={(e) => setNewMsg({...newMsg, FullName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-input" value={newMsg.Email} onChange={(e) => setNewMsg({...newMsg, Email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-input" value={newMsg.Subject} onChange={(e) => setNewMsg({...newMsg, Subject: e.target.value})} />
              </div>
              <div className="form-actions">
                <button className="btn-send" onClick={handleCreate}>
                  Save to DB <span className="icon-spacer"><Icons.Send /></span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;