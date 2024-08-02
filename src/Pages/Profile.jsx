import React, { useEffect, useState, useCallback } from "react";
import { Tab, initTWE, Dropdown, Ripple } from "tw-elements";
import axios from "axios";
import MainNavbar from "../Components/navBar/mainNavbar";
import CategoriesBar from "../Components/navBar/CategoriesBar";
import Footer from "../Components/page-essentials/Footer";
import MyAuctions from "../Components/profile/myAuction";
import Modal from "../Components/wonAuction/modalPay"
import Pay from "./PayAuction"
import Loading from "../Components/loading"
function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = (bid) => {
    setSelectedBid(bid); // Establece el highest_bid seleccionado
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const [productMyInfo, setProductInfo] = useState([]);
  const user = JSON.parse(localStorage.getItem("User"));
  const jwt = JSON.parse(localStorage.getItem("token"));
  const [selectedBid, setSelectedBid] = useState(null); // Nuevo estado para el highest_bid

  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMyAuction, setLoadingMyAuction] = useState(true);



 
    const fetchAuctions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auctions/win/`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` // Incluir el token en los headers
          }
        }
        );
        setAuctions(response.data);
        setLoadingMyAuction(false);
      } catch (err) {
        
        
      }
    };

    fetchAuctions();
 


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
    } finally {
      setLoading(false); // Termina la carga cuando se completa la solicitud
    }
  }, [jwt]);

  useEffect(() => {
    initTWE({ Tab, Dropdown, Ripple });
    myAuctions();
    fetchAuctions();
  }, [myAuctions]);

  return (
    <div className="bg-bidcraft-grey">
      <MainNavbar />
      <CategoriesBar />

      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="w-full mx-auto">
          <img
            src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
          />

          <div className="w-full mx-auto flex justify-center">
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
            <img
              src={`https://ui-avatars.com/api/?name=${user.first_name}&background=random`}
              alt={user.first_name}
              className="w-48 h-48 rounded-full border-2 border-white"
            />
            <div className="position relative sm:absolute sm:ml-[80%] lg:ml-[100%]">
              <div className="relative" data-twe-dropdown-ref>
               
                <a
                                        className=" mt-4 flex items-center rounded bg-bidcraft-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-bidcraft-dark hover:shadow-primary-2 focus:bg-bidcraft-dark focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-bidcraft-dark active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"

                      href="/verification"
                      data-twe-dropdown-item-ref
                    >Verificar    </a>
                 
               
                
          
              </div>
            </div>

            <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif text-white">
              {user.first_name + " " + user.last_name}
            </h1>

          </div>
        </div>
      </section>

      <div
        id="tabs"
        className="mx-[30px] xl:mx-[400px] lg:mx-[200px] md:mx-[100px] sm:mx-[59px]"
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
              href="#tabs-resenas"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#tabs-resenas"
              role="tab"
              aria-controls="tabs-resenas"
              aria-selected="false"
            >
              Reseñas
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-miSubastas"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill"
              data-twe-target="#tabs-miSubastas"
              role="tab"
              aria-controls="tabs-miSubastas"
              aria-selected="false"
            >
              Mis subastas
            </a>
          </li>
        </ul>

        <div className="mb-6">
          {/* Tab content */}
          <div
  className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
  id="tabs-home02"
  role="tabpanel"
  aria-labelledby="tabs-home02-tab02"
  data-twe-tab-active
>
  {loading ? (
      <Loading/>
  ) : (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-bidcraft-grey">
      {productMyInfo.length > 0 ? (
        productMyInfo.map((producto) => (
         
          <MyAuctions
            key={producto.auction_id}
            idAuction={producto.auction_id}
            name={producto.name}
          
            highest_bid={producto.highest_bid}
            updateAuction={myAuctions}
            imgUrl={producto.images[0]}
          />
        
        ))
      ) : (
        <p className="text-center text-gray-500">No hay subastas disponibles</p>
      )}
    </div>
  )}
</div>

          {/* Other tab content */}
          {/* Tab content */}
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-miSubastas"
            role="tabpanel"
            aria-labelledby="tabs-home-tab02"
         
          >
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-bidcraft-grey">
              {loadingMyAuction ? (
                <div className="col-span-full text-center text-gray-500">
                   <Loading/>
                </div>
              ) : auctions && auctions.length > 0 ? (
                auctions.map((auction) => (
                 

                  <div onClick={() => openModal(auction.highest_bid)} key={auction.completed_auction_id}>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-[1.040] hover:shadow-2xl shadow-xl p-4 bg-bidcraft-dark">
                      <img
                        src={auction.auction.images[0]?.image_url}
                        alt={auction.auction.name}
                        className="w-full h-48 object-cover mb-2"
                      />
                      <h2 className="text-lg font-bold text-warning-100">{auction.auction.name}</h2>
                      <p className="text-gray-700">{auction.auction.description}</p>
                      <p className="text-gray-500">
                        Categoría: {auction.auction.category.category_name}
                      </p>
                      <p className="text-white font-bold">
                        Precio más alto: ${auction.highest_bid}
                      </p>
                      <p className="text-gray-600">
                        Fecha de finalización: {new Date(auction.date_completed).toLocaleDateString()}
                      </p>
                      <p className="text-green-600">
                        {auction.is_paid ? "Pagado" : "Pendiente de pago"}
                      </p>
                    </div>
                  </div>
                 
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500">
                  No hay productos
                </div>
              )}
            </div>


          </div>
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-resenas"
            role="tabpanel"
            aria-labelledby="tabs-home-tab02"
         
          >
            reseñas
          </div>
        </div>

      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}  >
        <Pay amountBit={selectedBid} fetchAuctions={fetchAuctions} />
      </Modal>
    </div >
  );
}

export default Profile;
