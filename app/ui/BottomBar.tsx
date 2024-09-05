"use client";

import Image from "next/image";
import { useUser } from "../context/UserContext";
import { useState } from "react";

export default function BottomBar() {
  const user = useUser();
  const [activeMenu, setActiveMenu] = useState<string>("home");
  //   console.log("user", user);
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="fixed bottom-4 left-4 right-4 flex justify-between items-center bg-transparent z-50">
      <div className="flex justify-around items-center w-full bg-white py-2 px-6 rounded-full shadow-lg">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleMenuClick("rewards")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              activeMenu === "rewards" ? "text-blue-600" : "text-gray-400"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927C9.34 1.902 10.66 1.902 10.951 2.927L12.3 7.226a1 1 0 00.95.691h4.4c1.05 0 1.491 1.346.72 1.975l-3.554 2.846a1 1 0 00-.36 1.118l1.184 4.266c.26.935-.794 1.71-1.614 1.116L10 15.691l-3.626 2.557c-.82.593-1.875-.181-1.614-1.116l1.184-4.266a1 1 0 00-.36-1.118L2.03 9.892c-.77-.63-.33-1.975.72-1.975h4.4a1 1 0 00.95-.691l1.349-4.299z" />
          </svg>
          <span
            className={`text-sm mt-1 ${
              activeMenu === "rewards" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            รางวัล
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleMenuClick("home")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              activeMenu === "home" ? "text-blue-600" : "text-gray-400"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 1.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L3 10.414V18a1 1 0 001 1h4a1 1 0 001-1v-5h2v5a1 1 0 001 1h4a1 1 0 001-1v-7.586l1.293 1.293a1 1 0 001.414-1.414l-9-9z" />
          </svg>
          <span
            className={`text-sm mt-1 ${
              activeMenu === "home" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            หน้าหลัก
          </span>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleMenuClick("profile")}
        >
          {user ? (
            <Image
              src={user.pictureUrl}
              alt="Profile Picture"
              width={30}
              height={30}
              className="rounded-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 4a4 4 0 100 8 4 4 0 000-8zm-6 8a6 6 0 1112 0H4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span
            className={`text-sm mt-1 ${
              activeMenu === "profile" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            ฉัน
          </span>
        </div>
      </div>
    </nav>
  );
}
