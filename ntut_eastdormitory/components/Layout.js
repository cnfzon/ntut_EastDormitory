import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout({ children, title = "東宿舍" }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title} - 國立臺北科技大學宿舍</title>
        <meta name="description" content="國立臺北科技大學東宿舍官方網站" />
      </Head>
      <Navbar />
      <main className="page-container">
        {children}
      </main>
    </div>
  );
} 