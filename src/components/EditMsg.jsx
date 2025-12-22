import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../SupaBase';

const EditMsg = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState({ title: '', email: '', msg: '' });
  const navigate = useNavigate();

  useEffect(() => {
    async function callAPI(id) {
      const res = await supabase
        .from("contactUsMsg")
        .select("*")
        .eq("id", id)
        .single();
      
      if (res.data) setData(res.data);
      setLoading(false);
    }
    callAPI(id);
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("contactUsMsg")
      .update({
        title: data.title,
        email: data.email,
        msg: data.msg
      })
      .eq('id', id);

    if (!error) navigate('/DashboardMsg');
  };

  if (loading) return <p>loading...</p>;

  return (
    <form onSubmit={handleUpdate}>
      <label>ID</label>
      <input value={id} disabled />
      
      <label>Title</label>
      <input 
        value={data.title} 
        onChange={(e) => setData({...data, title: e.target.value})} 
      />

      <label>Email</label>
      <input 
        value={data.email} 
        onChange={(e) => setData({...data, email: e.target.value})} 
      />

      <label>Message</label>
      <textarea 
        value={data.msg} 
        onChange={(e) => setData({...data, msg: e.target.value})} 
      />

      <button type="submit">Update Message</button>
    </form>
  );
};

export default EditMsg;