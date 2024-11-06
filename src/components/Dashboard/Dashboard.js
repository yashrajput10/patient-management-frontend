// Dashboard.js
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import StatsCards from './StatsCards';
import PatientsStatistics from './PatientsStatistics';
import BillingPayments from './BillingPayments';
import AppointmentsList from './AppointmentsList';
import PatientsBreakdown from './PatientsBreakdown';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar/> 
      <div className="flex-grow bg-gray-100 overflow-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6 px-6 mb-6">
          <div className="grid grid-cols-1 gap-3">
            <StatsCards />
            <PatientsStatistics />
            <AppointmentsList />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className='d-flex justify-content-end'>
              <BillingPayments />
            </div>
            <div className='d-flex justify-content-end'>
              <PatientsBreakdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

