import { HiUsers } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { PiShoppingBagOpenFill } from "react-icons/pi";

// StatsCards.js
export default function StatsCards() {
  const stats = [
    { title: 'Total Patients', count: '1000', icon: <HiUsers color="#2E7793" /> },
    { title: 'Total Doctors', count: '100', icon: <FaUserDoctor color="#5E5E9E" /> },
    { title: "Today's Appointments", count: '50', icon: <PiShoppingBagOpenFill color="#41B161" /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 h-50" style={{width:"130%"}}>
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl text-center d-flex gap-3 px-3 py-4 align-items-center justify-content-start mb-0">
          <div className="text-3xl d-flex align-items-center justify-content-center rounded-circle bg-gray-100" style={{ width: "45px", height: "45px" }}>
            <span className="text-xl px-3">{stat.icon}</span>
          </div>
          <div className="flex-col"> <span className="text-gray-400 text-sm text-left">{stat.title}</span>
            <p className="text-2xl font-bold mb-0 text-left">{stat.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
