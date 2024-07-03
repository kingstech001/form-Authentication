// HomePage.js (or HomePage.jsx)
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import Users from "../components/users";

const HomePage = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: users, loading, error } = useFetch(`${apiUrl}/api/users`);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold m-4">Home Page</h2>
      </div>

      {loading && (
        <div className="text-center">
          <p>Wait while we arrange things for you !!!</p>
          <p>Loading...</p>
        </div>
      )}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && users && <Users data={users} />}
    </div>
  );
};

export default HomePage;
