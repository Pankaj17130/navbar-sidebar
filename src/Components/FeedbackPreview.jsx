// components/FeedbackPreview.jsx
import { StarIcon } from '@heroicons/react/24/solid';

const FeedbackPreview = () => {
  const previewFeedback = [
    {
      id: 1,
      rating: 5,
      comment: "Best purchase I've made this year!",
      author: "Alex P.",
      date: "2024-03-15",
      image: "public/IMG-20250427-WA0060.jpg" // Add image paths
    },
    {
      id: 2,
      rating: 4,
      comment: "Great quality and fast shipping",
      author: "Maria G.",
      date: "2024-03-14",
      image: "public/IMG-20250427-WA0063.jpg"
    },
    {
      id: 3,
      rating: 4,
      comment: "Excellent customer service and product quality",
      author: "John D.",
      date: "2024-03-13",
      image: "public/IMG-20250427-WA0062.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {previewFeedback.map((feedback) => (
          <div 
            key={feedback.id} 
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Customer Image and Rating */}
            <div className="flex items-start mb-4">
              <img 
                src={feedback.image} 
                alt={feedback.author} 
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-sm">{feedback.date}</span>
                </div>
                <p className="text-gray-800 font-medium mt-1">{feedback.author}</p>
              </div>
            </div>

            {/* Comment */}
            <p className="text-gray-600 italic">
              "{feedback.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPreview;