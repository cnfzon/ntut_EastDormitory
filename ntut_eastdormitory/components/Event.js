import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Event() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const router = useRouter();

  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    maxParticipants: '',
    image: null,
  });

  const [signupInfo, setSignupInfo] = useState({
    studentId: '',
    name: '',
    roomNumber: '',
  });

  useEffect(() => {
    fetchEvents();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('獲取活動失敗:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewEvent({ ...newEvent, image: file });
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
      formData.append('title', newEvent.title);
      formData.append('description', newEvent.description);
      formData.append('startDate', newEvent.startDate);
      formData.append('endDate', newEvent.endDate);
      formData.append('location', newEvent.location);
      formData.append('maxParticipants', newEvent.maxParticipants);
      if (newEvent.image) {
        formData.append('image', newEvent.image);
      }

      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        setShowForm(false);
        setNewEvent({
          title: '',
          description: '',
          startDate: '',
          endDate: '',
          location: '',
          maxParticipants: '',
          image: null,
        });
        setPreviewImage(null);
        fetchEvents();
      } else {
        const data = await response.json();
        alert(data.message || '創建活動失敗');
      }
    } catch (error) {
      console.error('創建活動失敗:', error);
      alert('創建活動失敗');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/events', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          eventId: selectedEvent._id,
          ...signupInfo
        })
      });

      if (response.ok) {
        setShowSignupForm(false);
        setSignupInfo({
          studentId: '',
          name: '',
          roomNumber: '',
        });
        fetchEvents();
        alert('報名成功！');
      } else {
        const data = await response.json();
        alert(data.message || '報名失敗');
      }
    } catch (error) {
      console.error('報名失敗:', error);
      alert('報名失敗');
    }
  };

  const handleLogin = () => {
    router.push('/admin/login');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">宿舍活動</h2>
        {isLoggedIn ? (
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            {showForm ? '取消' : '發布活動'}
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
              活動標題
            </label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="input"
              required
              placeholder="輸入活動標題"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              活動描述
            </label>
            <textarea
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="input"
              rows="4"
              required
              placeholder="輸入活動描述"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                開始時間
              </label>
              <input
                type="datetime-local"
                value={newEvent.startDate}
                onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
                className="input"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                結束時間
              </label>
              <input
                type="datetime-local"
                value={newEvent.endDate}
                onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
                className="input"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                活動地點
              </label>
              <input
                type="text"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                className="input"
                required
                placeholder="輸入活動地點"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                最大參與人數
              </label>
              <input
                type="number"
                value={newEvent.maxParticipants}
                onChange={(e) => setNewEvent({ ...newEvent, maxParticipants: e.target.value })}
                className="input"
                required
                min="1"
                placeholder="輸入最大參與人數"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              活動圖片
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="card hover:shadow-xl transition-all duration-300">
            {event.imageUrl && (
              <div className="relative h-48 mb-4">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="mr-2">📅</span>
                  <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👥</span>
                  <span>{event.currentParticipants}/{event.maxParticipants} 人</span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowSignupForm(true);
                  }}
                  className="btn btn-primary w-full"
                  disabled={event.currentParticipants >= event.maxParticipants}
                >
                  {event.currentParticipants >= event.maxParticipants
                    ? '已額滿'
                    : '立即報名'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showSignupForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">報名活動</h3>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  學號
                </label>
                <input
                  type="text"
                  value={signupInfo.studentId}
                  onChange={(e) => setSignupInfo({ ...signupInfo, studentId: e.target.value })}
                  className="input"
                  required
                  placeholder="輸入學號"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  value={signupInfo.name}
                  onChange={(e) => setSignupInfo({ ...signupInfo, name: e.target.value })}
                  className="input"
                  required
                  placeholder="輸入姓名"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  房號
                </label>
                <input
                  type="text"
                  value={signupInfo.roomNumber}
                  onChange={(e) => setSignupInfo({ ...signupInfo, roomNumber: e.target.value })}
                  className="input"
                  required
                  placeholder="輸入房號"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowSignupForm(false)}
                  className="btn btn-secondary"
                >
                  取消
                </button>
                <button type="submit" className="btn btn-primary">
                  確認報名
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 