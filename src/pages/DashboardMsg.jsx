import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../SupaBase';

const DashboardMsg = () => {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contactUsMsg")
      .select("*")
      .order('id', { ascending: false });
    if (!error) setMsg(data);
  };

  const deleteRow = async (id) => {
    const { error } = await supabase
      .from("contactUsMsg")
      .delete()
      .eq('id', id);
    
    if (!error) {
      setMsg(msg.filter((m) => m.id !== id));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Email</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {msg.map((m) => {
          let pathLink = "/msg-details/" + m.id;
          return (
            <tr key={m.id}>
              <td><Link to={pathLink}>{m.id}</Link></td>
              <td>{m.title}</td>
              <td>{m.email}</td>
              <td>{m.msg}</td>
              <td>
                <button onClick={() => deleteRow(m.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DashboardMsg;