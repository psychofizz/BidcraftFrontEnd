import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Tab, initTWE } from "tw-elements";
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import Footer from "../Components/page-essentials/Footer";
import axios from "axios";
import Review from "../Components/profile/Review";
import MyAuctions from "../Components/profile/myAuction"

function Profile() {
  useEffect(() => {
    initTWE({ Tab });
    myAuctions();
  },[]);
//-------------------------- obtener--------------------------
var user = JSON.parse(localStorage.getItem("User"));
//-------------------------aca obtenemos ---------------------
const [productMyInfo, setProductInfo] = useState([]);

//-----------------------Esto nos sirve para obtener my toquen del localstorage
  const jwt = JSON.parse(localStorage.getItem("token"));
//-----------------------Esta funcion nos sirve para obtener mis subastas---------------------------------------

const myAuctions = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/auction/show/all/user/", {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },

    });
   console.log(response.data)
   setProductInfo(response.data)
  } catch (error) {
   
  }
};




//--------------------------------------------------------------------------------------------------------

  return (
    <div className="bg-bidcraft-grey">
      <div id="imgProfile">
        <MainNavbar></MainNavbar>
        <CategoriesBar></CategoriesBar>

        <section className="w-full overflow-hidden dark:bg-gray-900">
          <div className="w-full mx-auto">
            <img
              src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="User Cover"
              className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
            />

            <div className="w-full mx-auto flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="User Profile"
                className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
              />
            </div>

            <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
              <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif text-white">
                {user.first_name+ " "+ user.last_name }
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div
        id="tabs"
        className="mx-[30px] xl:mx-[400px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]   "
      >
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
          role="tablist"
          data-twe-nav-ref
        >
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-home02"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#tabs-home02"
              data-twe-nav-active
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Historial de Subastas
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-profile02"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#tabs-profile02"
              role="tab"
              aria-controls="tabs-profile02"
              aria-selected="false"
            >
              Reseñas
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-messages02"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#tabs-messages02"
              role="tab"
              aria-controls="tabs-messages02"
              aria-selected="false"
            >
              Mis subastas
            </a>
          </li>
        </ul>

        <div className="mb-6">
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-home02"
            role="tabpanel"
            aria-labelledby="tabs-home-tab02"
            data-twe-tab-active
          >
           {productMyInfo.length > 0 ? (
  <div>
    {productMyInfo.map((producto) => (
      <div key={producto.auction_id}>
        
        <MyAuctions idAuction={producto.auction_id} name={producto.name} description={producto.description} highest_bid={producto.highest_bid} updateAuction={myAuctions} imgUrl={producto.images[0]} />
      </div>
    ))}
  </div>
) : null}
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-profile02"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab02"
          >
            <Review></Review>
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-messages02"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab02"
          >

          
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-contact02"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab02"
          >
            Tab 4 content
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Profile;
