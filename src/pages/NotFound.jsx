import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4">
      <h1 className="text-6xl font-serif text-amber-900 mb-4">404</h1>
      <p className="text-xl text-amber-700 mb-8">
        Oops! The craftsmanship you're looking for isn't here...
      </p>
      <Link 
        to="/" 
        className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}