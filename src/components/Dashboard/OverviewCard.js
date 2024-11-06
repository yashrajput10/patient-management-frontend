
const OverviewCard = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3 mb-4">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-full">{icon}</div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OverviewCard;
  