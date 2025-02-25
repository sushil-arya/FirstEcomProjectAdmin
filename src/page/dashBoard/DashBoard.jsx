import React, { useState } from "react";
import DashBoardBoxes from "../../components/dashBoardBoxes/DashBoardBoxes";
import { FaPlus } from "react-icons/fa";
import Button from "@mui/material/Button";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Badges from "../../components/badges/Badges";
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { RiEditLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import ProductTable2 from "../../components/productTable2/ProductTable2";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const DashBoard = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(false);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  return (
    <>
        <div className="w-full bg-[#f1faff] py-2 px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-lg shadow-md">
        <div className="info">
            <h1 className="text-[35px] font-bold leading-12">
            Good Morning, <br />
            Admin
            </h1>
            <p>
            Here's What happening on your store today. See the statistics at
            once.
            </p>
            <br />
            <Button className="btn-blue !capitalize flex gap-2">
            <FaPlus /> Add Product
            </Button>
        </div>

        <img
            src="/img-shop/shop-illustration.webp"
            alt="admin-dashboardImage"
            className="w-[250px]"
        />
        </div>
        <DashBoardBoxes />

        <div className="card my-4 shadow-md sm:rounded-lg md:rounded-md bg-white">
            {/* order table */}
            <div className="flex items-center justify-between px-5 py-5">
                <h2 className="text-[18px] font-[600]">Recent Orders</h2>
            </div>

    {/* <div class="relative overflow-x-auto ">
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
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">&#8377; 2999</td>
            <td class="px-6 py-4">
                <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                Edit
                </a>
            </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">&#8377; 1999</td>
            <td class="px-6 py-4">
                <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                Edit
                </a>
            </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">&#8377; 99</td>
            <td class="px-6 py-4">
                <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                Edit
                </a>
            </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                Google Pixel Phone
            </th>
            <td class="px-6 py-4">Gray</td>
            <td class="px-6 py-4">Phone</td>
            <td class="px-6 py-4">&#8377; 799</td>
            <td class="px-6 py-4">
                <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                Edit
                </a>
            </td>
            </tr>
            <tr>
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                Apple Watch 5
            </th>
            <td class="px-6 py-4">Red</td>
            <td class="px-6 py-4">Wearables</td>
            <td class="px-6 py-4">&#8377; 999</td>
            <td class="px-6 py-4">
                <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                Edit
                </a>
            </td>
            </tr>
        </tbody>
        </table>
    </div> */}

            {/* Recent Order table List */}
            <div className="relative overflow-x-auto mt-5 pb-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">
                        &nbsp;
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Order Id
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Payment Id
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Name
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Phone Number
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Address
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Pincode
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Total Amount
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Email Id
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        User Id
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Order Status
                    </th>

                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Date
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {/* order table 1 */}
                    <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                        <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                        onClick={() => isShowOrderedProduct(0)}
                        >
                        {
                            // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                            <FaAngleUp
                            className={`transition-all ${
                                isOpenOrderedProduct === 0
                                ? "rotate-180 duration-500"
                                : "duration-500"
                            } text-[16px] text-[#555]`}
                            />
                        }
                        </Button>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">OD123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">PAY123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                        John Doe
                    </td>

                    <td className="px-6 py-4 font-[500]">9123554321</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                        Sample Address, 123 Main St, City
                        </span>
                    </td>

                    <td className="px-6 py-4 font-[500]">123456</td>

                    <td className="px-6 py-4 font-[500]">&#8377; 4999.00</td>

                    <td className="px-6 py-4 font-[500]">johndoe@gmail.com</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">1234567890</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <Badges status="pending" />
                    </td>

                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2022-01-01
                    </td>
                    </tr>

                    {isOpenOrderedProduct === 0 && (
                    <tr data-aos="zoom-out" data-aos-delay="50">
                        <td className="pl-20" colSpan="6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Id
                                </th>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Title
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Image
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Quantity
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Price
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Sub Total
                                </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>

                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </td>
                    </tr>
                    )}

                    {/* order table 2 */}
                    <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                        <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                        onClick={() => isShowOrderedProduct(1)}
                        >
                        {
                            // isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555]' />

                            <FaAngleUp
                            className={`transition-all ${
                                isOpenOrderedProduct === 1
                                ? "rotate-180 duration-500"
                                : "duration-500"
                            } text-[16px] text-[#555]`}
                            />
                        }
                        </Button>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">OD123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">PAY123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                        John Doe
                    </td>

                    <td className="px-6 py-4 font-[500]">9123554321</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                        Sample Address, 123 Main St, City
                        </span>
                    </td>

                    <td className="px-6 py-4 font-[500]">123456</td>

                    <td className="px-6 py-4 font-[500]">&#8377; 4999.00</td>

                    <td className="px-6 py-4 font-[500]">johndoe@gmail.com</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">1234567890</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <Badges status="delivered" />
                    </td>

                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2022-01-01
                    </td>
                    </tr>
                    {isOpenOrderedProduct === 1 && (
                    <tr data-aos="zoom-out">
                        <td className="pl-20" colSpan="6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Id
                                </th>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Title
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Image
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Quantity
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Price
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Sub Total
                                </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-[#1976d2]">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-[#1976d2]">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>

                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-[#1976d2]">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-[#1976d2]">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </td>
                    </tr>
                    )}

                    {/* order table 3 */}
                    <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                        <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                        onClick={() => isShowOrderedProduct(2)}
                        >
                        {
                            // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                            <FaAngleUp
                            className={`transition-all ${
                                isOpenOrderedProduct === 2
                                ? "rotate-180 duration-500"
                                : "duration-500"
                            } text-[16px] text-[#555]`}
                            />
                        }
                        </Button>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">OD123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">PAY123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                        John Doe
                    </td>

                    <td className="px-6 py-4 font-[500]">9123554321</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                        Sample Address, 123 Main St, City
                        </span>
                    </td>

                    <td className="px-6 py-4 font-[500]">123456</td>

                    <td className="px-6 py-4 font-[500]">&#8377; 4999.00</td>

                    <td className="px-6 py-4 font-[500]">johndoe@gmail.com</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">1234567890</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <Badges status="shipped" />
                    </td>

                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2022-01-01
                    </td>
                    </tr>

                    {isOpenOrderedProduct === 2 && (
                    <tr data-aos="zoom-out">
                        <td className="pl-20" colSpan="6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Id
                                </th>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Title
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Image
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Quantity
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Price
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Sub Total
                                </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>

                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </td>
                    </tr>
                    )}

                    {/* order table 4 */}
                    <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                        <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                        onClick={() => isShowOrderedProduct(3)}
                        >
                        {
                            // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                            <FaAngleUp
                            className={`transition-all ${
                                isOpenOrderedProduct === 3
                                ? "rotate-180 duration-500"
                                : "duration-500"
                            } text-[16px] text-[#555]`}
                            />
                        }
                        </Button>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">OD123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">PAY123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                        John Doe
                    </td>

                    <td className="px-6 py-4 font-[500]">9123554321</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                        Sample Address, 123 Main St, City
                        </span>
                    </td>

                    <td className="px-6 py-4 font-[500]">123456</td>

                    <td className="px-6 py-4 font-[500]">&#8377; 4999.00</td>

                    <td className="px-6 py-4 font-[500]">johndoe@gmail.com</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">1234567890</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <Badges status="confirm" />
                    </td>

                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2022-01-01
                    </td>
                    </tr>

                    {isOpenOrderedProduct === 3 && (
                    <tr data-aos="zoom-out">
                        <td className="pl-20" colSpan="6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Id
                                </th>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Title
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Image
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Quantity
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Price
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Sub Total
                                </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>

                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </td>
                    </tr>
                    )}

                    {/* order table 5 */}
                    <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                    <td className="px-6 py-4 font-[500]">
                        <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                        onClick={() => isShowOrderedProduct(4)}
                        >
                        {
                            // isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[#555]' /> : < FaAngleDown className='text-[16px] text-[#555] duration-500' />
                            <FaAngleUp
                            className={`transition-all ${
                                isOpenOrderedProduct === 4
                                ? "rotate-180 duration-500"
                                : "duration-500"
                            } text-[16px] text-[#555]`}
                            />
                        }
                        </Button>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">OD123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">PAY123456789</span>
                    </td>

                    <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                        John Doe
                    </td>

                    <td className="px-6 py-4 font-[500]">9123554321</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                        Sample Address, 123 Main St, City
                        </span>
                    </td>

                    <td className="px-6 py-4 font-[500]">123456</td>

                    <td className="px-6 py-4 font-[500]">&#8377; 4999.00</td>

                    <td className="px-6 py-4 font-[500]">johndoe@gmail.com</td>

                    <td className="px-6 py-4 font-[500]">
                        <span className="text-[#1976d2]">1234567890</span>
                    </td>

                    <td className="px-6 py-4 font-[500]">
                        <Badges status="cancelled" />
                    </td>

                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2022-01-01
                    </td>
                    </tr>

                    {isOpenOrderedProduct === 4 && (
                    <tr data-aos="zoom-out">
                        <td className="pl-20" colSpan="6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Id
                                </th>
                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Product Title
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Image
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Quantity
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Price
                                </th>

                                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                    Sub Total
                                </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>

                                <tr className="bg-white border-b !border-[#e5e5e5] dark:border-gray-700">
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    PRD123456789
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                    ALAWO Faux Leather Watch Box
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-[500]">
                                    <img
                                    className="w-[40px] h-[40px] border border-[#e5e5e5] object-cover rounded-md"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb- Image"
                                    />
                                </td>

                                <td className="px-6 py-4 font-[500]">1</td>
                                <td className="px-6 py-4 font-[500]">
                                    &#8377; 4999.00
                                </td>
                                <td className="px-6 py-4 font-[500]  whitespace-nowrap">
                                    &#8377; 4999.00
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>

        </div>


        <div className="card my-4 shadow-md sm:rounded-lg md:rounded-md bg-white">
        {/* product table */}
        <div className="flex items-center justify-between px-5 py-5">
            <h2 className="text-[18px] font-[600]">Products</h2>
        </div>



        {/* product List */}
        <div className="relative overflow-x-auto mt-5 pb-5 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" class="px-6 pr-0 py-3" >
                <div className="w-[60px]">
                    <Checkbox {...label} size="small"/>
                </div>
                </th>
                <th scope="col" class="px-2 py-3 whitespace-nowrap">
                    Product
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Category
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Sub Category
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Price
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Sales
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Action
                </th>

            </tr>
            </thead>
            <tbody>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 pr-2 py-2">
                        <div className="w-[60px]">
                            <Checkbox {...label} size="small"/>
                        </div>
                    </td>

                    <td className="px-2 py-2">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65px]  rounded-md overflow-hidden border border-[#ccc] group">
                            <Link to='/product/693'> 
                                <img
                                    className="w-full object-cover group-hover:scale-105 transition-all"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb-Image"
                                />
                                </Link>
                            </div>


                            <div className="info w-[75%] text-sm font-[500] text-gray-700 dark:text-gray-200">
                                <h3 className="font-[600] text-[12px] leading-4 hover:text-[#1976d2] ">
                                    <Link to='/product/693'> 

                                    Watch Box and Sunglass Case Holder Organizer with 6 Slots | Watches and 3 Slots for Sunglasses.

                                    </Link>
                                </h3>
                                
                                <span className="text-gray-500 dark:text-gray-400 text-[11px] ">Brand- <span className="text-[#1976d2] font-[600]"> Alawo Watches</span></span>
                            </div>
                        </div>
                    </td>

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        Watches Boxes
                    </td>                    

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        5 Slots Boxes
                    </td>


                    <td className="px-6 py-2 whitespace-nowrap">
                        <div class="flex gap-1 flex-col ">
                            <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                        </div>
                    </td>

                    <td className="px-6 py-2">
                        <p className="text-[13px] w-[100px]">
                            <span className="font-[600]">786</span> sales
                        </p>
                        <ProgressBar value={90} type="success" />
                    </td>

                    <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                            <Tooltip title="Edit Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <RiEditLine className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="View Details" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <FaRegEye className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <GoTrash className="!text-[#666] !font-[800] !text-[25px] "/>
                                </Button>
                            </Tooltip>
                        </div>
                    </td>

                </tr>


                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 pr-2 py-2">
                        <div className="w-[60px]">
                            <Checkbox {...label} size="small"/>
                        </div>
                    </td>

                    <td className="px-2 py-2">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65px]  rounded-md overflow-hidden border border-[#ccc] group">
                            <Link to='/product/693'> 
                                <img
                                    className="w-full object-cover group-hover:scale-105 transition-all"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb-Image"
                                />
                                </Link>
                            </div>


                            <div className="info w-[75%] text-sm font-[500] text-gray-700 dark:text-gray-200">
                                <h3 className="font-[600] text-[12px] leading-4 hover:text-[#1976d2] ">
                                    <Link to='/product/693'> 

                                    Watch Box and Sunglass Case Holder Organizer with 6 Slots | Watches and 3 Slots for Sunglasses.

                                    </Link>
                                </h3>
                                
                                <span className="text-gray-500 dark:text-gray-400 text-[11px] ">Brand- <span className="text-[#1976d2] font-[600]"> Alawo Watches</span></span>
                            </div>
                        </div>
                    </td>

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        Watches Boxes
                    </td>                    

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        5 Slots Boxes
                    </td>


                    <td className="px-6 py-2 whitespace-nowrap">
                        <div class="flex gap-1 flex-col ">
                            <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                        </div>
                    </td>

                    <td className="px-6 py-2">
                        <p className="text-[13px] w-[100px]">
                            <span className="font-[600]">786</span> sales
                        </p>
                        <ProgressBar value={80} type="success" />
                    </td>

                    <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                            <Tooltip title="Edit Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <RiEditLine className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="View Details" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <FaRegEye className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <GoTrash className="!text-[#666] !font-[800] !text-[25px] "/>
                                </Button>
                            </Tooltip>
                        </div>
                    </td>

                </tr>


                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 pr-2 py-2">
                        <div className="w-[60px]">
                            <Checkbox {...label} size="small"/>
                        </div>
                    </td>

                    <td className="px-2 py-2">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65px]  rounded-md overflow-hidden border border-[#ccc] group">
                            <Link to='/product/693'> 
                                <img
                                    className="w-full object-cover group-hover:scale-105 transition-all"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb-Image"
                                />
                                </Link>
                            </div>


                            <div className="info w-[75%] text-sm font-[500] text-gray-700 dark:text-gray-200">
                                <h3 className="font-[600] text-[12px] leading-4 hover:text-[#1976d2] ">
                                    <Link to='/product/693'> 

                                    Watch Box and Sunglass Case Holder Organizer with 6 Slots | Watches and 3 Slots for Sunglasses.

                                    </Link>
                                </h3>
                                
                                <span className="text-gray-500 dark:text-gray-400 text-[11px] ">Brand- <span className="text-[#1976d2] font-[600]"> Alawo Watches</span></span>
                            </div>
                        </div>
                    </td>

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        Watches Boxes
                    </td>                    

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        5 Slots Boxes
                    </td>


                    <td className="px-6 py-2 whitespace-nowrap">
                        <div class="flex gap-1 flex-col ">
                            <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                        </div>
                    </td>

                    <td className="px-6 py-2">
                        <p className="text-[13px] w-[100px]">
                            <span className="font-[600]">786</span> sales
                        </p>
                        <ProgressBar value={50} type="warning" />
                    </td>

                    <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                            <Tooltip title="Edit Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <RiEditLine className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="View Details" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <FaRegEye className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <GoTrash className="!text-[#666] !font-[800] !text-[25px] "/>
                                </Button>
                            </Tooltip>
                        </div>
                    </td>

                </tr>


                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 pr-2 py-2">
                        <div className="w-[60px]">
                            <Checkbox {...label} size="small"/>
                        </div>
                    </td>

                    <td className="px-2 py-2">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65px]  rounded-md overflow-hidden border border-[#ccc] group">
                            <Link to='/product/693'> 
                                <img
                                    className="w-full object-cover group-hover:scale-105 transition-all"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb-Image"
                                />
                                </Link>
                            </div>


                            <div className="info w-[75%] text-sm font-[500] text-gray-700 dark:text-gray-200">
                                <h3 className="font-[600] text-[12px] leading-4 hover:text-[#1976d2] ">
                                    <Link to='/product/693'> 

                                    Watch Box and Sunglass Case Holder Organizer with 6 Slots | Watches and 3 Slots for Sunglasses.

                                    </Link>
                                </h3>
                                
                                <span className="text-gray-500 dark:text-gray-400 text-[11px] ">Brand- <span className="text-[#1976d2] font-[600]"> Alawo Watches</span></span>
                            </div>
                        </div>
                    </td>

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        Watches Boxes
                    </td>                    

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        5 Slots Boxes
                    </td>


                    <td className="px-6 py-2 whitespace-nowrap">
                        <div class="flex gap-1 flex-col ">
                            <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                        </div>
                    </td>

                    <td className="px-6 py-2">
                        <p className="text-[13px] w-[100px]">
                            <span className="font-[600]">150</span> sales
                        </p>
                        <ProgressBar value={20} type="error" />
                    </td>

                    <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                            <Tooltip title="Edit Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <RiEditLine className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="View Details" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <FaRegEye className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <GoTrash className="!text-[#666] !font-[800] !text-[25px] "/>
                                </Button>
                            </Tooltip>
                        </div>
                    </td>

                </tr>


                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 pr-2 py-2">
                        <div className="w-[60px]">
                            <Checkbox {...label} size="small"/>
                        </div>
                    </td>

                    <td className="px-2 py-2">
                        <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-[65px] h-[65px]  rounded-md overflow-hidden border border-[#ccc] group">
                            <Link to='/product/693'> 
                                <img
                                    className="w-full object-cover group-hover:scale-105 transition-all"
                                    src="/img-products/img-product-3.webp"
                                    alt="Product-thumb-Image"
                                />
                                </Link>
                            </div>


                            <div className="info w-[75%] text-sm font-[500] text-gray-700 dark:text-gray-200">
                                <h3 className="font-[600] text-[12px] leading-4 hover:text-[#1976d2] ">
                                    <Link to='/product/693'> 

                                    Watch Box and Sunglass Case Holder Organizer with 6 Slots | Watches and 3 Slots for Sunglasses.

                                    </Link>
                                </h3>
                                
                                <span className="text-gray-500 dark:text-gray-400 text-[11px] ">Brand- <span className="text-[#1976d2] font-[600]"> Alawo Watches</span></span>
                            </div>
                        </div>
                    </td>

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        Watches Boxes
                    </td>                    

                    <td className="text-[13px] px-6 py-2 whitespace-nowrap">
                        5 Slots Boxes
                    </td>


                    <td className="px-6 py-2 whitespace-nowrap">
                        <div class="flex gap-1 flex-col ">
                            <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                        </div>
                    </td>

                    <td className="px-6 py-2">
                        <p className="text-[13px] w-[100px]">
                            <span className="font-[600]">786</span> sales
                        </p>
                        <ProgressBar value={50} type="warning" />
                    </td>

                    <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                            <Tooltip title="Edit Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <RiEditLine className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="View Details" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <FaRegEye className="!text-[#888] !text-[25px] "/>
                                </Button>
                            </Tooltip>

                            <Tooltip title="Remove Product" placement="top"> 
                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[#e5e5e5] !rounded-full hover:!bg-[#f1f1f1]">
                                <GoTrash className="!text-[#666] !font-[800] !text-[25px] "/>
                                </Button>
                            </Tooltip>
                        </div>
                    </td>

                </tr>



            </tbody>
        </table>
        </div>

        <div className="flex items-center justify-end pt-4 pb-4 px-4">
            {/* pagination */}
            <Pagination count={10} color="primary" />
        </div>
        </div>

        <ProductTable2 />


    </>
);
};

export default DashBoard;
