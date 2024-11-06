// Dashboard.js
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DoctorRecord from './DoctorRecord';

export default function DoctorDashboard() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-grow overflow-auto bg-gray-100">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 gap-3 px-6 mt-6 mb-6 overflow-auto">
          <DoctorRecord />
        </div>
      </div>
    </div>
  );
}

