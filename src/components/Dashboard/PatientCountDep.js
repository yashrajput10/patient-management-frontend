import React from 'react';
import nodoctorfound from '../images/nodoctorfound.png';

const PatientCountDep = () => {
   
      return (
        <div className="bg-white p-3 rounded-lg text-center" style={{ height:"343px"}}>
          <h3 className="text-xl font-bold mb-4 d-flex">Patients Count Department</h3>
          <div className='d-flex aling-items-center justify-content-center'> 
          <img
          src={nodoctorfound}
          className="d-flex w-50 mt-4"
      />
          </div>
        </div>
      );
    }

export default PatientCountDep;