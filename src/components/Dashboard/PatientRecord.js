import { MdEditSquare, MdRemoveRedEye } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";


export default function PatientRecord() {

    return (
        <div className="gap-4 h-50" style={{ width: "200%" }}>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> {/* Set table width to full */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Patient Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Patient issue
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Doctor Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dieses Name 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Appointment Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Appointment Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4 text-bold">
                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{width:"70px",height:"30px",fontWeight:"500"}}>$2999</div>
                        </td>
                        <td class="px-6 py-4 text-bold">
                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{width:"70px",height:"30px",fontWeight:"500"}}>$2999</div>
                        </td>
                        <td class="px-6 py-4 text-bold d-flex gap-2">
                            
                            <div className="d-flex align-items-center justify-content-center">
                            <MdRemoveRedEye className="text-[#0EABEB] fs-5"/>
                            </div>
                        </td>
                    </tr>
                   
                </tbody>
            </table>

        </div>
    );
}
