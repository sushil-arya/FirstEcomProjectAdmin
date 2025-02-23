import React from 'react';
import DashBoardBoxes from '../../components/dashboardBoxes/DashBoardBoxes';
import { FaPlus } from "react-icons/fa";
import Button from '@mui/material/Button';





const DashBoard = () => {
  return (
    <>
      <div className="w-full bg-[#f1faff] py-2 px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-lg shadow-md">
        <div className="info">
          <h1 className='text-[35px] font-bold leading-12'>Good Morning, <br />
          Admin
          </h1>
          <p>Here's What happening on your store today. See the statistics at once.</p>
          <br />
          <Button className='btn-blue !capitalize flex gap-2'><FaPlus /> Add Product</Button>
        </div>

        <img src="/img-shop/shop-illustration.webp" alt="admin-dashboardImage" className='w-[250px]' />
      </div>
        <DashBoardBoxes />

        <div className="card my-4 shadow-md sm:rounded-lg md:rounded-md bg-white">
            
          {/* order table */}
          <div className="flex items-center justify-between px-5 py-5">
            <h2 className='text-[18px] font-[600]'>Recent Orders</h2>
          </div>
          

          <div class="relative overflow-x-auto ">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              order id
                          </th>
                          <th scope="col" class="px-6 py-3">
                              customer
                          </th>
                          <th scope="col" class="px-6 py-3">
                              itmes
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Price
                          </th>
                          <th scope="col" class="px-6 py-3">
                              created
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple MacBook Pro 17"
                          </th>
                          <td class="px-6 py-4">
                              Silver
                          </td>
                          <td class="px-6 py-4">
                              Laptop
                          </td>
                          <td class="px-6 py-4">
                              $2999
                          </td>
                          <td class="px-6 py-4">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                      </tr>
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Microsoft Surface Pro
                          </th>
                          <td class="px-6 py-4">
                              White
                          </td>
                          <td class="px-6 py-4">
                              Laptop PC
                          </td>
                          <td class="px-6 py-4">
                              $1999
                          </td>
                          <td class="px-6 py-4">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                      </tr>
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Magic Mouse 2
                          </th>
                          <td class="px-6 py-4">
                              Black
                          </td>
                          <td class="px-6 py-4">
                              Accessories
                          </td>
                          <td class="px-6 py-4">
                              $99
                          </td>
                          <td class="px-6 py-4">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                      </tr>
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Google Pixel Phone
                          </th>
                          <td class="px-6 py-4">
                              Gray
                          </td>
                          <td class="px-6 py-4">
                              Phone
                          </td>
                          <td class="px-6 py-4">
                              $799
                          </td>
                          <td class="px-6 py-4">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple Watch 5
                          </th>
                          <td class="px-6 py-4">
                              Red
                          </td>
                          <td class="px-6 py-4">
                              Wearables
                          </td>
                          <td class="px-6 py-4">
                              $999
                          </td>
                          <td class="px-6 py-4">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </>
  )
}

export default DashBoard;