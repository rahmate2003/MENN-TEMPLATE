"use client"; // Tandai komponen ini sebagai client component

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, setUser, clearUser } = useAuthStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login (contoh menggunakan localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Anda bisa menambahkan logika untuk mengambil data user dari token
      // Misalnya, decode token dan set user
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearUser();
    setIsLoggedIn(false);
    window.location.href = "/auth/login"; // Redirect ke halaman login
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo atau Nama Aplikasi */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              My App
            </Link>
          </div>

          {/* Menu Navigasi */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  href="/user/profile"
                  className="text-gray-900 dark:text-white hover:text-gray-700"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-900 dark:text-white hover:text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-gray-900 dark:text-white hover:text-gray-700"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="text-gray-900 dark:text-white hover:text-gray-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;