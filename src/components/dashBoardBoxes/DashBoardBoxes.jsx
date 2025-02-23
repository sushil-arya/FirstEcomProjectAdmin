import React from 'react';
import { TfiGift } from "react-icons/tfi";
import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { GrProductHunt } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const DashBoardBoxes = () => {
  return (
    <>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="dashBoardBoxesSlider"
        >
          <SwiperSlide>
            <div className="box p-5 cursor-pointer  rounded-md border border-[rgba(0,0,0,0.1)] flex items-center mb-3 gap-4 transition-all hover:shadow-md">
              <TfiGift className='text-[40px] !text-[#3872fa]'/>
              <div className="info w-[70%]">
                  <h3>New Orders</h3>
                  <b>2,786</b>
              </div>
              <IoStatsChart className='text-[50px] !text-[#3872fa]' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 transition-all hover:shadow-md">
              <FaChartPie className='text-[40px] !text-[#10b981]'/>
              <div className="info w-[70%]">
                  <h3>Sales</h3>
                  <b>&#8377; 57,894</b>
              </div>
              <IoStatsChart className='text-[50px] !text-[#10b981]' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 transition-all hover:shadow-md">
              <BsBank2 className='text-[40px] !text-[#7928ca]'/>
              <div className="info w-[70%]">
                  <h3>Revenue</h3>
                  <b>&#8377; 12,390</b>
              </div>
              <IoStatsChart className='text-[50px] !text-[#7928ca]' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 transition-all hover:shadow-md">
              <GrProductHunt className='text-[40px] !text-[#28bfcad9]'/>
              <div className="info w-[70%]">
                  <h3>Total Products</h3>
                  <b>&#8377; 12,390</b>
              </div>
              <IoStatsChart className='text-[50px] !text-[#28bfcad9]' />
            </div>
          </SwiperSlide>


          
        </Swiper>      
    </>
  )
}

export default DashBoardBoxes;