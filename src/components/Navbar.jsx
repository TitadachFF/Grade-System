import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  
  return (
    <div className="navbar flex justify-between border-b-[1px]">
      <div className="flex">
        <div className="border-r-2 border-black">
          <Link to="/#" className="btn btn-ghost text-6xl hover:bg-white hover:text-rose-800 text-red font-serif ml-[50px]   ">
            SE
          </Link>
        </div>

        <div className="ml-2 w-[300px] text-md">
          <span className="font-semibold">
            ระบบ
            <br />
            กรอกแบบฟอร์มคำร้องขอสำเร็จการศึกษา สาขา วิศวกรรมซอฟต์เเวร์
          </span>
        </div>
      </div>

      <div className="navbar-end">
      <Link to="/SignIn" className="btn bg-red text-white rounded-full mr-[50px] w-[150px]">
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
