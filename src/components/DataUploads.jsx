import React, { useState } from "react";
import TagSelector from "../Popover/TagSlector";
import { SmallExcellcon } from "../assets/icons";
import { MdAutoAwesome } from "react-icons/md";
import { TiArrowRepeat } from "react-icons/ti";

function DataUploads({ data }) {
  const [selectedTagsMap, setSelectedTagsMap] = useState({});
  const [visibleBadges, setVisibleBadges] = useState({});

  if (!data || data.length === 0) {
    return <div></div>;
  }

  const columns = Object.keys(data[0]);

  const handleTagChange = (event, id) => {
    const selectedTag = event.target.value;

    setSelectedTagsMap((prevMap) => ({
      ...prevMap,
      [id]: [...(prevMap[id] || []), selectedTag],
    }));

    setVisibleBadges((prevVisibleBadges) => ({
      ...prevVisibleBadges,
      [id]: true,
    }));
  };

  const handleBadgeDismiss = (id, index) => {
    setSelectedTagsMap((prevMap) => ({
      ...prevMap,
      [id]: prevMap[id].filter((_, i) => i !== index),
    }));

    if (selectedTagsMap[id].length === 0) {
      setVisibleBadges((prevVisibleBadges) => ({
        ...prevVisibleBadges,
        [id]: false,
      }));
    }
  };

  return (
    <>
      <div className="p-0 md:p-4 mt-5">
        <div className=" items-center ">
          <div className="text-black-10 text-2xl font-medium font-figtree leading-8 mb-5">
            Financial Transections
          </div>
          <div className="flex gap-4 py-4">
            <button class="bg-[#F6FFFA] hover:bg-blue-700 text-[#0B7B69] font-bold py-4 border border-[#0B7B69] px-6 rounded-md">
              <div class="flex justify-center items-center gap-4">
                <SmallExcellcon /> Upload transactions Excel
              </div>
            </button>
            <button class="bg-[#0B7B69] hover:bg-blue-700 text-white-10 font-bold py-4 border border-[#F6FFFA] px-6 rounded-md">
              <span className="text-md mr-3"> + </span> Import New Quickbooks
              Transactions
            </button>
          </div>
        </div>

        <div className="bg-white-30 p-4 rounded-lg">
          <div class="flex gap-4 py-4">
            <input
              type="text"
              id="large-input"
              class="block w-8/12 p-4 text-gray-900 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type to search....."
            />
            <div class="flex gap-2">
              <button class="bg-[#3F57D6] hover:bg-blue-700 text-[#EAEDFA] font-bold py-1 border border-[#0B7B69] px-4 rounded-md">
                <div class="flex justify-center items-center gap-2">
                  <MdAutoAwesome /> Auto Categorize
                </div>
              </button>
              <button class="bg-[#EAEDFA] hover:bg-blue-700 text-[#3F57D6] font-bold py-1 border border-[#F6FFFA] px-4 rounded-md">
                <div className="flex justify-center items-center gap-2">
                  <TiArrowRepeat /> Update Table
                </div>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex rounded-md text-base font-figtree mb-2 p-3 bg-white-10">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className={`flex-none text-gray-lightbulma figtree-font text-lg font-semibold leading-6 p-2 px-3 ${
                    index === 0 ? "pe-12" : ""
                  } ${index === 0 ? "" : "w-3/5 md:w-1/4 "}`}
                >
                  {column}
                </div>
              ))}
            </div>

            {data.map((row, index) => (
              <div
                key={index}
                className="flex max-w-screen rounded-md text-base font-figtree mb-2 p-2 w-full"
              >
                <div className="flex-none font-medium text-gray-lightbulma me-4 p-2 pe-12 rounded pt-4 bg-white-10">
                  {row.amount}
                </div>
                <div className=" whitespace-nowrap flex-none text-blue-20 underline p-2 px-5 w-3/5 md:w-1/4 bg-white-10 rounded-tl-md rounded-bl-md pt-4 hover:bg-[#FFF4E7]">
                  {row.name}
                </div>
                <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 px-5 md:w-1/4 bg-white-10 pt-4 hover:bg-[#FFF4E7]">
                  {row.transection}
                </div>

                {/* <div className="flex max-w-screen-2xl font-figtree bg-white-20 rounded-tr-md rounded-br-md">
                  <TagSelector
                    className="bg-white-20"
                    tags={row['select tags'].split(',').map((tag) => tag.trim())}
                    value={selectedTagsMap[row.id] || 'default'}
                    onChange={(event) => handleTagChange(event, row.amount)}
                  />
                  {selectedTagsMap[row.id] &&
                    selectedTagsMap[row.id].map((tag, index) => (
                      <div key={index} className="flex-none inline-flex items-center px-2 mx-2 text-sm font-medium text-white-10 bg-blue-10 my-3 rounded">
                        {tag}
                        <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300" data-dismiss-target="#badge-dismiss-pink" onClick={() => handleBadgeDismiss(row.id, index)} aria-label="Remove">
                          <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                        </button>
                      </div>
                    ))}
                </div> */}
                <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 px-5 md:w-1/4 bg-white-10 pt-4 hover:bg-[#FFF4E7]">
                  {row.types}
                </div>
                <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 px-5 md:w-1/4 bg-white-10 pt-4 hover:bg-[#FFF4E7]">
                  {row.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DataUploads;
