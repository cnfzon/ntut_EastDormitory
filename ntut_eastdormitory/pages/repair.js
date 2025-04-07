import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Repair() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">宿舍修繕系統</h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-700">
                歡迎使用宿舍修繕系統。請填寫以下表單報告需要修繕的問題。
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">房間號碼</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例如: A101"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">聯絡電話</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入您的聯絡電話"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">修繕類別</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">請選擇修繕類別</option>
                    <option value="plumbing">水電問題</option>
                    <option value="furniture">傢俱問題</option>
                    <option value="appliance">電器問題</option>
                    <option value="network">網路問題</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">問題描述</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請詳細描述您遇到的問題"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">上傳照片 (選填)</label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  提交修繕申請
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">修繕流程</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>填寫並提交修繕申請表單</li>
              <li>宿舍管理員會在24小時內確認您的申請</li>
              <li>根據修繕類別，相關人員會與您聯繫確認時間</li>
              <li>修繕完成後，請確認問題是否已解決</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
} 