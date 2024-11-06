// Header.js
const Header = () => {
    return (
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Good Morning, Martin!</h1>
          <p className="text-gray-500">Hope you have a good day</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Quick Search"
            className="border rounded-lg px-4 py-2 text-sm"
          />
          <div className="ml-4 flex items-center">
            <img src="./profile.jpg" alt="Admin" className="w-10 h-10 rounded-full" />
            <div className="ml-2 text-sm">
              <p className="font-semibold">Lincoln Philips</p>
              <p className="text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  