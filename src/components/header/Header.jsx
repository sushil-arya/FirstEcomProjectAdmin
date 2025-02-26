import React, { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import Button from "@mui/material/Button";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { MyContext } from "../../App";




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Header = () => {

  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };


  const context = useContext(MyContext);
 
  return (
    <header className={`w-full h-[auto] py-2 pr-7 ${context.isSideBarOpen===true ? 'pl-72' : 'pl-5' } bg-[#fff] shadow-md flex items-center justify-between transition-all`}>

      {/* menu button */}
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]" onClick={() => context.setIsSideBarOpen(!context.isSideBarOpen)}>
        
        {
          !context.isSideBarOpen ? (
            <AiOutlineMenuUnfold className="text-[22px] font-[600] text-[rgba(0,0,0,0.8)]" />
          ) : (
            <AiOutlineMenuFold className="text-[22px] font-[600] text-[rgba(0,0,0,0.8)]" />
          )
          // <AiOutlineMenuFold className="text-[18px] text-[rgba(0,0,0,0.8)]" />
        }
        </Button>

      </div>

      {/* admin avtar, notification button */}
      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

      <div className="relative">
        <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer" onClick={handleClickMyAcc}>
            <img src="/img-avatar/admin.png" className="w-full h-full object-cover" alt="" />
          </div>

          <Menu
            anchorEl={anchorMyAcc}
            id="account-menu"
            open={openMyAcc}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                  <img src="/img-avatar/admin.png" className="w-full h-full object-cover" alt="" />
                </div>

                <div className="info">
                  <h3 className="text-[15px] font-[500]leading-5">Admin Name</h3>
                  <p className="text-[12px] font-[400]opacity-70">alawo-admin@alawo.com</p>
                </div>
              </div>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
            <FaRegUser className="!text-[18px]"/> <span className="text-[14px]">Profile</span>

            </MenuItem>

            <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
            <TbLogout className="!text-[20px]" /> <span className="text-[14px]">Sign out</span>

            </MenuItem>

          </Menu>
      </div>
      </div>
    
    </header>
  );
};

export default Header;
