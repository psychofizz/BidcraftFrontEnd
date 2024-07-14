
import React,{useState,useEffect} from "react"
import axios from 'axios'
function AuctionInfo({ name, description, idAuction }) {
    // este nos va a ayudar a saber que funcion utilizar al momento de agregar o quitar me gusta
    const [isFavorite, setIsFavorite] = useState(false);

    //aca simplemente obtememos la informacion del user y la de la subasta
    var userId = JSON.parse(localStorage.getItem("User"));
    console.log(userId.id)
    console.log(idAuction)
    const dataFavorite ={
        user:userId.id,
        auction:idAuction


    }

    //Ver si el usario tiene el producto en favorito

    useEffect(() => {
        // Verifica si el producto ya es favorito al cargar el componente
     
    const stateFavorite = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/favorites/${userId.id}/${idAuction}/`);
            console.log(response.data.exists)
            setIsFavorite(response.data.exists);
        } catch (error) {
            switch (error.response.status) {
                case 400:
                    console.error("Bad request - 400");
                    break;
                case 401:
                    console.error("Unauthorized - 401");
                    break;
                case 403:
                    console.error("Forbidden - 403");
                    break;
                case 404:
                    console.error("Not found - 404");
                    console.log(error.response)
                    break;
                case 500:
                    console.error("Internal server error - 500");
                    break;
            };


        
        }
       
    }
    //{isFavorite ? removeFavorite : addFavorite}
    stateFavorite();
      }, [idAuction]);

      const addFavorite = async () => {
         
        try {
            setIsFavorite(true);
          const res = await axios.post('http://127.0.0.1:8000/api/favorites/create/one/', dataFavorite);
          
       console.log(res.data.message)
        } catch (error) {
          console.error('Error making POST request:', error);
        }
      };
      const removeFavorite = async () => {
        console.log(dataFavorite)
        try {
            setIsFavorite(false);
            const res = await axios.delete(`http://127.0.0.1:8000/api/favorites/delete/one/${dataFavorite.user}/${dataFavorite.auction}/`);
          
            console.log(res)
           
          } catch (error) {
            console.error('Error making POST request:', error);
          }
        
      };
    return (
        <div className="w-full  flex-col px-[30px] ">
            <div className=" text-[40px] w-[100%] flex flex-col-2">
                <div className="w-[90%]">{name}</div>
                <div><button onClick={isFavorite ? removeFavorite : addFavorite}>Favorite</button></div>

            </div>

            <section className="text-gray-600 body-font flex justify-center    ">
                <div className="container  flex flex-wrap  ">

                    <div className="flex flex-wrap  w-full   ">
                        <div className="flex flex-wrap w-[100%]">
                            <div className=" p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover  object-center block" src="https://dummyimage.com/500x300" />
                            </div>
                            <div className=" p-1 w-[50%]">
                                <img alt="gallery" className="w-full object-cover  object-center block" src="https://dummyimage.com/501x301" />
                            </div>
                            <div className=" p-1 w-full">
                                <img alt="gallery" className="w-full  object-cover object-center block" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div ><h1 className="text-[40px]">Descripcion</h1><p>{description}</p></div>
        </div>


    )
}
export default AuctionInfo;