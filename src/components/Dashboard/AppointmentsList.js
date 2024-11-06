import noapoointment from '../images/no appoinment.png'

export default function AppointmentsList() {
    // Static data for appointments
    const appointments = [
      {
        id: 1,
        patientName: 'John Doe',
        time: '10:00 AM',
        doctor: 'Dr. Smith',
      },
      {
        id: 2,
        patientName: 'Jane Doe',
        time: '11:30 AM',
        doctor: 'Dr. Johnson',
      },
      {
        id: 3,
        patientName: 'Michael Green',
        time: '01:00 PM',
        doctor: 'Dr. Brown',
      },
      {
        id: 4,
        patientName: 'Sarah White',
        time: '03:00 PM',
        doctor: 'Dr. Davis',
      },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg text-center" style={{width:"130%", height:"343px"}}>
        <h3 className="text-xl font-bold mb-4 d-flex">Today's Appointments List</h3>
        <div className='d-flex aling-items-center justify-content-center'> 
        <img
        src={noapoointment}
        className="d-flex "
    />
        </div>
      </div>
    );
  }
  