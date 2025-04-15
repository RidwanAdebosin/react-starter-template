import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="mt-2 text-lg">{error.statusText || "Unknown Error"}</p>
        <p className="mt-1 text-gray-500">{error.data}</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-lg text-red-500">
        {(error as Error).message || "Unknown error occurred"}
      </p>
    </div>
  );
};

export default Error;
