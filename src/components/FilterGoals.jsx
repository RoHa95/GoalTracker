import React from "react";
import { BiSearch } from "react-icons/bi";

function FilterGoals() {
  return (
    <div className="bg-white rounded-md px-2">
      <h3 className="text-blue-700 font-semibold">Filter Goals</h3>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col">
          <span>search</span>
          <div className="flex border-2 border-blue-700 rounded-md items-center justify-between">
            <input className=" p-1 w-full" type="text" placeholder="search" />
            <div className="px-2 cursor-pointer text-blue-700 text-lg">
              <BiSearch />
            </div>
          </div>
        </div>
        <select
          className="w-full border-2 border-blue-700 rounded-md p-1"
          name=""
          id=""
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="paused">Paused</option>
        </select>
        <select className="w-full border-2 border-blue-700 rounded-md p-1" name="" id="">
          <option value="">category 1</option>
          <option value="">category 2</option>
          <option value="">category 3</option>
        </select>
        <div className="w-full flex flex-col pb-2">
          <span>Sort by :</span>
          <select className="w-full border-2 border-blue-700 rounded-md p-1" name="" id="">
            <option value="progress">Progress</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterGoals;
