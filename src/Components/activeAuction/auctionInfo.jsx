import React from "react"

function AuctionInfo() {
    return (
        <div className="w-full  flex-col px-[30px] ">
        <div className=" text-[40px] w-[100%]"><h1>Nike Air Force 1 Low Catechu Women Sneakers 41</h1></div>

        <section className="text-gray-600 body-font flex justify-center    ">
            <div className="container  flex flex-wrap  ">

                <div className="flex flex-wrap  w-full   ">
                    <div className="flex flex-wrap w-[90%]">
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
        <div ><h1 className="text-[40px]">Descripcion</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus accusantium fuga excepturi facere, distinctio sunt, hic impedit quaerat architecto dolore, commodi quisquam error deserunt ipsa neque omnis officiis suscipit tenetur?</p></div>
    </div>


    )
}
export default AuctionInfo;