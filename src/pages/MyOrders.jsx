import { useState, useEffect } from 'react';
import { ArrowDownIcon, ArrowUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  // Updated mock data matching previous data structure
  const mockOrders = [
    {
      id: 'WO-12345',
      date: '2024-03-15',
      items: [
        { name: 'Handcarved Wooden Jewelry Box', quantity: 1, price: 2999 },
        { name: 'Teak Wood Serving Tray', quantity: 2, price: 1499 }
      ],
      status: 'delivered',
      paymentMethod: 'razorpay'
    },
    {
      id: 'WO-12346',
      date: '2024-03-10',
      items: [
        { name: 'Personalized Wooden Clock', quantity: 1, price: 4599 }
      ],
      status: 'processing',
      paymentMethod: 'cod'
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders.map(order => ({
          ...order,
          total: order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          itemsCount: order.items.reduce((count, item) => count + item.quantity, 0)
        })));
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load orders. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-amber-100 text-amber-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  if (error) {
    return (
      <div className="min-h-screen p-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
            {error}
            <button
              onClick={() => window.location.reload()}
              className="ml-4 px-3 py-1 text-sm font-medium text-red-700 hover:text-red-900"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow overflow-hidden rounded-xl border border-amber-100">
          <div className="px-6 py-5 sm:px-8 border-b border-amber-200 bg-amber-50">
            <h1 className="text-2xl font-serif font-bold text-amber-900">Order History</h1>
            <p className="mt-1 text-sm text-amber-700">
              View your woodcraft order status and details
            </p>
          </div>

          {isLoading ? (
            <div className="p-6 animate-pulse space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-20 bg-amber-100 rounded-lg"></div>
              ))}
            </div>
          ) : orders.length === 0 ? (
            <div className="p-6 text-center text-amber-600">
              <div className="inline-block mb-4">
                <img 
                  src="/assets/empty-orders.png" 
                  className="w-48 h-48 object-contain"
                  alt="No orders"
                />
              </div>
              <p className="text-lg">You haven't placed any orders yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-amber-200">
                <thead className="bg-amber-50">
                  <tr>
                    {['Order ID', 'Date', 'Items', 'Total', 'Status'].map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-amber-900 uppercase cursor-pointer hover:bg-amber-100"
                        onClick={() => handleSort(header.toLowerCase().replace(' ', ''))}
                      >
                        <div className="flex items-center">
                          {header}
                          {sortConfig.key === header.toLowerCase().replace(' ', '') && (
                            <span className="ml-1">
                              {sortConfig.direction === 'asc' ? (
                                <ArrowUpIcon className="h-4 w-4" />
                              ) : (
                                <ArrowDownIcon className="h-4 w-4" />
                              )}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-amber-200">
                  {sortedOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-amber-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-800">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600">
                        {formatDate(order.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600">
                        {order.itemsCount} items
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800 font-semibold">
                        ₹{order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-amber-700 hover:text-amber-900 flex items-center">
                          Details <ChevronRightIcon className="ml-1 h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-amber-600">
                Showing 1 to {orders.length} of {orders.length} results
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;