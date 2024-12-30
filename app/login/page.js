"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement login logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 mb-6 group"
          >
            <div className="relative">
              <div className="relative flex items-center justify-center w-12 h-12">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                {/* Logo Icon */}
                <svg
                  className="relative w-7 h-7 text-white transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V8.82843C20 8.03278 19.6839 7.26972 19.1213 6.70711L16.2929 3.87868C15.7303 3.31607 14.9672 3 14.1716 3H7Z"
                    className="fill-current"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 14.5V16.5H17V14.5H7ZM7 10.5V12.5H17V10.5H7ZM7 6.5V8.5H11V6.5H7Z"
                    fill="white"
                    fillOpacity="0.85"
                  />
                </svg>
                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-300 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-primary-300 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              </div>
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-2xl font-extrabold tracking-tight text-secondary-800">
                PDF<span className="text-primary-600">Devices</span>
              </span>
              <span className="text-[10px] text-secondary-400 tracking-widest font-semibold">
                DOCUMENT TOOLS
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-secondary-800 mb-2">
            Welcome back
          </h1>
          <p className="text-secondary-500">
            Sign in to continue to PDFDevices
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-secondary-200 rounded-xl hover:bg-secondary-50 hover:border-secondary-300 transition-all duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-secondary-700 font-medium">
                Continue with Google
              </span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1877F2] text-white rounded-xl hover:bg-[#1666D5] transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-medium">Continue with Facebook</span>
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-secondary-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary-700 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-secondary-600"
                >
                  Remember me
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center px-4 py-3.5 rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-secondary-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary-600 hover:text-primary-700"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
