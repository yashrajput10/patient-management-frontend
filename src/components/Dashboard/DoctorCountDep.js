import React from 'react';
import nopatientfound from '../images/nopatientfound.png';

const DoctorCountDep = () => {
   
      return (
        <div className="bg-white p-3 rounded-lg text-center" style={{ height:"343px"}}>
          <h3 className="text-xl font-bold mb-4 d-flex">Doctor Count Department</h3>
          <div className='d-flex aling-items-center justify-content-center'> 
          <img
          src={nopatientfound}
          className="d-flex w-50 mt-4"
      />
          </div>
        </div>
      );
    }

export default DoctorCountDep;