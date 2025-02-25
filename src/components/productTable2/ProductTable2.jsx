import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import { RiEditLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import ProgressBar from "../../components/progressBar/ProgressBar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [

  { id: 'product', label: 'PRODUCT', minWidth: 150 },
  { id: 'category', label: 'CATEGORY', minWidth: 100 },
  {
    id: 'subcategory',
    label: 'SUBCATEGORY',
    minWidth: 150,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'PRICE',
    minWidth: 130,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'sales',
    label: 'SALES',
    minWidth: 100,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'ACTION',
    minWidth: 120,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const ProductTable2 = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
        <div className="card my-4 shadow-md sm:rounded-lg md:rounded-md bg-white">
        {/* product table */}
          <div className="flex items-center justify-between px-5 py-5">
              <h2 className="text-[18px] font-[600]">Products Table-2</h2>
          </div>



          {/* product List */}
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow>
                  <TableCell>
                    <Checkbox {...label} size="small" />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">786</span> sales
                        </p>
                    <ProgressBar value={90} type="success" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">786</span> sales
                        </p>
                    <ProgressBar value={90} type="success" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">450</span> sales
                        </p>
                    <ProgressBar value={50} type="warning" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">100</span> sales
                        </p>
                    <ProgressBar value={20} type="error" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">786</span> sales
                        </p>
                    <ProgressBar value={90} type="success" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">450</span> sales
                        </p>
                    <ProgressBar value={50} type="warning" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">450</span> sales
                        </p>
                    <ProgressBar value={50} type="warning" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>


                <TableRow >

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">786</span> sales
                        </p>
                    <ProgressBar value={90} type="success" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">786</span> sales
                        </p>
                    <ProgressBar value={90} type="success" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">450</span> sales
                        </p>
                    <ProgressBar value={50} type="warning" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">100</span> sales
                        </p>
                    <ProgressBar value={20} type="error" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">786</span> sales
                        </p>
                    <ProgressBar value={90} type="success" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">450</span> sales
                        </p>
                    <ProgressBar value={50} type="warning" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

                <TableRow >
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <Checkbox {...label} size="small" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                    
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    Watches Boxes
                  </TableCell>
                  
                  <TableCell style={{ minWidth: columns.minWidth }}>
                  5 Slots Boxes
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <div class="flex gap-1 flex-col ">
                      <span className="oldPrice leading-3 line-through text-gray-500 text-[13px]">₹ 3500.00</span><span className="price text-[#1976d2] text-[14px] font-bold ">₹ 1999.00</span>
                    </div>
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
                    <p className="text-[13px] w-[100px]">
                    <span className="font-[600]">450</span> sales
                        </p>
                    <ProgressBar value={50} type="warning" />
                  </TableCell>

                  <TableCell style={{ minWidth: columns.minWidth }}>
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
                  </TableCell>

                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
    </>
);
};

export default ProductTable2;
