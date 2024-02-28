import React from "react";
import Calendar from "./Calendar";
import Guide from "./Guide";

const Details = () => {
  return (
    <div className="flex   justify-between container mx-auto px-[100px] md:mx-auto mt-[30px] h-screen ">
      <div className="flex-col   w-full  ">
        {/* Title */}
        <div className="font-bold text-[48px] ">ยินดีต้อนรับ</div>
        <div className="ml-6">
          <div className="w-[500px] mt-[20px] ">
            <p className="font-bold text-[19] ">เงื่อนไขจบการศึกษา</p>
            <br />

            {/* Details */}
            <p className="ml-4 font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              voluptates eius inventore eligendi dolores? Blanditiis, voluptatem
              vitae? Quod molestias quis placeat ratione voluptates? Quisquam
              voluptates recusandae cupiditate blanditiis quidem sapiente? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio
              perferendis ad exercitationem porro quidem reprehenderit, natus
              officia corrupti labore minima neque non asperiores minus
              voluptatum quo illo nam ipsum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt laudantium esse nihil iusto
              deleniti necessitatibus deserunt eaque rem odit ipsa non
              architecto ullam numquam expedita praesentium, unde, perspiciatis
              consectetur itaque.
            </p>
          </div>

          {/* Guide */}
          <div className="w-[500px]  mt-[20px]">
            <p className="font-bold">คู่มือการใช้งาน</p>
            <br />

            {/* Guide Details */}
            <p className="ml-4 font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aut
              quasi inventore quos aperiam? Quis ratione facilis pariatur natus,
              rem corporis asperiores eaque soluta praesentium, minima
              consectetur veritatis quam dolor. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quos libero quidem fugiat officia ea
              voluptas consequuntur culpa id sequi est ducimus vero
              necessitatibus, ipsum reiciendis repellat porro? Ab, consequuntur
              totam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia voluptatum debitis hic enim quia, atque sapiente quo ex
              quae esse minus neque cum voluptatibus minima rem, aliquid ullam.
              Voluptatum, quibusdam?
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col ">
        <Calendar />
        <Guide />
      </div>
    </div>
    
  );
};

export default Details;
