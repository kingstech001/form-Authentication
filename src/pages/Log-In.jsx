import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Access the environment variables
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    const { email, password } = formData;
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    if (!(email && password)) {
      alert("Invalid email or password");
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/api/users/login`, formData);

      if (response.data.length > 0 && response.data[0]._id) {
        const userId = response.data[0]._id;
        localStorage.setItem("userId", userId);
        alert("Successful!");
        navigate("/home");
        return;
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm border-y-2 border-y-orange-500"
      >
        <div className="text-2xl font-bold mb-4 flex justify-between">
          <h2>Sign In</h2>
          <h1>logo</h1>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Login to your account to access our Service.
        </p>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Login
        </button>
        <div className="my-4 flex justify-between">
          <a
            href="/forgetaccount"
            className="text-orange-500 hover:text-orange-600 items-end"
          >
            Forget Account?
          </a>
          <a href="/" className="text-orange-500 hover:text-orange-600 items-end">
            Create Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
