// Dashboard.js


import Dnavbar from "./Dnavbar";
import DoctureSidebar from "./DoctureSidebar";
import TodayAppointment from "./TodayAppointment";


const DoctorsDashboard = () => {
  return (
    <div className="flex h-screen">
      <DoctureSidebar />
      <div className="flex-grow overflow-auto bg-gray-100">
        <div className="sticky top-0 z-10">
          <Dnavbar />
        </div>
        <div className="gap-3 mt-6 px-6 mb-6 ">
          <div className="grid grid-cols-1 gap-3">
            <TodayAppointment/>  
          </div>
        </div> 
      </div>
    </div>
  );
}

export default DoctorsDashboard
