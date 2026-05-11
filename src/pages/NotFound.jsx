import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
        <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full inline-block mb-6">
          Page Not Found
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! You're lost.
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound