import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", formData);
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userName", user.name); // Save user name

        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error);
      alert(error.response?.data?.error || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-300 px-6 py-8 text-center text-white rounded-t-2xl">
          <h2 className="text-4xl font-bold">Welcome Back!</h2>
          <p className="mt-2 text-sm text-green-100">Log in to access your account</p>
        </div>

        {/* Form Container */}
        <div className="px-8 py-10">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-300"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-green-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:opacity-90 transition duration-300"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Signup Redirect */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-teal-600 font-semibold hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
