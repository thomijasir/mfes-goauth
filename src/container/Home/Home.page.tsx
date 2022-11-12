import React, { FC, useState, useEffect, useContext } from 'react';
import GoogleBtnComp from '../../components/GoogleBtn/GoogleBtn.comp';
import { AppContext } from '../../store/AppProvider';
import { getParamURL } from '../../utils/Helper';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    // ?appid=gobike&redirect=100
    console.log(getParamURL('appid'), getParamURL('redirect'));

    if (!getParamURL('appid') && !getParamURL('redirect')) {
      context.setError(
        true,
        'SSO Login Failure',
        "The link doesn't work please use manual login, and make sure your internet connection stable.",
      );
    }
  }, []);

  const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [getEmail, getPassword] = event.target as unknown as [
      { value: string },
      { value: string },
    ];
    console.log('EMAIL: ', getEmail.value);
    console.log('PASSWORD: ', getPassword.value);
    if (getEmail.value) {
      context.setLoading(true);
      setTimeout(() => {
        context.setLoading(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleFormOnSubmit}>
          <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white">
            Sign in
          </h1>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              name="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              name="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign in
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              or sign in with
            </p>

            <GoogleBtnComp title="Sign with Google account" />

            <div className="mt-6 text-center ">
              <a
                href="https://www.google.com"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Don’t have an account yet? Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
