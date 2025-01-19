"use client"; 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/utils/api';

// Define the User type
interface User {
  name: string;
  email: string;
  role:string;

}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/user/profile');
        setUser(response.data); 
      } catch (error) {
        router.push('/auth/login');
      }
    };
    fetchProfile();
  }, [router]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
};

export default ProfilePage;