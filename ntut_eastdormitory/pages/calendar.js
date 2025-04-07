import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  
  // 當前月份的第一天
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  // 當前月份的最後一天
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  // 第一天是星期幾 (0-6)
  const firstDayOfWeek = firstDayOfMonth.getDay();
  
  // 月份名稱
  const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  
  // 星期名稱
  const weekdayNames = ["日", "一", "二", "三", "四", "五", "六"];
  
  // 從公告獲取活動
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error('獲取活動失敗:', error);
      }
    }
    
    fetchEvents();
  }, []);
  
  // 切換到上個月
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };
  
  // 切換到下個月
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };
  
  // 切換到今天
  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };
  
  // 檢查一個日期是否有事件
  const hasEvents = (date) => {
    return events.some(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.getDate() && 
             eventDate.getMonth() === date.getMonth() && 
             eventDate.getFullYear() === date.getFullYear();
    });
  };
  
  // 獲取指定日期的事件
  const getEventsForDate = (date) => {
    if (!date) return [];
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.getDate() && 
             eventDate.getMonth() === date.getMonth() && 
             eventDate.getFullYear() === date.getFullYear();
    });
  };
  
  // 渲染日曆網格
  const renderCalendarGrid = () => {
    const totalDays = lastDayOfMonth.getDate();
    const today = new Date();
    const days = [];
    
    // 添加星期幾標題
    weekdayNames.forEach(name => {
      days.push(
        <div key={`header-${name}`} className="calendar-day-header">
          {name}
        </div>
      );
    });
    
    // 添加本月前的空白日期
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day opacity-0"></div>);
    }
    
    // 添加本月的日期
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isToday = date.getDate() === today.getDate() && 
                     date.getMonth() === today.getMonth() && 
                     date.getFullYear() === today.getFullYear();
      
      const isSelected = selectedDate && 
                        date.getDate() === selectedDate.getDate() && 
                        date.getMonth() === selectedDate.getMonth() && 
                        date.getFullYear() === selectedDate.getFullYear();
      
      const hasEventForDay = hasEvents(date);
      
      days.push(
        <div 
          key={`day-${day}`} 
          className={`calendar-day ${isToday ? 'calendar-day-today' : ''} 
                     ${hasEventForDay ? 'calendar-day-event' : ''} 
                     ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {day}
          {hasEventForDay && <div className="event-dot"></div>}
        </div>
      );
    }
    
    return days;
  };
  
  // 獲取選定日期的所有事件
  const selectedDateEvents = getEventsForDate(selectedDate);
  
  // 獲取本月的所有事件
  const currentMonthEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentDate.getMonth() && 
           eventDate.getFullYear() === currentDate.getFullYear();
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">行事曆</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 行事曆部分 */}
          <div className="md:col-span-2">
            <div className="calendar-container">
              <div className="calendar-header">
                <button 
                  onClick={goToPreviousMonth}
                  className="btn btn-secondary"
                >
                  上個月
                </button>
                <h2 className="text-xl font-semibold">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button 
                  onClick={goToNextMonth}
                  className="btn btn-secondary"
                >
                  下個月
                </button>
              </div>
              
              <button 
                onClick={goToToday}
                className="btn btn-primary mb-4 w-full"
              >
                今天
              </button>
              
              <div className="calendar-grid">
                {renderCalendarGrid()}
              </div>
            </div>
          </div>
          
          {/* 事件列表部分 */}
          <div className="md:col-span-1">
            <div className="card h-full">
              <h3 className="text-xl font-semibold mb-4">
                {selectedDate 
                  ? `${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日的活動` 
                  : `${currentDate.getMonth() + 1}月的活動`}
              </h3>
              
              <div className="event-list">
                {(selectedDate ? selectedDateEvents : currentMonthEvents).length > 0 ? (
                  (selectedDate ? selectedDateEvents : currentMonthEvents).map(event => (
                    <div key={event.id} className="event-item">
                      <div className="event-date">
                        <div className="event-date-day">{new Date(event.date).getDate()}</div>
                        <div className="event-date-month">{monthNames[new Date(event.date).getMonth()].substring(0, 3)}</div>
                      </div>
                      <div className="event-content">
                        <h4 className="event-title">{event.title}</h4>
                        <div className="event-time">
                          {`${new Date(event.date).getHours()}:${String(new Date(event.date).getMinutes()).padStart(2, '0')}`}
                        </div>
                        <p className="event-description">{event.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">沒有活動</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 