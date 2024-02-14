import React, { useEffect, useState } from "react";
import { getSideBarUserAPI } from "../api/usersApi";
import { useNavigate } from "react-router-dom";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSideBarUserAPI()
      .then((data) => {
        if (data?.data) {
          setUsers(data?.data);
        }
      })
      .catch((err) => {
        console.log("err in sidebar usrs ", err);
      });
  }, []);

  return (
    <div>
      <AllUsersDesign users={users} />
    </div>
  );
}

export const AllUsersDesign = ({ users }) => {
  const [filterUser, setFilterUser] = useState("");
  const navigate = useNavigate()
  return (
    <div className=" flex items-center justify-center ">
      <ul
        role="menu"
        data-popover="notifications-menu"
        data-popover-placement="bottom"
        className="absolute left-5 z-10 top-32 w-[90%] md:w-[40%] flex-col justify-center md:ml-[15rem] gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
      >
        <input
          type="text"
          className="bg-black mb-8 mt-3 p-3 rounded-lg w-full text-white"
          placeholder="search users"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
        />

        {users?.length > 0 ? (
          <>
            <ul role="list" class="p-6 divide-y divide-slate-200">
              {users
                .filter((i) =>
                  filterUser.toLowerCase() === ""
                    ? i
                    : i?.fullName.includes(filterUser.toLowerCase())
                )
                .map((user) => (
                  <li class="flex py-4 first:pt-0 last:pb-0 hover:bg-slate-100 " onClick={()=>navigate(`/chat/${user?._id}/${user?.fullName}`)}>
                    <img
                      class="h-10 w-10 rounded-full"
                      src={user?.profileImage}
                      alt=""
                    />
                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-black">
                        {user?.fullName}
                      </p>
                      <p class="text-sm text-slate-500 truncate">
                        send a message
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        ) : null}
      </ul>
    </div>
  );
};
