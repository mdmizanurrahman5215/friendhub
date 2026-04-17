import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import EmptyPage from "./EmptyPage";
import SearchWithDropdown from "../components/ui/Input";

const Timeline = () => {
  const { timeline } = useAppContext();
  const [filterText, setFilterText] = useState("All");

  const filteredTimeline =
    filterText === "All"
      ? timeline
      : timeline.filter((item) => item.type === filterText);

  return (
    <div>
      <div className="container mx-auto max-w-[90%]">
        <h1 className="text-3xl font-bold my-10">Timeline</h1>
        
        {timeline.length === 0 ? (
          <EmptyPage />
        ) : (
          <>
          <div>
          <SearchWithDropdown setFilterText={setFilterText} />
        </div>
          <div className="my-10">
            <ul className=" max-h-[60vh] overflow-auto border border-gray-200 p-2 rounded-md">
              {filteredTimeline.map((event, index) => {
                const { type, name, timestamp, icon } = event;
                return (
                  <li key={index} className="mb-4">
                    <div className="flex justify-start items-center gap-4 p-4  shadow-sm">
                      <span className="text-3xl text-green-900">{icon}</span>
                      <div>
                        <p className="text-green-900 font-semibold">
                          {type} with {name}
                        </p>
                        <p>{timestamp}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Timeline;
