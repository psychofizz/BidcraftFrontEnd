import React, { useState, useEffect } from 'react';
import Footer from "../Components/footer";
import Header from '../Components/header';




function Perfil() {
  const [activeTab, setActiveTab] = useState('tab1');
  const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY); // "miClaveDeUsuario"
  const usuario = JSON.parse(storedData)

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };



  return (

    <div className="w-full overflow-hidden dark:bg-white">

      <Header />
      <div className="w-full mx-auto">

        <img src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]" />

        <div className="w-full mx-auto flex justify-center">
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile"
            className="rounded-full object-cover xl:w-[20rem] xl:h-[20rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem]  shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]" />
        </div>

        <div
          className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">



          {/* <div className="w-[150px] text-gray-900 dark:text-gray-100">
	<div className="relative w-full group">
		<label className="text-xs text-gray-400">Select Category</label><button className="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">All</button>
		<div
			className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
			<div
				className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				All (9)</div>
			<div
				className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				Full Stack (6)
			</div>
			<div
				className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				Front End (1)
			</div>
			<div
				className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				Freelance (1)
			</div>
			<div
				className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				New Stack
				Project (1)</div>
		</div>
	</div>
</div>*/}




          <h2 className="text-center text-gray-800 dark:text-black text-4xl font-serif">{usuario.nombre}</h2>
          <div className="w-full ">
            <div className="flex border-t border-gray-300">
              <button
                className={`w-1/2 py-4 text-center font-medium text-gray-700  focus:outline-none  ${activeTab === 'tab1' ? 'border-ffc327 border-b-4 transition ease-in-out delay-100' : ''
                  }`}
                onClick={() => openTab('tab1')}
              >
                Historial de Subastas
              </button>
              <button
                className={`w-1/2 py-4 text-center font-medium text-gray-700  focus:outline-none  ${activeTab === 'tab2' ? 'border-ffc327 border-b-4 transition ease-in-out delay-100 ' : ''
                  }`}
                onClick={() => openTab('tab2')}
              >
                Reseñas/Comentarios
              </button>
              <button
                className={`w-1/2 py-4 text-center font-medium text-gray-700  focus:outline-none  ${activeTab === 'tab3' ? 'border-ffc327 border-b-4 transition ease-in-out delay-100' : ''
                  }`}
                onClick={() => openTab('tab3')}
              >
                Historial de Subastas
              </button>

            </div>
            {/*----------------------------- Contenido del Tab 1 ----------------------------- */}
            <div
              id="tab1"
              className={`tabcontent transition-opacity duration-200 ease-in-out ${activeTab === 'tab1' ? 'opacity-100' : 'w-0 h-0  opacity-0 pointer-events-none'
                }`}
            >
              <section className="w-full" id="historialSubastas">
                <div className={` bg-white shadow-2xl w-full ${activeTab === 'tab1' ? 'mt-10' : 'mt-0'
                  } `}>
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-full"
                        src="https://loremflickr.com/g/320/240/team"
                        alt="example"
                      />
                    </div>
                    <div className="p-8 xs:p-4 lg:p-8 w-full">
                      <div className="h-5/6">
                        <h1 className='text-4xl'>Nike - Sneakers - Size: Shoes / EU 46</h1>
                        <p className='text-2xl'>Precio de venta: L. 12,000</p>
                      </div>
                      <div className="text-right">Satisfacción *****</div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 bg-white shadow-2xl overflow-hidden w-full">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-full"
                        src="https://loremflickr.com/g/320/240/team"
                        alt="example"
                      />
                    </div>
                    <div className="p-8 xs:p-4 lg:p-8 w-full">
                      <div className="h-5/6">
                        <h4 className='text-4xl'>Nike - Sneakers - Size: Shoes / EU 46</h4>
                        <p>Precio de venta: L. 12,000</p>
                      </div>
                      <div className="text-right">Satisfacción *****</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*----------------------------- Contenido del Tab 2 ----------------------------- */}
            <div id="tab2" className={`tabcontent transition-opacity duration-200 ease-in-out  ${activeTab === 'tab2' ? 'opacity-100' : 'w-0 h-0  opacity-0 pointer-events-none'}`}>

              <section id='reseñas' className='w-full '>

                <div className={` flex flex-col sm:flex-row shadow-2xl overflow-hidden py-1 px-1 w-full text-center sm:text-left ${activeTab === 'tab2' ? 'mt-10' : 'mt-0'
                  }`}>
                  <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-gray-400 self-center"></div>
                  <div className="flex flex-col py-2 pr-2">
                    <h4 className="text-lg font-light">Hello World</h4>
                    <p className="text-sm font-hairline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed porro, mollitia soluta, dignissimos labore ab magni temporibus sequi maiores.</p>
                  </div>
                </div>
                <div className="mt-10  flex flex-col sm:flex-row shadow-2xl overflow-hidden py-1 px-1 w-full text-center sm:text-left">
                  <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-gray-400 self-center"></div>
                  <div className="flex flex-col py-2 pr-2">
                    <h4 className="text-lg font-light">Hello World</h4>
                    <p className="text-sm font-hairline">Lorem, ipsumzxccccccccccccccccccccccccccccccccccccccccccccccccadsssssssssssssssssssssssssssssssssssssssss dolor sit amet consectetur adipisicing elit. Sed porro, mollitia soluta, dignissimos labore ab magni temporibus sequi maiores.</p>
                  </div>
                </div>
              </section>
            </div>

            {/*----------------------------- Contenido del Tab 1 ----------------------------- */}
            <div id="tab3" className={`tabcontent transition-opacity duration-200 ease-in-ou   ${activeTab === 'tab3' ? 'opacity-100' : 'w-0 h-0  opacity-0 pointer-events-none'}`}>
              <section className='w-full mt-10' id='nuevaReseña'>

                <div className="h-80 px-7 w-full  bg-white p-4 shadow-md border">
                  <h2>Nueva reseña</h2>
                  <h2>Descripcion:</h2>
                  <textarea className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border  placeholder:text-sm" placeholder="Add your comments here"></textarea>

                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-blue-900 ">Enter atleast 15 characters</p>
                    <button className="h-12 w-[150px] bg-blue-400 text-sm text-white transition-all cursor-pointer hover:bg-blue-600">
                      Submit comment
                    </button>
                  </div>
                </div>




              </section>

            </div>
          </div>










        </div>
      </div>
      <Footer />
    </div>


  )


}



export default Perfil;