import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../SupaBase';

const CreateMsg = () => {
  const [formData, setFormData] = useState({ title: '', email: '', msg: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("contactUsMsg")
      .insert([formData]);

    if (!error) navigate('/DashboardMsg');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Title"
        onChange={(e) => setFormData({...formData, title: e.target.value})} 
      />
      <input 
        placeholder="Email"
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />
      <textarea 
        placeholder="Message"
        onChange={(e) => setFormData({...formData, msg: e.target.value})} 
      />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default CreateMsg;