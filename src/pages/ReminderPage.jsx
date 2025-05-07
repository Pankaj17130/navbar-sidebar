import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, BellAlertIcon } from '@heroicons/react/24/solid';

const ReminderPage = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const limitedStockItems = [
    {
      id: 1,
      name: 'Specialty Coffee Blend',
      remaining: 12,
      totalStock: 100,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Limited Edition Mug',
      remaining: 5,
      totalStock: 50,
      image: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-red-100 border-b border-red-200">
            <h1 className="text-2xl font-bold text-red-700 flex items-center gap-2">
              <BellAlertIcon className="w-6 h-6" />
              Last Chance Offers
            </h1>
            <p className="mt-2 text-red-600">
              These items are selling fast - order now before they're gone!
            </p>
          </div>

          <div className="p-6">
            <div className="mb-6 flex items-center justify-between bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-yellow-700" />
                <span className="font-medium text-yellow-700">
                  Time remaining: {formatTime(timeLeft)}
                </span>
              </div>
              <span className="text-sm text-yellow-700">
                Offers end in:
              </span>
            </div>

            <div className="space-y-6">
              {limitedStockItems.map(item => (
                <div key={item.id} className="flex items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-600 rounded-full h-2"
                          style={{ width: `${(item.remaining / item.totalStock) * 100}%` }}
                        />
                      </div>
                      <p className="text-sm text-red-600 mt-1">
                        Only {item.remaining} left in stock!
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Reminder set! We\'ll notify you before it\'s gone.')}
                    className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                  >
                    <BellAlertIcon className="w-4 h-4" />
                    Remind Me
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderPage;