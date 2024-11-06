import React from "react";
import MonitorBillingTable from "./MonitorBillingTable";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MonitorBilling = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <div className="flex flex-col h-full overflow-x-auto">
                    <MonitorBillingTable />
                </div>
            </div>
        </div>
    );
};

export default MonitorBilling;
