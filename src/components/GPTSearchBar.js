import React from "react";

const GPTSearchBar = () => {
  return (
    <div>
      <form className="pt-[20%] bg-black">
        <input
          type="text"
          className="p-4 m-4"
          placeholder="What would you like to watch today?"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
