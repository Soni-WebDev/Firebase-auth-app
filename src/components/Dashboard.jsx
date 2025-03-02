import {
  FaSearch,
  FaFilter,
  FaHome,
  FaBell,
  FaStore,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import React from "react";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Logo</div>
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none ml-2"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaFilter className="text-gray-500 cursor-pointer" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Become a Seller
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
          <div>
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <FaHome />
                <span>Home</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <FaBell />
                <span>Notifications</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <FaStore />
                <span>Shop</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <FaCog />
                <span>Settings</span>
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-500"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Card 1</h3>
              <p className="text-gray-600">This is the content of card 1.</p>
              <img src={img1} />
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Card 2</h3>
              <p className="text-gray-600">This is the content of card 2.</p>
              <img src={img2} />
            </div>
          </div>
        </main>

        {/* Right Sidebar - Artists */}
        <aside className="w-64 bg-white shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Artists</h2>
          <div className="space-y-4">
            {/* Artist Card 1 */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">Artist 1</h3>
              <p className="text-sm text-gray-600">Description of artist 1.</p>
              <img src={img6} />
            </div>
            {/* Artist Card 2 */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">Artist 2</h3>
              <p className="text-sm text-gray-600">Description of artist 2.</p>
              <img src={img5} />
            </div>
            {/* Artist Card 3 */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">Artist 3</h3>
              <p className="text-sm text-gray-600">Description of artist 3.</p>
              <img src={img4} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
