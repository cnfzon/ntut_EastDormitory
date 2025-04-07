import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    author: '宿舍管理員',
    image: null
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAnnouncement({ ...newAnnouncement, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', newAnnouncement.title);
      formData.append('content', newAnnouncement.content);
      formData.append('author', newAnnouncement.author);
      if (newAnnouncement.image) {
        formData.append('image', newAnnouncement.image);
      }

      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        setShowForm(false);
        setNewAnnouncement({ title: '', content: '', author: '宿舍管理員', image: null });
        setPreviewImage(null);
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
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">最新公告</h2>
        {isLoggedIn ? (
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            {showForm ? '取消' : '發布公告'}
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="btn btn-secondary"
          >
            管理員登入
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              標題
            </label>
            <input
              type="text"
              value={newAnnouncement.title}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
              className="input"
              required
              placeholder="輸入公告標題"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              內容
            </label>
            <textarea
              value={newAnnouncement.content}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
              className="input"
              rows="4"
              required
              placeholder="輸入公告內容"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              圖片
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="input"
            />
            {previewImage && (
              <div className="mt-2">
                <img
                  src={previewImage}
                  alt="預覽"
                  className="max-w-xs rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            發布
          </button>
        </form>
      )}

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div key={announcement._id} className="card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {announcement.title}
              </h3>
              <span className="text-sm text-gray-500">
                {new Date(announcement.date).toLocaleDateString()}
              </span>
            </div>
            {announcement.imageUrl && (
              <div className="mb-4">
                <img
                  src={announcement.imageUrl}
                  alt={announcement.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            <p className="text-gray-600 mb-4">
              {announcement.content}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2">發布者：</span>
              <span className="font-medium">{announcement.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 