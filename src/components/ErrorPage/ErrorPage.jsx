import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className=" mx-auto max-w-full align-middle text-center h-screen bg-[#759bad]">
      <div className="items-center justify-center mx-auto">
        <h1 className="text-8xl font-bold pb-8">Oops!</h1>
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="bg-teal-600 px-4 py-3 rounded-xl text-xl font-bold text-white mt-3">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
