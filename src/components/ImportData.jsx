import React from "react";
import { DunlineLogo, Link, Quickbooks } from "../assets/icons";

function ImportData() {
  return <div>
      <div className="flex justify-center items-center">
          <div className="box-content h-auto w-full md:w-full p-4 rounded-xl bg-[#F6FFFA]">
              <div className="flex justify-start items-center gap-4 py-6">
                  <DunlineLogo />
                  <Link />
                  <img src="/quickbooks.png"/> 
              </div>
              <div>
                  <h1 class="text-[#323F49] font-semibold text-2xl leading-130%">
                      Import Data from Quickbooks
                  </h1>
                  <p class="text-[#637D92] font-medium text-base leading-7 py-2">
                      Integrate your Quickbooks account to directly import data
                  </p>
              </div>
                  <div class="grid gap-6 mb-6 md:grid-cols-3 py-2">
                      <div>
                          <input type="text" id="first_name" class="bg-[#EAEDFA] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Client ID" required />
                      </div>
                      <div>
                          <input type="text" id="last_name" class="bg-[#EAEDFA] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Client Secret" required />
                      </div>
                      <div>
                          <button class="bg-[#3F57D6] hover:bg-blue-700 text-white-50 font-bold py-3 px-4 rounded w-full p-3">
                              Add Quickbooks
                          </button>
                      </div>
              </div>
          </div>
      </div>
  </div>;
}

export default ImportData;
