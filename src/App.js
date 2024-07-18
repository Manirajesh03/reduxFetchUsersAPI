import React from "react";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
