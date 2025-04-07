import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    author: '宿舍管理員'
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchAnnouncements();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements');
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('獲取公告失敗:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newAnnouncement)
      });

      if (response.ok) {
        setShowForm(false);
        setNewAnnouncement({ title: '', content: '', author: '宿舍管理員' });
        fetchAnnouncements();
      } else {
        const data = await response.json();
        alert(data.message || '發布公告失敗');
      }
    } catch (error) {
      console.error('發布公告失敗:', error);
      alert('發布公告失敗');
    }
  };

  const handleLogin = () => {
    router.push('/admin/login');
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">最新公告</h2>
        {isLoggedIn ? (
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showForm ? '取消' : '發布公告'}
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            管理員登入
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">標題</label>
            <input
              type="text"
              value={newAnnouncement.title}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">內容</label>
            <textarea
              value={newAnnouncement.content}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            發布
          </button>
        </form>
      )}

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement._id} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{announcement.title}</h3>
            <p className="text-gray-600 mt-2">{announcement.content}</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>{new Date(announcement.date).toLocaleDateString()}</span>
              <span className="ml-2">發布者：{announcement.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 