import React from 'react';
import { HiUsers } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import totalp from '../images/totalp.png';
import repeatp from '../images/repeatp.png';
import admittedp from '../images/admittedp.png';
import claimp from '../images/claimp.png';

const Reportcards = () => {
    const stats = [
        { title: 'Total Patients', count: '00', icon: <img src={totalp} alt='total patient'/> },
        { title: 'Repeat Patients', count: '00', icon: <img src={repeatp} alt='repeat patient'/> },
        { title: "Admitted Patient", count: '00', icon: <img src={admittedp} alt='admitted patient'/> },
        { title: "Total Claim", count: '00', icon: <img src={claimp} alt='total claimp'/> },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 h-50">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white flex justify-between items-center p-3 shadow-md rounded-lg">
                
                    <div className="flex items-center">
                        <span className="text-2xl">{stat.icon}</span>
                    </div>

                    <div className="flex-grow ml-3">
                        <span className="text-dark fw-semibold text-md">{stat.title}</span>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-gray-800 mb-0">{stat.count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Reportcards;
