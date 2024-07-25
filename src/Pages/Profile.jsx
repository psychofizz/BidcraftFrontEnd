import React, { useEffect, useState, useCallback } from "react";
import { Tab, initTWE, Dropdown, Ripple } from "tw-elements";
import axios from "axios";

import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import Footer from "../Components/page-essentials/Footer";
import MyAuctions from "../Components/profile/myAuction";

function Profile() {
  const [productMyInfo, setProductInfo] = useState([]);
  const user = JSON.parse(localStorage.getItem("User"));
  const jwt = JSON.parse(localStorage.getItem("token"));

  const myAuctions = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auction/show/all/user/`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });
      setProductInfo(response.data);
    } catch (error) {
      console.error("Error fetching auctions:", error);
    }
  }, [jwt]);

  useEffect(() => {
    initTWE({ Tab, Dropdown, Ripple });
    myAuctions();
  }, [myAuctions]);

  return (
    <div className="bg-bidcraft-grey">
      <MainNavbar />
      <CategoriesBar />

      <section className="w-full overflow-hidden dark:bg-gray-900">
        {/* Profile header section */}
        <div className="w-full mx-auto">
          <img
            src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
          />
          <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
            <img
              src={`https://ui-avatars.com/api/?name=${user.first_name}&background=random`}
              alt={user.first_name}
              className="w-48 h-48 rounded-full border-2 border-white"
            />
            {/* Dropdown menu */}
            <div className="relative sm:absolute sm:ml-[80%] lg:ml-[100%]">
              {/* Dropdown button and menu implementation */}
            </div>
            <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">
              {user.first_name + " " + user.last_name}
            </h1>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <div id="tabs" className="mx-[30px] xl:mx-[400px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]">
        <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0" role="tablist" data-twe-nav-ref>
          {/* Tab navigation items */}
        </ul>

        <div className="mb-6">
          {/* Tab content */}
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-home02"
            role="tabpanel"
            aria-labelledby="tabs-home-tab02"
            data-twe-tab-active
          >
            {productMyInfo.length > 0 && (
              <div>
                {productMyInfo.map((producto) => (
                  <MyAuctions
                    key={producto.auction_id}
                    idAuction={producto.auction_id}
                    name={producto.name}
                    description={producto.description}
                    highest_bid={producto.highest_bid}
                    updateAuction={myAuctions}
                    imgUrl={producto.images[0]}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Other tab content */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;