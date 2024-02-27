import React from "react";
import Calendar from "./Calendar";
import Guide from "./Guide";

const Details = () => {
  return (
    <div className="flex   justify-between container mx-auto px-[200px] md:mx-auto mt-[30px] h-screen ">
     
      <div className="flex-col  w-full  ">
        {/* Title */}
        <div className="font-bold text-[40px] ">ยินดีต้อนรับ</div>
        <div className="ml-6">
          <div className="w-[320px] mt-[20px]">
            <p className="font-bold">เงื่อนไขจบการศึกษา</p>
            <br />

            {/* Details */}
            <p className="ml-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              voluptates eius inventore eligendi dolores? Blanditiis, voluptatem
              vitae? Quod molestias quis placeat ratione voluptates? Quisquam
              voluptates recusandae cupiditate blanditiis quidem sapiente?
            </p>
          </div>

          {/* Guide */}
          <div className="w-[320px]  mt-[20px]">
            <p className="font-bold">คู่มือการใช้งาน</p>
            <br />

            {/* Guide Details */}
            <p className="ml-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aut
              quasi inventore quos aperiam? Quis ratione facilis pariatur natus,
              rem corporis asperiores eaque soluta praesentium, minima
              consectetur veritatis quam dolor.
            </p>
          </div>
        </div>
      </div>
      <div className='flex-col '>
          <Calendar/>
          <Guide/>
        </div>
     
          
    </div>
  );
};

export default Details;
