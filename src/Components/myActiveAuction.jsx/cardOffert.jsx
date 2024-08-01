import React, { useEffect } from "react";

import { Input, initTWE } from "tw-elements";

function CardOfert({ lastOffert }) {


    // useCallback for generateNumbers
   

    // useEffects
    useEffect(() => {
        initTWE({ Input });
     
    }, [lastOffert]);

  



   

   
 
  
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
                     
                       <div class="max-w-2xl mx-auto">
  <div class="overflow-auto  max-w-md bg-white rounded-lg border shadow-md sm:p-1 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h3>
      
    </div>
    <div class="flow-root">
      <ul  class="divide-y divide-gray-200 dark:divide-gray-700 max-h-64 overflow-y-auto">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil " />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie " />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael " />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Lana " />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
          </div>
        </li>
        <li class="pt-3 pb-0 sm:pt-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas " />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomes Lean</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>
          </div>
        </li>
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