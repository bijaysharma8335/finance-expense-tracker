import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../Redux/Reducers/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const [errors, setErrors] = useState("");

    const onChangeHandler = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = formData;
        if (!email || !password) {
            setErrors("Please enter both email and password.");
            return;
        }
        setErrors(""); // Clear errors before request

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }

            const data = await response.json();
            // console.log("Login successful:", data);

            // Store token securely (Consider HttpOnly cookies for better security)
            localStorage.setItem("token", data.token);
            localStorage.setItem(
                "user",
                JSON.stringify({ email, name: data.name, role: data.role })
            );

            dispatch(setUser({ email, name: data.name, role: data.role }));

            navigate("/"); // Redirect after successful login

            // Clear form data on successful login
            setFormData({ email: "", password: "" });
        } catch (error) {
            console.error("Login failed:", error.message);
            setErrors(error.message);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4 text-center">
                    Login
                </h2>
                <p className="text-purple-600 mb-6 text-center">
                    Enter your credentials to access your account.
                </p>

                <form className="space-y-6" onSubmit={handleLogin}>
                    {errors && <p style={{ color: "red" }}>{errors}</p>}
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
                            name="email"
                            value={formData.email}
                            onChange={onChangeHandler}
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
                            name="password"
                            value={formData.password}
                            onChange={onChangeHandler}
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Sign In
                    </button>

                    {/* Register Link */}
                    <div className="text-center mt-4">
                        <span className="text-sm md:text-base text-gray-600">
                            Don't have an account?
                            <Link to="/register" className="text-purple-600 hover:underline ml-1">
                                Register
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
