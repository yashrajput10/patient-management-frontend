import React, { useState } from "react";
import DoctureSidebar from "./DoctureSidebar"; // Assuming you have a sidebar component for the doctor
import { PaperClipIcon } from '@heroicons/react/24/solid'; // Attachment icon
import { UserIcon } from "@heroicons/react/24/outline"; // User icon for patient avatars
import Dnavbar from "./Dnavbar";

// Example data for initial patients
const initialPatients = {
  "Daisy Benjamin": {
    avatar: "https://via.placeholder.com/50", // Placeholder image
    messages: [
      { id: 1, text: "Hi Daisy, How are you?", sender: "Samantha", time: "10:48 AM" },
      { id: 2, text: "Waiting for your reply...", sender: "Samantha", time: "10:50 AM" },
      { id: 3, text: "Hi, I am coming in a few minutes.", sender: "You", time: "10:50 AM" },
      { id: 4, text: "PDF Documentation", sender: "You", time: "11:05 AM", file: true }
    ]
  },
  "John Doe": {
    avatar: "https://via.placeholder.com/50", // Placeholder image
    messages: [
      { id: 1, text: "Good morning, doctor.", sender: "John", time: "08:30 AM" },
      { id: 2, text: "Can we schedule an appointment?", sender: "John", time: "08:35 AM" }
    ]
  },
  "Samantha Smith": {
    avatar: "https://via.placeholder.com/50", // Placeholder image
    messages: [
      { id: 1, text: "Hello Samantha, How's your progress?", sender: "You", time: "09:00 AM" }
    ]
  }
};

const DoctureChat = () => {
  const [selectedPatient, setSelectedPatient] = useState("Daisy Benjamin");
  const [patientsMessages, setPatientsMessages] = useState(initialPatients);
  const [newMessage, setNewMessage] = useState(""); // For handling input message
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: patientsMessages[selectedPatient].messages.length + 1,
        text: newMessage,
        sender: "You",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Update the messages for the selected patient
      setPatientsMessages({
        ...patientsMessages,
        [selectedPatient]: {
          ...patientsMessages[selectedPatient],
          messages: [...patientsMessages[selectedPatient].messages, newMsg]
        }
      });

      setNewMessage(""); // Resetting the input field
    }
  };

  // Filter patients based on the search query
  const filteredPatients = Object.keys(patientsMessages).filter((patient) =>
    patient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <DoctureSidebar />

      {/* Main Content */}
      <div className="flex-grow overflow-auto">
        {/* Navbar */}
        <div className="sticky top-0 z-10">
          <Dnavbar />
        </div>

        {/* Chat and Patient Selection */}
        <div className="flex h-full">
          {/* Sidebar for Patients */}
          <div className="w-1/4 p-4 bg-white border-r">
            <div className="flex items-center mb-6">
              <UserIcon className="w-10 h-10 mr-4 text-gray-400" />
              <div>
                <h3 className="text-lg font-medium">{selectedPatient}</h3>
                <p className="text-sm text-gray-500">Chat with your patient</p>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Search Patient"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              />
              <ul className="mt-4">
                {/* List of Patients */}
                {filteredPatients.map((patient) => {
                  const lastMessage = patientsMessages[patient].messages.slice(-1)[0]; // Get the last message
                  return (
                    <li
                      key={patient}
                      className={`p-2 cursor-pointer rounded-lg ${patient === selectedPatient ? "bg-blue-100" : "hover:bg-gray-100"
                        }`}
                      onClick={() => setSelectedPatient(patient)}
                    >
                      <div className="flex items-center">
                        <img
                          src={patientsMessages[patient].avatar}
                          alt="Avatar"
                          className="w-10 h-10 mr-4 rounded-full"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <span className="font-medium">{patient}</span>
                            <span className="text-sm text-gray-500">{lastMessage.time}</span>
                          </div>
                          <p className="text-sm text-gray-500 truncate">
                            {lastMessage.file ? "Attachment" : lastMessage.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Chat Section */}
          <div className="flex flex-col w-3/4 p-6 bg-gray-50">
            {/* Selected Patient Header */}
            <div className="flex items-center pb-4 mb-4 border-b">
              <img
                src={patientsMessages[selectedPatient].avatar}
                alt={`${selectedPatient} Avatar`}
                className="w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-lg font-medium">{selectedPatient}</h3>
                <p className="text-sm text-gray-500">Chatting with {selectedPatient}</p>
              </div>
            </div>

            <div className="flex-grow overflow-auto">
              {/* Chat Messages */}
              {patientsMessages[selectedPatient]?.messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                  <div className="mb-4">
                    <div
                      className={`p-4 rounded-lg ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
                        }`}
                    >
                      {msg.file ? (
                        <div className="flex items-center">
                          <PaperClipIcon className="w-5 h-5 mr-2" />
                          <span>{msg.text}</span>
                        </div>
                      ) : (
                        <span>{msg.text}</span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {msg.sender} • {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input for new messages */}
            <div className="flex items-center p-4 border-t">
              <input
                type="text"
                className="w-full p-2 mr-2 border rounded-lg"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="p-2 text-white bg-blue-500 rounded-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctureChat;
