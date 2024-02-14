import React from "react";
import { useParams } from "react-router-dom";

export default function ChatWithUser() {

  const {id,name} = useParams()
  


  return (
    <div>
      <div className="mt-10" >
      <div class="max-w-screen-md mx-auto flex flex-col h-screen bg-black">

        <div class="flex-1 overflow-y-auto p-4">
          <div class="flex flex-col gap-4">

            {/* user name and image */}
            <div class="flex items-center justify-center ">
            <img
                src="https://avatar.iran.liara.run/public/boy"
                alt="User Avatar"
                class="w-8 h-8 rounded-full mr-2"
              />
              <div class="bg-pink-600 p-3 rounded-lg font-bold text-white max-w-[70%]">
               {name}
              </div>
              
            </div>

             {/* <!-- Add more chat messages here --> */}
            <div class="flex items-center">
              <div class="bg-slate-200 text-black p-2 text-sm rounded-lg max-w-[70%]">
               <div className="text-[0.55rem] mb-[-2px] mt-[-6px] text-end  text-opacity-50 "  >
                01-02-23 2:30
               </div>
                Hello! How can I help you?
              </div>
            </div>


            {/* user send  */}
            <div class="flex items-center justify-end">
              <div class=" text-white p-2 text-sm rounded-lg max-w-[70%]">
               <div className="text-[0.55rem] mb-[-2px] mt-[-6px] text-end  text-opacity-20"  >01-02-23 2:30</div>
                Hello! How can I help you?
              </div>
            </div>
            


          </div>
        </div>


            {/* input box */}
        <div class="  flex items-center justify-between bg-purple-500 p-4">
          <input
            type="text"
            placeholder="Type your message"
            class="flex-1 p-2 rounded-md border text-black bg-purple-200 border-gray-300 focus:outline-none"
          />
          <button class="ml-2 bg-purple-800 text-white p-2 rounded-md">
            Send
          </button>
        </div>


      </div>
    </div>
    </div>
  );
}

