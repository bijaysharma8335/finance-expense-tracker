import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4 text-center">
                    Register
                </h2>
                <p className="text-purple-600 mb-6 text-center">
                    Create a new account to get started.
                </p>

                <form className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label
                            className="block text-sm md:text-base font-medium text-gray-700"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label
                            className="block text-sm md:text-base font-medium text-gray-700"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            className="block text-sm md:text-base font-medium text-gray-700"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                        <label
                            className="block text-sm md:text-base font-medium text-gray-700"
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm md:text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Register
                    </button>

                    {/* Login Link */}
                    <div className="text-center mt-4">
                        <span className="text-sm md:text-base text-gray-600">
                            Already have an account?
                            <Link to="/" className="text-purple-600 hover:underline ml-1">
                                Login
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
