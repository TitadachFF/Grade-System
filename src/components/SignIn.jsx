import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignIn = () => {
  // สร้าง state เพื่อเก็บข้อมูลการเข้าสู่ระบบ
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // เรียกใช้ Hook `useNavigate` เพื่อการนำทางหน้า
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับการเปลี่ยนแปลงค่าในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // ฟังก์ชันสำหรับการส่งข้อมูลเข้าสู่ระบบ
  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบข้อมูลและดำเนินการต่อตามที่ต้องการ เช่น เรียก API เพื่อตรวจสอบข้อมูลเข้าสู่ระบบ
    // หลังจากนั้นนำทางไปยังหน้าที่ต้องการ และ/หรือแสดงข้อผิดพลาด (ถ้ามี)
    navigate("/dashboard"); // เปลี่ยนเส้นทางไปยังหน้า Dashboard หลังจากลงชื่อเข้าใช้สำเร็จ
  };

  return (
    <div className="h-screen">
      {/* <Navbar /> เรียกใช้ Navbar ที่ถูกนำเข้า */}
      <div className="flex justify-center items-center mt-28">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form onSubmit={handleSubmit} className="p-8 ">
            <h2 className="text-3xl mb-4 font-bold text-center">เข้าสู่ระบบ</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">ชื่อเข้าใช้งาน</label>
              <input placeholder="Username" type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-md font-medium text-gray-700">รหัสผ่าน</label>
              <input placeholder="Password" type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <button type="submit" className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600">Sign In</button>
            <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/signup" className="font-medium text-primary-500">Sign up here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
