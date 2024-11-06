import { useState } from 'react'; // Added useState for managing state
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Added ResponsiveContainer import

const yearData = [
  { name: '2001', patients: 0 },
  { name: '2002', patients: 1000 },
  { name: '2003', patients: 2000 },
  { name: '2004', patients: 3000 },
  { name: '2005', patients: 4000 },
  { name: '2006', patients: 5000 },
  { name: '2007', patients: 6000 },
  { name: '2008', patients: 7000 },
  { name: '2009', patients: 8000 },
  { name: '2010', patients: 9000 },
];

const monthData = [
  { name: 'Jan', patients: 2000 },
  { name: 'Feb', patients: 3000 },
  { name: 'Mar', patients: 2780 },
  { name: 'Apr', patients: 1890 },
  { name: 'May', patients: 2390 },
  { name: 'Jun', patients: 3490 },
  { name: 'Jul', patients: 2780 },
  { name: 'Aug', patients: 2000 },
  { name: 'Sep', patients: 3490 },
  { name: 'Oct', patients: 4000 },
  { name: 'Nov', patients: 3200 },
  { name: 'Dec', patients: 4100 },
];

const weekData = [
  { name: 'Mon', patients: 1200 },
  { name: 'Tue', patients: 2100 },
  { name: 'Wed', patients: 1800 },
  { name: 'Thu', patients: 2400 },
  { name: 'Fri', patients: 3000 },
  { name: 'Sat', patients: 1500 },
  { name: 'Sun', patients: 2000 },
];

const PatientsStatistics = () => {
  const [timePeriod, setTimePeriod] = useState('Year'); // State for time period selection
  const [data, setData] = useState(yearData); // State for chart data

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
    if (period === 'Year') {
      setData(yearData);
    } else if (period === 'Month') {
      setData(monthData);
    } else if (period === 'Week') {
      setData(weekData);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg" style={{ width: "130%", marginTop: "0px", height: "396px" }}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div><h2 className="text-xl pb-2 fw-bold font-semibold">Patients Statistics</h2></div>
        <div className="button-group d-flex mb-2 shadow-sm rounded text-gray-500" style={{ position: 'relative', backgroundColor: 'transparent' }}>
          <button className=" mx-2 px-2 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Year')}>Year</button>
          <button className=" btn-white px-2 py-2 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Month')}>Month</button>
          <button className=" mx-2 px-2 me-3 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Week')}>Week</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke="#ccc" /> {/* Show only horizontal lines */}
          <XAxis dataKey="name" />
          <YAxis domain={[0, 10000]} ticks={[0, 2000, 4000, 6000, 8000, 10000]} />
          <Tooltip content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div className='grid px-2' style={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px' }}>
                  <span>Patients</span> <span>{payload[0].value}</span> {/* Show only the number of patients */}
                </div>
              );
            }
            return null;
          }} />
          <Legend />
          <Line type="monotone" dataKey="patients" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientsStatistics;
