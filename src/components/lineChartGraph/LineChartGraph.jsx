import React,{ PureComponent, useState }  from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartGraph = () => {

  const [lineChartData, setLineChartData] = useState(
    [
      {
        name: 'JAN',
        Users: 4000,
        Sales: 2400,
        amt: 2400,
      },
      {
        name: 'FEB',
        Users: 3000,
        Sales: 1398,
        amt: 2210,
      },
      {
        name: 'MAR',
        Users: 2000,
        Sales: 9800,
        amt: 2290,
      },
      {
        name: 'APR',
        Users: 2780,
        Sales: 3908,
        amt: 2000,
      },
      {
        name: 'MAY',
        Users: 1890,
        Sales: 4800,
        amt: 2181,
      },
      {
        name: 'JUNE',
        Users: 2390,
        Sales: 3800,
        amt: 2500,
      },
      {
        name: 'AUG ',
        Users: 3490,
        Sales: 4300,
        amt: 2100,
      },
      {
        name: 'SEP',
        Users: 3490,
        Sales: 4300,
        amt: 2100,
      },
      {
        name: 'OCT',
        Users: 3490,
        Sales: 4300,
        amt: 2100,
      },
      {
        name: 'NOV',
        Users: 3490,
        Sales: 4300,
        amt: 2100,
      },
      {
        name: 'DEC',
        Users: 3490,
        Sales: 4300,
        amt: 2100,
      },

    ]
  );

  return (
    <div className="card my-4 shadow-md sm:rounded-lg     md:rounded-md bg-white">

        <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>   
        </div>

        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[15px]"><span className='block w-[8px] h-[8px] rounded-full bg-green-600'></span>Total Users</span>
                
          <span className="flex items-center gap-1 text-[15px]"><span className='block w-[8px] h-[8px] rounded-full bg-[#1976d2]'></span>Total Sales</span>
        </div>

          <LineChart
              width={1000}
              height={500}
              data={lineChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke='none' />
              <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Users" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>      
          {/* <ResponsiveContainer width="100%" height="100%">
            
          </ResponsiveContainer> */}
      </div>
  )
}

export default LineChartGraph;