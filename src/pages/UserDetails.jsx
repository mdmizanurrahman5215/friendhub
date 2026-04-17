import React from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Button from "../components/ui/Button";

import { FaArchive, FaBell, FaTrash } from "react-icons/fa";
import { BiSolidPhoneCall, BiVideo } from "react-icons/bi";
import { BsChatLeftTextFill } from "react-icons/bs";
import StatsCard from "../components/ui/StatsCard";
import { toast } from "react-toastify";

const UserDetails = () => {
  const { setTimeline } = useAppContext();
  // const {id}=useParams()
  const location = useLocation();

  const user = location.state;
  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    email,
    goal,
    next_due_date,
    bio,
  } = user;

  const handleButtonClick = (action) => {
    if (action === "Call") {
      setTimeline((prev) => [
        ...prev,
        {
          type: "Call",
          name,
          timestamp: new Date().toLocaleString(),
          icon: <BiSolidPhoneCall />,
          fill: "#4F46E5",
        },
      ]);
      toast.success(`Call with ${name}`)
    } else if (action === "Text") {
      setTimeline((prev) => [
        ...prev,
        {
          type: "Text",
          name,
          timestamp: new Date().toLocaleString(),
          icon: <BsChatLeftTextFill />,
          fill: "#10B981",
        },
         toast.success(`Text with ${name}`)
      ]);
    } else if (action === "Video") {
      setTimeline((prev) => [
        ...prev,
        {
          type: "Video",
          name,
          timestamp: new Date().toLocaleString(),
          icon: <BiVideo />,
          fill: "#F59E0B",
        },
         toast.success(`Video with ${name}`)
      ]);
    }
  };

  return (
    <div className="my-10">
      <div className="container mx-auto mx-w-[90%]">
        <div className="bg-white rounded-xl grid grid-cols-3">
          {/* left part  */}
          <div className="left col-span-1   rounded-lg  flex flex-col items-center gap-2">
            <div className=" shadow-md rounded-lg  flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition w-full p-4">
              <div className="w-40 h-40 bg-red-300 rounded-full">
                <img
                  src={picture}
                  alt={name}
                  className="w-full h-full object-cover rounded-full overflow-hidden"
                />
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p
                className={`text-lg font-bold px-4 py-1 mt-2 rounded-md ${status === "almost due" ? "text-white bg-[#EFAD44] " : status === "on-track" ? "text-white bg-[#244D3F]" : "text-white bg-red-500"}`}
              >
                {status}
              </p>

              <div>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-x font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-2 font-semibold">{bio}</p>
              <p className="text-gray-600 mt-2">
                Prefered : <span className="font-semibold">{email}</span>
              </p>
            </div>
            <div className="w-full ">
              <Button
                variant="outline"
                className="w-full mt-4 shadow-md border-none justify-center"
                icon={<FaBell />}
              >
                Snooze 2 weeks
              </Button>
              <Button
                variant="outline"
                className="w-full mt-4 shadow-md border-none justify-center"
                icon={<FaArchive />}
              >
                Archive
              </Button>
              <Button
                variant="danger"
                className="w-full mt-4 shadow-md border-none justify-center"
                icon={<FaTrash />}
              >
                Delete
              </Button>
            </div>
          </div>
          {/* right part   */}
          <div className="right col-span-2 ">
            <div className="grid grid-cols-3 gap-4 p-4 mb-4">
              <StatsCard
                title="Days Since Contact"
                value={days_since_contact}
              />
              <StatsCard title="Goal" value={goal} />
              <StatsCard
                title="Next Due Date"
                value={next_due_date}
                className="text-2xl"
              />
            </div>
            <div className="shadow-md p-4  mb-4 mx-4">
              <div className="flex justify-between px-6">
                <h3 className="text-xl font-semibold mb-2 text-[#244D3F]">
                  Relationship goal
                </h3>
                <button className="bg-blue-200 px-4 py-1 font-medium rounded-md">
                  Edit
                </button>
              </div>
              <p className="px-6">
                Connect Every{" "}
                <span className="text-2xl font-bold">30 days</span>
              </p>
            </div>

            <div className=" mb-4">
              <h3 className="text-xl font-semibold mb-2 text-[#244D3F] px-6">
                Quick Check-in
              </h3>
              <div className="grid grid-cols-3 gap-4 p-4">
                <button
                  className="hover:bg-gray-200"
                  onClick={() => handleButtonClick("Call")}
                >
                  <StatsCard title="Call" icon={<BiSolidPhoneCall />} />
                </button>
                <button
                  className="hover:bg-gray-200"
                  onClick={() => handleButtonClick("Text")}
                >
                  {" "}
                  <StatsCard title="Text" icon={<BsChatLeftTextFill />} />
                </button>
                <button
                  className="hover:bg-gray-200"
                  onClick={() => handleButtonClick("Video")}
                >
                  <StatsCard
                    title="Video"
                    icon={<BiVideo />}
                    className="text-2xl"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
