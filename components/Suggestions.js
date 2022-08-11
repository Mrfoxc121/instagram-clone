import React, { useEffect, useState } from "react";
import minifaker from "minifaker";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
        username: minifaker.username({locale: "en"}).toLowerCase(),
        jobTitle: minifaker.jobTitle(),
        id: i
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-10 ml-10">
      <div className=" flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400 ">Suggestions for you</h3>
        <button className="text-gray-600 fontsemibold">See All</button>
      </div>
      {suggestions.map(suggestions => (
        <div key={suggestions.id} className="flex justify-between items-center mt-3">
            <img className="h-10 w-10 rounded-full border p-[2px]" src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="user-image" />
            <div className="flex-1 ml-4">
                <h2 className=" font-semibold text-sm">{suggestions.username}</h2>
                <h3 className="text-sm text-gray-400 truncate w-[240px]">{suggestions.jobTitle}</h3>
            </div>
            <button className="text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
}
