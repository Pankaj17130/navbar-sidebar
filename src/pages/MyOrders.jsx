import { useState, useEffect } from 'react';
import { ArrowDownIcon, ArrowUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Mock data - replace with actual API call
  const mockOrders = [
    {
      id: '12345',
      date: '2024-03-15',
      items: 3,
      total: 149.99,
      status: 'Delivered',
    },
    {
      id: '12346',
      date: '2024-03-10',
      items: 5,
      total: 299.95,
      status: 'Processing',
    },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load orders. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (error) {
    return (
      <div className="min-h-screen p-6 bg-gray-50">
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Order History</h1>
            <p className="mt-1 text-sm text-gray-500">
              View the status of recent orders and manage returns.
            </p>
          </div>

          {isLoading ? (
            <div className="p-6 animate-pulse space-y-4">
              {[...Array(itemsPerPage)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded-md"></div>
              ))}
            </div>
          ) : orders.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              You haven't placed any orders yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Order ID', 'Date', 'Items', 'Total', 'Status'].map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
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
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.items}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 flex items-center">
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
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;