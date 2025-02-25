import React from 'react';


const ProgressBar = (props) => {
  return (
    <div className='w-[80px] h-auto overflow-hidden rounded-md bg-[#e5e5e5]'>
      <span className={`flex items-center h-[8px]  ${props.type==="success" && 'bg-green-400' } ${props.type==="error" && 'bg-[#F43378]' } ${props.type==="warning" && 'bg-orange-400' } `} style={{ width: `${props.value}%` }}></span>

        
        {/* <span className='w-[60%] h-[5px] bg-[#3498db]' rounded-sm></span>
        <span className='w-[40%] h-[5px] bg-[#f1c40f]' rounded-sm></span> 
        
        yellow color -  bg-[#f1c40f]
        */}
    </div>
  )
}

export default ProgressBar;