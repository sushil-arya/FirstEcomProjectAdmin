import React from 'react';

const Badges = (props) => {
  return (
    <span className={`inline-block w-[90px] text-center py-2 px-5 capitalize text-[11px] rounded-full ${props.status === 'pending' && 'bg-[#F29339] text-[#fff]'} ${props.status === 'confirm' && 'bg-green-400 text-[#fff]'} ${props.status === 'shipped' && 'bg-[#D9512C] text-[#fff]'}  ${props.status === 'cancelled' && 'bg-[#727272] text-[#fff]'} ${props.status === 'delivered' && 'bg-green-800 text-[#fff]'}`}>{props.status}</span>
  )
}

export default Badges;