import React, { useEffect } from "react";

import { Input, initTWE } from "tw-elements";

function CardOfert({ lastOffert, bidData }) {


  // useCallback for generateNumbers


  // useEffects
  useEffect(() => {
    initTWE({ Input });

  }, []);










  // Render
  return (
    <div className="w-full mt-2 mb-7">
      <div className="p-[5%] bg-white text-bidcraft-dark h-auto rounded-t-lg">
        <div>Precio actual</div>
        <div className="flex justify-end text-[15px] md:text-[40px]">L.{lastOffert}</div>
      </div>
      <div className="p-[5%] bg-bidcraft-dark h-[80%] rounded-b-lg">
        <div>
          <div><center className="text-white">Ofertas</center></div>
          <div className="grid grid-cols-1 gap-x-2 my-[10px] h-auto">
            <div>

              <div className="max-w-2xl mx-auto">
                <div className="overflow-auto   bg-white rounded-lg border shadow-md sm:p-1 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Historial de pujas</h3>

                  </div>




                  <div className="flow-root w-full">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-64 overflow-y-auto">

                      {bidData.length > 0 && (
                        bidData.map(bid => (
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src={`https://ui-avatars.com/api/?name=${bid.bidder.first_name}&background=random`} alt="Neil " />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{bid.bidder.first_name + " " + bid.bidder.last_name}</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{bid.bidder.email}</p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{bid.bid_amount}</div>
                            </div>
                          </li>

                        ))
                      )}

                    </ul>
                  </div>



                </div>
              </div>



            </div>
          </div>
          <div className="relative mb-3 mt-4">



          </div>

        </div>
      </div>
    </div>
  );
}

export default CardOfert;