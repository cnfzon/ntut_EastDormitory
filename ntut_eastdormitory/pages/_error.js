import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {statusCode ? `發生錯誤 ${statusCode}` : '發生錯誤'}
        </h1>
        <p className="text-gray-600 mb-8">
          {statusCode === 404
            ? '找不到您要的頁面'
            : '抱歉，發生了一些錯誤'}
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 