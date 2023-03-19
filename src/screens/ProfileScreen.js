import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    navigate("/");
  }

  function deleteAccount() {
    axios
      .delete("https://shopping-app-backend-umber.vercel.app/api/users/me", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => logout())
      .then(() => console.log("Logout success"))
      .catch((error) => console.log(error));
    navigate("/");
  }

  return localStorage.getItem("loggedIn") ? (
    <div className="mx-auto flex flex-row w-1/3 justify-between mt-20">
      <button
        onClick={logout}
        className="h-12 w-2/5 rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black"
      >
        Logout
      </button>
      <button
        onClick={deleteAccount}
        className="h-12 w-2/5 rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black"
      >
        Delete Account
      </button>
    </div>
  ) : (
    <div className="mx-auto flex flex-row w-1/3 justify-between mt-20">
      <h1>Login to view profile controls</h1>
    </div>
  );
}

export default ProfileScreen;
