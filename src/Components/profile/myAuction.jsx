
import React from "react"
function myAuctions() {
    return (
        <div className="w-full flex flex-col-2 h-[20%] shadow-2xl">
        <div className="w-[30%] bg-slate-400">holap</div>
        <div className="w-[70%] flex flex-col-2">
         <div className="w-[70%] p-5 shadow-2xl">
         <h1>Nike - Sneakers - Size: Shoes / EU 46</h1>
         <h1>Precio de venta  :L. 12,000</h1>
         </div>
         <div className="w-[30%] flex flex-col justify-center px-11 ">
        <button className="border-2 border-blue-600 px-3 py-2 rounded-md">Eliminar</button>
        <button className="border-2 border-red-500 px-3 py-2 mt-1 rounded-md">Editar</button>
        
         </div>
        </div>
        
                   </div>

    )
}
export default myAuctions