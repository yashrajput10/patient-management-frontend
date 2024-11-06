import { MdEditSquare, MdRemoveRedEye } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";


export default function DoctorRecord() {

    return (
        <div className="gap-4 h-50" style={{ width: "200%" }}>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> {/* Set table width to full */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Doctor Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qualification
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Specialty
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Working Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Patient Check Up Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Break Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            abcd
                        </th>
                        <td class="px-6 py-4">
                            fiver
                        </td>
                        <td class="px-6 py-4">
                            kantu
                        </td>
                        <td class="px-6 py-4">
                            buffb
                        </td>
                        <td class="px-6 py-4 text-bold">
                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>online</div>
                        </td>
                        <td class="px-6 py-4 text-bold">
                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$5255</div>
                        </td>
                        <td class="px-6 py-4 text-bold">
                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$2999</div>
                        </td>
                        <td class="px-6 py-4 text-bold d-flex gap-2">
                            <div className="d-flex align-items-center justify-content-center">
                                <MdEditSquare className="text-[#39973D] fs-5" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <RiDeleteBin3Fill className="text-[#E11D29] fs-5" />
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
}
