import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { GrProductHunt } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";
import { IoBagCheck } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import {Collapse} from 'react-collapse';


const SideBar = () => {

  const[subMenuIndex, setSubMenuIndex] = useState(null);
  const isOpenSubMenu=(index)=>{
    if(subMenuIndex===index){
      setSubMenuIndex(null);
    }else{
      setSubMenuIndex(index);
    }
    
  }
  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#f9f9f9] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
          <div className="py-2 w-full">
            <Link to='/'>
              <img src="/img-logo/alawo_logo.webp" alt="admin_logo" className='w-[120px]'/>
            </Link>
          </div>

          <ul className='mt-4'>
            <li>
              <Link to='/'>
                <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]'><RiDashboardHorizontalFill className='!text-[21px]' />
                  <span> Dashboard</span>
                </Button>
              </Link>
            </li>

            <li>
            
                <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]'  onClick={()=>isOpenSubMenu(1)}><IoImages className='!text-[20px]' />
                <span> Home Slides</span>
                <span className='ml-auto w-[30px] h-[30px] flex items-center'>
                  <FaAngleDown className={`transition-all ${subMenuIndex === 1 ? '-rotate-180 duration-500' : 'duration-500'}`} />
                </span>
                </Button>
              
              <Collapse isOpened={subMenuIndex===1 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                  <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span> Home Banner List</Button>
                </li>

                <li className='w-full'>
                  <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add Home Banner Slide </Button>
                </li>
              </ul>
              
              </Collapse>

            </li>

            <li>
              <Link to='/users'>
                  <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]'><ImUsers className='!text-[20px]' />
                    <span> Users</span>
                  </Button>
              </Link>
            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]' onClick={()=>isOpenSubMenu(3)}><GrProductHunt className='!text-[20px]' />
                <span> Products</span>
                <span className='ml-auto w-[30px] h-[30px] flex items-center'>
                  <FaAngleDown className={`transition-all ${subMenuIndex === 3 ? '-rotate-180 duration-500' : 'duration-500'}`} />
                </span>
              </Button>

              <Collapse isOpened={subMenuIndex===3 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                  <Link to='/products'>
                    <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Product List</Button>
                  </Link>
                </li>

                <li className='w-full'>
                  <Link to='/product/upload'>
                    <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Product Upload</Button>
                  </Link>
                </li>
              </ul>
              
              </Collapse>
            </li>

            <li>
              <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]' onClick={()=>isOpenSubMenu(4)}><BiSolidCategory className='!text-[21px]' />
                <span> Category</span>
                <span className='ml-auto w-[30px] h-[30px] flex items-center'>
                  <FaAngleDown className={`transition-all ${subMenuIndex === 4 ? '-rotate-180 duration-500' : 'duration-500'}`} />
                </span>
              </Button>

              <Collapse isOpened={subMenuIndex===4 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                  <Link to='/categories'>
                      <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Category List</Button>
                    </Link>
                </li>

                <li className='w-full'>
                  <Link to='/category/add'>
                    <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Category</Button>
                  </Link>
                </li>


                <li className='w-full'>
                  <Link to='/category/sub-category'>
                    <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Sub Category List</Button>
                  </Link>
                </li>

                <li className='w-full'>
                  <Link to='/category/sub-category/add'>
                    <Button className='!w-full !capitalize !text-[rgba(0,0,0,0.7)] !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3 hover:!bg-[#f1f1f1]'><span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Sub Category</Button>
                  </Link>
                </li>
              </ul>
              
              </Collapse>
            </li>

            <li>
              <Link to='/orders'>
                <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]'><IoBagCheck className='!text-[22px]' />
                  <span>Orders</span>
                </Button>
              </Link>
            </li>
  

            <li>
              <Link to='/logout'>
                <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.7)] !font-[500] !py-2 items-center hover:!bg-[#f1f1f1]'><TbLogout className='!text-[22px]' />
                  <span>Logout</span>
                </Button>
              </Link>
            </li>

          </ul>
      </div>
    
    
    </>
  )
}

export default SideBar