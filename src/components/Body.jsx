import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axiosInstance from '../utils/axiosConfig';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async() => {
    if(userData) return;
    try {
      const res = await axiosInstance.get("/profile/view");
      dispatch(addUser(res.data));
    } catch (err) {
      console.error("Auth error:", err?.response?.data);
      if(err?.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Body;
