import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileEdit = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [profileData, setProfileData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    country:"",                                                 
    state: "",
    city: "",
    hospitalName: "",
    gender: "",
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/getadmin", {
          method: "GET",
          credentials: "include", // Ensure your backend handles cookies correctly
        });
        if (!response.ok) {
          throw new Error("Failed to fetch admin data. Status code: " + response.status);
        }
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching admin data.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchAdminData();
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.patch(
        'http://localhost:8000/admin/update',
        profileData,
        { withCredentials: true }
      );
      if (response.data) {
        setSuccessMessage("Profile updated successfully!");
        toast.success("Profile updated successfully!");
        setIsEditable(false);
        setTimeout(() => {
          setSuccessMessage("");
        }, 10000);
      }
    } catch (error) {
      console.error("Error updating profile", error);
      setErrorMessage(
        "Failed to update profile: " +
          (error.response ? error.response.data.msg : error.message)
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">Profile</h2>
          <button
            className="px-4 py-2 text-white transition-transform duration-200 transform rounded-lg profile-btn bg-blue hover:scale-105"
            onClick={() => setIsEditable(!isEditable)}
          >
            
            {isEditable ? "Cancel Edit" : "Edit Profile"}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* First Name */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                type="text"
                id="firstname"
                value={profileData.firstname || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="firstname"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                First Name
              </label>
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="lastname"
                value={profileData.lastname || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="lastname"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                Last Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                value={profileData.email || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="email"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                id="phonenumber"
                value={profileData.phonenumber || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="phonenumber"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                Phone Number
              </label>
            </div>

            {/* Hospital Name */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="hospitalName"
                value={profileData.hospitalName || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="hospitalName"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                Hospital Name
              </label>
            </div>

            {/* Gender */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="gender"
                value={profileData.gender || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="gender"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                Gender
              </label>
            </div>

            {/* City */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="city"
                value={profileData.city || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="city"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                City
              </label>
            </div>

            {/* State */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="state"
                value={profileData.state || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="state"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                State
              </label>
            </div>

            {/* Country */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="country"
                value={profileData.country || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="country"
                className="absolute top-0 px-1 text-sm font-medium text-gray-600 -translate-y-4 bg-white left-4"
              >
                Country
              </label>
            </div>
          </div>

          {isEditable && (
            <div className="flex justify-end mt-6 ml-auto">
              <button
                type="button" // Change to type "button" to avoid form submission
                className="px-4 py-2 text-black transition-colors bg-white rounded-lg hover:bg-green-600"
                onClick={() => setIsEditable(false)} // Cancel button to exit edit mode
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white transition-colors rounded-lg bg-blue hover:bg-green-600"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
