import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl mb-2">
          {error.statusText || error.message}
        </p>
        <p className="text-gray-500">
          Error code: {error.status || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;